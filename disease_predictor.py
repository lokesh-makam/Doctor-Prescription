import pandas as pd
import numpy as np
from sklearn.ensemble import RandomForestClassifier
from sklearn.preprocessing import LabelEncoder

class DiseasePredictor:
    def __init__(self, csv_path):
        self.df = pd.read_csv(csv_path)
        self.symptoms = list(self.df.columns[1:])  # Skip the Disease column
        self.le = LabelEncoder()
        self.le.fit(self.df['Disease'])
        
        # Prepare training data
        X = self.df[self.symptoms].values
        y = self.le.transform(self.df['Disease'])
        
        # Train the model
        self.model = RandomForestClassifier(n_estimators=100, random_state=42)
        self.model.fit(X, y)

    def predict(self, symptoms):
        # Create symptom vector
        symptom_vector = np.zeros(len(self.symptoms))
        for symptom in symptoms:
            if symptom in self.symptoms:
                symptom_vector[self.symptoms.index(symptom)] = 1
        
        # Get prediction and probability
        prediction = self.model.predict([symptom_vector])[0]
        probabilities = self.model.predict_proba([symptom_vector])[0]
        confidence = probabilities[prediction] * 100
        
        # Get top 3 predictions
        top_3_indices = np.argsort(probabilities)[-3:][::-1]
        top_3_diseases = [
            {
                'disease': self.le.inverse_transform([idx])[0],
                'confidence': probabilities[idx] * 100,
                'matching_symptoms': self._get_matching_symptoms(symptoms, idx)
            }
            for idx in top_3_indices
        ]
        
        return {
            'top_prediction': {
                'disease': self.le.inverse_transform([prediction])[0],
                'confidence': confidence,
                'matching_symptoms': self._get_matching_symptoms(symptoms, prediction)
            },
            'top_3_predictions': top_3_diseases
        }
    
    def _get_matching_symptoms(self, user_symptoms, disease_idx):
        disease_symptoms = self.df.iloc[disease_idx][self.symptoms]
        matching = []
        for symptom in user_symptoms:
            if symptom in self.symptoms and disease_symptoms[self.symptoms.index(symptom)] == 1:
                matching.append(symptom)
        return matching