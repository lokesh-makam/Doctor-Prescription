import pandas as pd
import joblib
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

def train_random_forest(train_path, test_path,model_save_path):
    train_df = pd.read_csv(train_path)
    test_df = pd.read_csv(test_path)

    X_train = train_df.drop(columns=['diseases'])
    y_train = train_df['diseases']
    X_test = test_df.drop(columns=['diseases'])
    y_test = test_df['diseases']

    model = RandomForestClassifier(n_estimators=100, random_state=42)
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Model Accuracy: {accuracy:.2f}")
    
    joblib.dump(model, model_save_path)
    print(f"Model saved to {model_save_path}")


if __name__ == "__main__":
    train_random_forest("data/train.csv", "data/test.csv","models/randomforest.pkl")
