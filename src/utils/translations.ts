import { Language } from '../types';
import { englishSymptomCategories, hindiSymptomCategories, teluguSymptomCategories } from '../data/symptoms';

const translations = {
  english: {
    welcome: "Welcome to AI Health Assistant! Please select your preferred language.",
    help: "How can I help you today? Please describe your symptoms or select from the categories below.",
    matchingSymptoms: "I found these matching symptoms:",
    noMatchingSymptoms: "I couldn't find any matching symptoms. Please try different words or select from the categories below.",
    selectedSymptoms: "Selected Symptoms",
    continueButton: "Get Diagnosis",
    startNew: "Start New Check",
    addMore: "Add More Symptoms",
    diagnosisResult: "Based on your symptoms, here are the possible conditions:",
    consultDoctor: "Please note: This is an AI-assisted prediction and should not be considered as a final diagnosis. Always consult a qualified healthcare professional.",
    error: "Sorry, there was an error processing your request. Please try again.",
    categorySymptoms: "Symptoms in {category}:",
    exploreMore: "Would you like to explore more symptoms?",
    recommendedActions: "Recommended Actions"
  },
  hindi: {
    welcome: "एआई हेल्थ असिस्टेंट में आपका स्वागत है! कृपया अपनी पसंदीदा भाषा चुनें।",
    help: "मैं आज आपकी कैसे मदद कर सकता हूं? कृपया अपने लक्षणों का वर्णन करें या नीचे दी गई श्रेणियों में से चुनें।",
    matchingSymptoms: "मुझे ये मिलते-जुलते लक्षण मिले:",
    noMatchingSymptoms: "मुझे कोई मिलता-जुलता लक्षण नहीं मिला। कृपया अलग शब्द आज़माएं या नीचे दी गई श्रेणियों में से चुनें।",
    selectedSymptoms: "चयनित लक्षण",
    continueButton: "निदान प्राप्त करें",
    startNew: "नई जांच शुरू करें",
    addMore: "और लक्षण जोड़ें",
    diagnosisResult: "आपके लक्षणों के आधार पर, यहां संभावित स्थितियां हैं:",
    consultDoctor: "कृपया ध्यान दें: यह एक एआई-सहायता प्राप्त भविष्यवाणी है और इसे अंतिम निदान नहीं माना जाना चाहिए। हमेशा योग्य स्वास्थ्य पेशेवर से परामर्श करें।",
    error: "क्षमा करें, आपके अनुरोध को संसाधित करने में एक त्रुटि हुई। कृपया पुनः प्रयास करें।",
    categorySymptoms: "{category} में लक्षण:",
    exploreMore: "क्या आप और लक्षणों का पता लगाना चाहेंगे?",
    recommendedActions: "अनुशंसित कार्रवाई"
  },
  telugu: {
    welcome: "AI హెల్త్ అసిస్టెంట్‌కు స్వాగతం! దయచేసి మీ ప్రాధాన్య భాషను ఎంచుకోండి.",
    help: "నేను ఈరోజు మీకు ఎలా సహాయం చేయగలను? దయచేసి మీ లక్షణాలను వివరించండి లేదా క్రింద ఉన్న వర్గాల నుండి ఎంచుకోండి.",
    matchingSymptoms: "నేను ఈ సరిపోలే లక్షణాలను కనుగొన్నాను:",
    noMatchingSymptoms: "నేను ఏ సరిపోలే లక్షణాలను కనుగొనలేకపోయాను. దయచేసి వేరే పదాలను ప్రయత్నించండి లేదా క్రింద ఉన్న వర్గాల నుండి ఎంచుకోండి.",
    selectedSymptoms: "ఎంచుకున్న లక్షణాలు",
    continueButton: "రోగనిర్ధారణ పొందండి",
    startNew: "కొత్త తనిఖీ ప్రారంభించండి",
    addMore: "మరిన్ని లక్షణాలు జోడించండి",
    diagnosisResult: "మీ లక్షణాల ఆధారంగా, ఇక్కడ సంభావ్య పరిస్థితులు ఉన్నాయి:",
    consultDoctor: "దయచేసి గమనించండి: ఇది AI-సహాయక అంచనా మరియు దీనిని తుది రోగనిర్ధారణగా పరిగణించకూడదు. ఎల్లప్పుడూ అర్హత కలిగిన ఆరోగ్య నిపుణులను సంప్రదించండి.",
    error: "క్షమించండి, మీ అభ్యర్థనను ప్రాసెస్ చేయడంలో లోపం ఉంది. దయచేసి మళ్లీ ప్రయత్నించండి.",
    categorySymptoms: "{category}లో లక్షణాలు:",
    exploreMore: "మరిన్ని లక్షణాలను అన్వేషించాలనుకుంటున్నారా?",
    recommendedActions: "సిఫార్సు చేయబడిన చర్యలు"
  }
};

export function getTranslation(key: string, language: Language): string {
  return translations[language]?.[key] || translations.english[key];
}

export function translateSymptomToEnglish(symptom: string, language: Language): string {
  const categories = language === 'hindi' ? hindiSymptomCategories : 
                    language === 'telugu' ? teluguSymptomCategories :
                    englishSymptomCategories;

  for (const category of categories) {
    const englishCategory = englishSymptomCategories.find(c => c.id === category.id);
    if (!englishCategory) continue;

    const index = category.symptoms.indexOf(symptom);
    if (index !== -1) {
      return englishCategory.symptoms[index];
    }
  }
  return symptom;
}

export function translateSymptomFromEnglish(symptom: string, language: Language): string {
  const categories = language === 'hindi' ? hindiSymptomCategories : 
                    language === 'telugu' ? teluguSymptomCategories :
                    englishSymptomCategories;

  for (const category of englishSymptomCategories) {
    const targetCategory = categories.find(c => c.id === category.id);
    if (!targetCategory) continue;

    const index = category.symptoms.indexOf(symptom);
    if (index !== -1) {
      return targetCategory.symptoms[index];
    }
  }
  return symptom;
}