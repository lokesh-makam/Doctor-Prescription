import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score
from sklearn.model_selection import GridSearchCV

def train_random_forest(train_path, test_path, model_save_path):
    train_df = pd.read_csv(train_path)
    test_df = pd.read_csv(test_path)

    X_train = train_df.drop(columns=['diseases'])
    y_train = train_df['diseases']
    X_test = test_df.drop(columns=['diseases'])
    y_test = test_df['diseases']

    param_grid = {
        'n_estimators': [100, 200],
        'max_depth': [None, 10, 20],
        'min_samples_split': [2, 5],
        'min_samples_leaf': [1, 2],
        'bootstrap': [True, False]
    }

    grid = GridSearchCV(RandomForestClassifier(random_state=42), param_grid, cv=5, n_jobs=-1)
    grid.fit(X_train, y_train)

    best_model = grid.best_estimator_
    y_pred = best_model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)

    print(f"Best Parameters: {grid.best_params_}")
    print(f"Model Accuracy: {accuracy:.2f}")

    joblib.dump(best_model, model_save_path)
    print(f"Model saved to {model_save_path}")

if __name__ == "__main__":
    train_random_forest("data/train.csv", "data/test.csv", "models/randomforest.pkl")