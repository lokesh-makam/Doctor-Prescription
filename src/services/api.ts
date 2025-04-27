import { Diagnosis, Language } from "../types";
import {
  translateSymptomToEnglish,
  translateSymptomFromEnglish,
} from "../utils/translations";
import { translateDiseaseToLanguage } from "../utils/diseaseTranslations";

const API_URL = "http://127.0.0.1:5000";

export async function predictDisease(
  symptoms: string[],
  language: Language
): Promise<Diagnosis> {
  try {
    // Translate symptoms to English before sending to API
    const englishSymptoms = symptoms.map((symptom) =>
      translateSymptomToEnglish(symptom, language)
    );

    // Convert symptoms array to object with 1 values
    const symptomData = englishSymptoms.reduce((acc, symptom) => {
      acc[symptom] = 1;
      return acc;
    }, {} as Record<string, number>);

    // Make API call to Flask backend
    const response = await fetch(`${API_URL}/predict`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(symptomData),
    });

    if (!response.ok) {
      throw new Error("Failed to get prediction");
    }

    const data = await response.json();

    // Normalize the probabilities to ensure they sum to 100%
    const totalProbability = data.top_3_predictions.reduce(
      (acc: number, pred: any) => acc + pred.probability,
      0
    );
    data.top_3_predictions.forEach((pred: any) => {
      pred.probability = (pred.probability / totalProbability) * 100;
    });

    // Translate matching symptoms back to selected language
    const translatedSymptoms = symptoms.map((symptom) =>
      translateSymptomFromEnglish(symptom, language)
    );

    return {
      conditions: data.top_3_predictions.map((pred: any) => ({
        name: translateDiseaseToLanguage(pred.disease, language),
        probability: pred.probability, // Now it's in percentage
        description: translateDiseaseToLanguage(
          `Based on the symptoms provided, there's a ${pred.probability.toFixed(
            1
          )}% chance of ${pred.disease}.`,
          language
        ),
        matchingSymptoms: translatedSymptoms,
        recommendedActions: [
          translateDiseaseToLanguage(
            "Consult a healthcare professional for proper diagnosis",
            language
          ),
          translateDiseaseToLanguage("Monitor your symptoms", language),
          translateDiseaseToLanguage(
            "Keep track of any changes in symptoms",
            language
          ),
          translateDiseaseToLanguage("Follow medical advice", language),
        ],
      })),
    };
  } catch (error) {
    console.error("Prediction error:", error);
    throw error;
  }
}
