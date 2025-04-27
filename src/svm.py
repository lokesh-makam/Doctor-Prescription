import joblib
import pandas as pd
from sklearn.svm import SVC
from sklearn.metrics import accuracy_score

def train_svm(train_path, test_path,model_save_path):
    train_df = pd.read_csv(train_path)
    test_df = pd.read_csv(test_path)

    X_train = train_df.drop(columns=['diseases'])
    y_train = train_df['diseases']
    X_test = test_df.drop(columns=['diseases'])
    y_test = test_df['diseases']

    model = SVC(random_state=42,probability=True)
    model.fit(X_train, y_train)

    y_pred = model.predict(X_test)
    accuracy = accuracy_score(y_test, y_pred)
    print(f"Model Accuracy: {accuracy:.2f}")
    joblib.dump(model, model_save_path)
    print(f"Model saved to {model_save_path}")    

if __name__ == "__main__":
    train_svm("data/train.csv", "data/test.csv","models/svm.pkl")
