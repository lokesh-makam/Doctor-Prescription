import { Language } from '../types';

interface SymptomCategory {
  id: string;
  name: string;
  emoji: string;
  symptoms: string[];
}

export const englishSymptomCategories: SymptomCategory[] = [
  {
    id: 'neurological',
    name: 'Neurological',
    emoji: '🧠',
    symptoms: [
      'dizziness', 'loss_of_balance', 'slurred_speech', 'spinning_movements',
      'unsteadiness', 'altered_sensorium', 'irritability', 'lack_of_concentration',
      'depression', 'coma'
    ]
  },
  {
    id: 'respiratory',
    name: 'Respiratory',
    emoji: '💨',
    symptoms: [
      'cough', 'breathlessness', 'chest_pain', 'phlegm', 'mucoid_sputum',
      'rusty_sputum', 'throat_irritation', 'runny_nose', 'congestion',
      'sinus_pressure'
    ]
  },
  {
    id: 'digestive',
    name: 'Digestive & Gastrointestinal',
    emoji: '🩸',
    symptoms: [
      'stomach_pain', 'vomiting', 'nausea', 'indigestion', 'constipation',
      'diarrhea', 'ulcers_on_tongue', 'bloody_stool',
      'pain_during_bowel_movements', 'belly_pain', 'distention_of_abdomen'
    ]
  },
  {
    id: 'metabolic',
    name: 'Metabolic & Hormonal',
    emoji: '🧬',
    symptoms: [
      'increased_appetite', 'polyuria', 'abnormal_menstruation', 'weight_gain',
      'weight_loss', 'anxiety', 'excessive_hunger', 'mood_swings',
      'irregular_sugar_level'
    ]
  },
  {
    id: 'musculoskeletal',
    name: 'Musculoskeletal',
    emoji: '🦴',
    symptoms: [
      'joint_pain', 'back_pain', 'neck_pain', 'swelling_joints', 'muscle_pain',
      'movement_stiffness', 'muscle_weakness', 'hip_joint_pain', 'knee_pain'
    ]
  },
  {
    id: 'eye',
    name: 'Eye-Related',
    emoji: '👁️',
    symptoms: [
      'blurred_and_distorted_vision', 'redness_of_eyes', 'watering_from_eyes',
      'pain_behind_the_eyes', 'visual_disturbances', 'yellowing_of_eyes'
    ]
  },
  {
    id: 'skin',
    name: 'Skin & Nails',
    emoji: '🧍',
    symptoms: [
      'skin_rash', 'itching', 'nodal_skin_eruptions', 'skin_peeling',
      'silver_like_dusting', 'blister', 'red_sore_around_nose',
      'yellow_crust_ooze', 'inflammatory_nails', 'small_dents_in_nails'
    ]
  },
  {
    id: 'urinary',
    name: 'Urinary',
    emoji: '🧫',
    symptoms: [
      'burning_micturition', 'spotting_urination', 'foul_smell_of_urine',
      'continuous_feel_of_urine', 'bladder_discomfort'
    ]
  },
  {
    id: 'cardiovascular',
    name: 'Cardiovascular',
    emoji: '💓',
    symptoms: [
      'fast_heart_rate', 'palpitations', 'chest_pain', 'swollen_legs',
      'prominent_veins_on_calf'
    ]
  },
  {
    id: 'mental',
    name: 'Mental Health',
    emoji: '🧠',
    symptoms: [
      'depression', 'irritability', 'lack_of_concentration', 'confusion'
    ]
  },
  {
    id: 'infections',
    name: 'Infections & Flu-like',
    emoji: '🧪',
    symptoms: [
      'high_fever', 'chills', 'shivering', 'sweating', 'malaise',
      'toxic_look', 'continuous_sneezing', 'headache', 'patches_in_throat'
    ]
  },
  {
    id: 'others',
    name: 'Others',
    emoji: '❗',
    symptoms: [
      'fatigue', 'dehydration', 'muscle_wasting', 'family_history',
      'extra_marital_contacts', 'receiving_blood_transfusion',
      'history_of_alcohol_consumption', 'scurring', 'blackheads'
    ]
  }
];

// Hindi Symptom Categories
export const hindiSymptomCategories: SymptomCategory[] = [
  {
    id: 'neurological',
    name: 'न्यूरोलॉजिकल',
    emoji: '🧠',
    symptoms: [
      'चक्कर आना', 'संतुलन खोना', 'बोलने में असंगति', 'घूमने की अनुभूति',
      'अस्थिरता', 'परिवर्तित चेतना', 'चिड़चिड़ापन', 'ध्यान की कमी',
      'अवसाद', 'कोमा'
    ]
  },
  {
    id: 'respiratory',
    name: 'श्वसन',
    emoji: '💨',
    symptoms: [
      'खांसी', 'सांस लेने में तकलीफ', 'छाती में दर्द', 'बलगम', 'म्यूकस बलगम',
      'जंग जैसा बलगम', 'गले में जलन', 'नाक बहना', 'नाक बंद', 'साइनस दबाव'
    ]
  },
  {
    id: 'digestive',
    name: 'पाचन और जठरांत्र',
    emoji: '🩸',
    symptoms: [
      'पेट दर्द', 'उल्टी', 'मतली', 'अपच', 'कब्ज',
      'दस्त', 'जीभ पर छाले', 'मल में खून',
      'मल त्याग के दौरान दर्द', 'पेट में दर्द', 'पेट फूलना'
    ]
  },
  {
    id: 'metabolic',
    name: 'मेटाबोलिक और हार्मोनल',
    emoji: '🧬',
    symptoms: [
      'अत्यधिक भूख', 'बार-बार पेशाब', 'असामान्य मासिक धर्म', 'वजन बढ़ना',
      'वजन घटना', 'चिंता', 'अत्यधिक भूख', 'मूड स्विंग्स',
      'अनियमित शर्करा स्तर'
    ]
  },
  {
    id: 'musculoskeletal',
    name: 'मस्कुलोस्केलेटल',
    emoji: '🦴',
    symptoms: [
      'जोड़ों में दर्द', 'पीठ दर्द', 'गर्दन में दर्द', 'जोड़ों में सूजन', 'मांसपेशियों में दर्द',
      'चलने में अकड़न', 'मांसपेशियों में कमजोरी', 'कूल्हे के जोड़ में दर्द', 'घुटने में दर्द'
    ]
  },
  {
    id: 'eye',
    name: 'आंख से संबंधित',
    emoji: '👁️',
    symptoms: [
      'धुंधली और विकृत दृष्टि', 'आंख का लाल होना', 'आंख से आंसू आना',
      'आंख के पीछे दर्द', 'दृश्य गड़बड़ी', 'आंखों का पीलापन'
    ]
  },
  {
    id: 'skin',
    name: 'त्वचा और नाखून',
    emoji: '🧍',
    symptoms: [
      'त्वचा ददोरा', 'खुजली', 'त्वचा पर गठानदार चकत्ते', 'त्वचा का छिलना',
      'चांदी जैसी धूल', 'छाला', 'नाक के आसपास लाल घाव',
      'पीला क्रस्ट रिसाव', 'नाखूनों में सूजन', 'नाखूनों में छोटे गड्ढे'
    ]
  },
  {
    id: 'urinary',
    name: 'मूत्र',
    emoji: '🧫',
    symptoms: [
      'पेशाब में जलन', 'पेशाब में धब्बे', 'मूत्र की दुर्गंध',
      'लगातार पेशाब की इच्छा', 'मूत्राशय असुविधा'
    ]
  },
  {
    id: 'cardiovascular',
    name: 'हृदय संबंधी',
    emoji: '💓',
    symptoms: [
      'तेज हृदय गति', 'धड़कन', 'छाती में दर्द', 'पैरों में सूजन',
      'पिंडलियों पर प्रमुख नसें'
    ]
  },
  {
    id: 'mental',
    name: 'मानसिक स्वास्थ्य',
    emoji: '🧠',
    symptoms: [
      'अवसाद', 'चिड़चिड़ापन', 'ध्यान की कमी', 'भ्रम'
    ]
  },
  {
    id: 'infections',
    name: 'संक्रमण और फ्लू जैसे',
    emoji: '🧪',
    symptoms: [
      'तेज बुखार', 'ठंड लगना', 'कांपना', 'पसीना', 'अस्वस्थता',
      'विषाक्त दिखना', 'लगातार छींकना', 'सिरदर्द', 'गले में धब्बे'
    ]
  },
  {
    id: 'others',
    name: 'अन्य',
    emoji: '❗',
    symptoms: [
      'थकान', 'निर्जलीकरण', 'मांसपेशी क्षय', 'पारिवारिक इतिहास',
      'विवाहेतर संबंध', 'रक्त आधान प्राप्त करना',
      'शराब के सेवन का इतिहास', 'खुजलाहट', 'ब्लैकहेड्स'
    ]
  }
];

// Telugu Symptom Categories
export const teluguSymptomCategories: SymptomCategory[] = [
  {
    id: 'neurological',
    name: 'న్యూరోలాజికల్',
    emoji: '🧠',
    symptoms: [
      'తలతిరిగడం', 'సంతులనం కోల్పోవడం', 'మాటలు గజిబిజి అవ్వడం', 'తిరిగే అనుభూతి',
      'అస్థిరత', 'మారిన స్పృహ', 'చిరాకు', 'ఏకాగ్రత లోపం',
      'డిప్రెషన్', 'కోమా'
    ]
  },
  {
    id: 'respiratory',
    name: 'శ్వాసకోశ',
    emoji: '💨',
    symptoms: [
      'దగ్గు', 'ఊపిరి తీసుకోవడంలో కష్టం', 'ఛాతీలో నొప్పి', 'కఫం', 'మ్యూకస్ కఫం',
      'రస్టీ కఫం', 'గొంతు బరువుగా ఉండటం', 'ముక్కు కారడం', 'ముక్కు అడ్డంకి',
      'సైనస్ ఒత్తిడి'
    ]
  },
  {
    id: 'digestive',
    name: 'జీర్ణ మరియు జఠరాంత్ర',
    emoji: '🩸',
    symptoms: [
      'పొట్టలో నొప్పి', 'వాంతులు', 'వికారం', 'అజీర్తి', 'మలబద్ధకం',
      'అతిసారం', 'నాలుక గాయాలు', 'మలంలో రక్తం',
      'మలవిసర్జన సమయంలో నొప్పి', 'పొట్టలో నొప్పి', 'ఉదరం ఉబ్బరం'
    ]
  },
  {
    id: 'metabolic',
    name: 'మెటబాలిక్ మరియు హార్మోనల్',
    emoji: '🧬',
    symptoms: [
      'అధిక ఆకలి', 'తరచుగా మూత్రవిసర్జన', 'అసాధారణ రజస్వల', 'బరువు పెరగడం',
      'బరువు తగ్గడం', 'ఆందోళన', 'అత్యధిక ఆకలి', 'మానసిక హెచ్చుతగ్గులు',
      'అనియమిత చక్కెర స్థాయి'
    ]
  },
  {
    id: 'musculoskeletal',
    name: 'మస్కులోస్కెలెటల్',
    emoji: '🦴',
    symptoms: [
      'కీళ్ళ నొప్పి', 'వెనుక నొప్పి', 'మెడ నొప్పి', 'కీళ్ళ వాపు', 'కండరాల నొప్పి',
      'కదలికలో గట్టిదనం', 'కండరాల బలహీనత', 'తుంటి జాయింట్ నొప్పి', 'మోకాలి నొప్పి'
    ]
  },
  {
    id: 'eye',
    name: 'కళ్ళ సంబంధిత',
    emoji: '👁️',
    symptoms: [
      'అస్పష్టమైన మరియు వక్రీకృత దృష్టి', 'కళ్ళు ఎరుపు', 'కళ్ళ నుండి నీరు కారడం',
      'కళ్ళ వెనుక నొప్పి', 'దృష్టి భంగం', 'కళ్ళ పసుపు'
    ]
  },
  {
    id: 'skin',
    name: 'చర్మం మరియు గోళ్ళు',
    emoji: '🧍',
    symptoms: [
      'చర్మం దద్దుర్లు', 'చర్మం దురద', 'చర్మంపై గడ్డలు', 'చర్మం పొలుసులు',
      'సిల్వర్ లాంటి డస్టింగ్', 'బొబ్బ', 'ముక్కు చుట్టూ ఎరుపు గాయం',
      'పసుపు క్రస్ట్ ఊజ్', 'గోళ్ళలో వాపు', 'గోళ్ళలో చిన్న గుండ్లు'
    ]
  },
  {
    id: 'urinary',
    name: 'మూత్ర',
    emoji: '🧫',
    symptoms: [
      'మూత్రవిసర్జనలో మంట', 'మూత్రంలో ధబ్బలు', 'మూత్రం దుర్వాసన',
      'నిరంతరం మూత్రవిసర్జన అనిపించడం', 'మూత్రాశయ అసౌకర్యం'
    ]
  },
  {
    id: 'cardiovascular',
    name: 'కార్డియోవాస్కులర్',
    emoji: '💓',
    symptoms: [
      'వేగవంతమైన గుండె రేటు', 'గుండె కొట్టుకోవడం', 'ఛాతీలో నొప్పి', 'కాళ్ళ వాపు',
      'పిల్లికాలిపై ప్రముఖ సిరలు'
    ]
  },
  {
    id: 'mental',
    name: 'మానసిక ఆరోగ్యం',
    emoji: '🧠',
    symptoms: [
      'డిప్రెషన్', 'చిరాకు', 'ఏకాగ్రత లోపం', 'గందరగోళం'
    ]
  },
  {
    id: 'infections',
    name: 'ఇన్ఫెక్షన్లు & ఫ్లూ లాంటి',
    emoji: '🧪',
    symptoms: [
      'జ్వరం', 'చలి అనుభూతి', 'వణుకు', 'మరమ్మత్తు', 'అనారోగ్యంగా అనిపించడం',
      'విషపూరిత రూపం', 'నిరంతర తుమ్ము', 'తలనొప్పి', 'గొంతులో గడ్డలు'
    ]
  },
  {
    id: 'others',
    name: 'ఇతర',
    emoji: '❗',
    symptoms: [
      'అలసట', 'నీరసం', 'కండరాల క్షీణత', 'కుటుంబ చరిత్ర',
      'వివాహేతర సంబంధాలు', 'రక్త మార్పిడి స్వీకరించడం',
      'మద్యపాన చరిత్ర', 'స్కరింగ్', 'బ్లాక్‌హెడ్స్'
    ]
  }
];

export function getSymptomCategories(language: Language): SymptomCategory[] {
  switch (language) {
    case 'hindi':
      return hindiSymptomCategories;
    case 'telugu':
      return teluguSymptomCategories;
    default:
      return englishSymptomCategories;
  }
}

export function getAllSymptoms(language: Language): string[] {
  return getSymptomCategories(language).flatMap(category => category.symptoms);
}