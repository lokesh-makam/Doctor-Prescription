
import joblib
import pandas as pd
from sklearn.ensemble import VotingClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import cross_val_score, train_test_split

logistic_regression = joblib.load("models/lr.pkl")
random_forest = joblib.load("models/randomforest.pkl")
svm = joblib.load("models/svm.pkl")

test_data = pd.read_csv("data/test.csv")
X = test_data.drop(columns=['diseases'])
y = test_data['diseases']
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, stratify=y, random_state=42)

voting_clf = VotingClassifier(
    estimators=[('lr', logistic_regression), ('rf', random_forest), ('svm', svm)],
    voting='soft'
)

voting_clf.fit(X_train, y_train)
preds = voting_clf.predict(X_test)

print("Accuracy:", accuracy_score(y_test, preds))
print("Classification Report:\n", classification_report(y_test, preds))

