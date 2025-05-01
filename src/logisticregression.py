import pandas as pd
from sklearn.linear_model import LogisticRegression
from sklearn.metrics import accuracy_score
from sklearn.model_selection import GridSearchCV

def train_logistic_regression(train_path, test_path, model_save_path):
    train_df = pd.read_csv(train_path)
    test_df = pd.read_csv(test_path)

    X_train = train_df.drop(columns=['diseases'])
    y_train = train_df['diseases']
    X_test = test_df.drop(columns=['diseases'])
    y_test = test_df['diseases']

    param_grid = {
        'C': [0.01, 0.1, 1, 10, 100],           
        'solver': ['liblinear', 'lbfgs'],       
        'penalty': ['l2'],                       
        'max_iter': [500, 1000]
    }

    grid = GridSearchCV(LogisticRegression(random_state=42), param_grid, cv=5, n_jobs=-1)
    grid.fit(X_train, y_train)

    best_model = grid.best_estimator_
    y_pred = best_model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    
    print(f"Best Parameters: {grid.best_params_}")
    print(f"Model Accuracy: {accuracy:.2f}")

    import joblib
    joblib.dump(best_model, model_save_path)
    print(f"Model saved to {model_save_path}")

if __name__ == "__main__":
    train_logistic_regression("data/train.csv", "data/test.csv", "models/lr.pkl")