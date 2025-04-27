import joblib
import pandas as pd
import numpy as np
from sklearn.ensemble import VotingClassifier
from sklearn.metrics import accuracy_score, classification_report
from sklearn.model_selection import cross_val_score, train_test_split

naive_bayes = joblib.load("models/naivebayes.pkl")
logistic_regression = joblib.load("models/lr.pkl")
knn = joblib.load("models/knn.pkl")
decision_tree = joblib.load("models/decisiontree.pkl")

test_data = pd.read_csv("data/test.csv")
X = test_data.drop(columns=['diseases'])
y = test_data['diseases']

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

voting_clf = VotingClassifier(
    estimators=[('naive_bayes', naive_bayes),
                ('logistic_regression', logistic_regression),
                ('knn', knn),
                ('decision_tree', decision_tree)],
    voting='soft'
)

voting_clf.fit(X_train, y_train)
final_predictions = voting_clf.predict(X_test)

accuracy = accuracy_score(y_test, final_predictions)
print(f"Voting Ensemble Model Accuracy: {accuracy:.2f}")
print("\nClassification Report:\n", classification_report(y_test, final_predictions))

scores = cross_val_score(voting_clf, X, y, cv=5)
print(f"Cross-validated accuracy scores: {scores}")
print(f"Mean CV accuracy: {scores.mean():.2f}")

joblib.dump(voting_clf, 'models/voting_ensemble.pkl')
print("Voting Ensemble Model saved as 'models/voting_ensemble.pkl'")
