# Doctor's Prescription Assistant

An AI-powered application that predicts possible medical conditions based on symptoms described in natural language.

## Features

- Natural language symptom input
- Synonym handling
- Semantic similarity matching
- Machine learning-based disease prediction
- Top 3 most probable conditions
- Confidence scores and matching symptoms
- User-friendly Streamlit interface

## Installation

1. Clone this repository:
```bash
git clone https://github.com/lokesh-makam/Doctor-Prescription.git
```

2. Navigate to project directory:
```bash
cd Doctor-Prescription
```

3. Install required packages:
```bash
pip install -r requirements.txt
```

## Dataset Setup

1. Download the dataset from:
[Dataset Download Link](https://www.kaggle.com/datasets/b210499makamlokesh/symptoms-to-disease)

2. Create a data directory and place the dataset

## Training the Model

Train the machine learning model before first use:

This will:
- Preprocess the data
- Train and save the model to `models/voting_ensemble.pkl`
- Generate necessary vectorizers and metadata

## Usage

Launch the application:
```bash
streamlit run app.py
```

Then:
1. Open the provided URL (usually http://localhost:5137)
2. Enter symptoms in natural language
3. Click "Analyze Symptoms" for predictions

## Project Structure

```
doctor-prescription-assistant/
├── data/
│   └── balanced_disease_dataset.csv       # Symptom-disease dataset
├── models/
│   ├── voting_ensemble.pkl         # Trained model
├── app.py                       # Streamlit application
├── requirements.txt             # Dependencies
└── README.md                    # This file
```

## Demo Video

Watch the demo video explaining the project here:  
🎥 [Watch on YouTube](https://youtu.be/KyiCHv-rDUU?si=qfBgqtxGaVaw0wN9)
## Notes

- First-time setup requires model training (may take 5-10 minutes)
- Requires Python 3.8 or higher
- Minimum 4GB RAM recommended for training
```