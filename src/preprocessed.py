import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.preprocessing import LabelEncoder
import joblib

def filter_diseases(input_file, output_file, threshold=20):
    df = pd.read_csv(input_file)
    label_encoder = LabelEncoder()
    df['diseases'] = label_encoder.fit_transform(df['diseases'])
    
    disease_counts = df['diseases'].value_counts()
    valid_diseases = disease_counts[disease_counts >= threshold].index
    df_filtered = df[df['diseases'].isin(valid_diseases)]
    df_filtered.to_csv(output_file, index=False)

    joblib.dump(label_encoder, 'models/label_encoder.pkl')
    print(f"Filtered dataset saved as '{output_file}' with diseases having at least {threshold} samples.")

def split():
    df = pd.read_csv('data/preprocessed.csv')
    train_df, test_df = train_test_split(df, test_size=0.2, random_state=42)
    train_df.to_csv('data/train.csv', index=False)
    test_df.to_csv('data/test.csv', index=False)
    print("Data is split into training and testing parts.")


if __name__ == "__main__":
    filter_diseases("data/balanced_disease_dataset.csv", "data/preprocessed.csv", threshold=5)
    split()
