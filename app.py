from flask import Flask, request, jsonify
from flask_cors import CORS
import joblib
import pandas as pd

app = Flask(__name__)
CORS(app)

model = joblib.load('models/voting_ensemble.pkl')
label_encoder = joblib.load('models/label_encoder.pkl')

symptom_columns = model.feature_names_in_.tolist()

@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()

        input_data = [0] * len(symptom_columns)
        for symptom, value in data.items():
            if symptom in symptom_columns:
                idx = symptom_columns.index(symptom)
                input_data[idx] = value

        input_df = pd.DataFrame([input_data], columns=symptom_columns)

        probabilities = model.predict_proba(input_df)[0]

        top3_indices = probabilities.argsort()[-3:][::-1]
        
        top3_predictions = [
            {
                "disease": label_encoder.inverse_transform([idx])[0],
                "probability": round(float(probabilities[idx]), 4)
            }
            for idx in top3_indices
        ]

        return jsonify({"top_3_predictions": top3_predictions})

    except Exception as e:
        return jsonify({"error": str(e)}), 500

@app.route('/')
def home():
    return "Disease Prediction API is running!"

if __name__ == '__main__':
    app.run(debug=True)