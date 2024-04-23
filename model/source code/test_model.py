import joblib
import pandas as pd
import warnings
from transformer import Encoder
warnings.simplefilter("ignore")

# Loading our pipeline
try:
    with open('logistic_regression.pkl', 'rb') as f:
        pipeline = joblib.load(f)

except Exception as err:
    print(f"Unexpected {err=}, {type(err)=}")

new_data = pd.DataFrame({
    'Sex': {86014: 'Female', 93553: 'Male'},
    'GeneralHealth': {86014: 'Fair', 93553: 'Very good'},
    'PhysicalHealthDays': {86014: 2.0, 93553: 0.0},
    'MentalHealthDays': {86014: 4.0, 93553: 0.0},
    'DifficultyConcentrating': {86014: 'No', 93553: 'No'},
    'DifficultyWalking': {86014: 'Yes', 93553: 'No'},
    'DifficultyDressingBathing': {86014: 'No', 93553: 'No'},
    'DifficultyErrands': {86014: 'No', 93553: 'No'},
    'SmokerStatus': {86014: 'Never smoked', 93553: 'Never smoked'},
    'ECigaretteUsage': {86014: 'Never used e-cigarettes in my entire life',
                        93553: 'Never used e-cigarettes in my entire life'},
    'AgeCategory': {86014: 'Age 80 or older', 93553: 'Age 80 or older'},
    'HeightInMeters': {86014: 1.52, 93553: 1.75},
    'WeightInKilograms': {86014: 63.5, 93553: 65.77},
    'BMI': {86014: 27.34, 93553: 21.41},
    'HadAsthma': {86014: 'No', 93553: 'No'},
    'HadSkinCancer': {86014: 'No', 93553: 'No'},
    'HadCOPD': {86014: 'No', 93553: 'No'},
    'HadDepressiveDisorder': {86014: 'Yes', 93553: 'No'},
    'HadKidneyDisease': {86014: 'No', 93553: 'No'},
    'HadArthritis': {86014: 'Yes', 93553: 'No'},
    'HadDiabetes': {86014: 'No', 93553: 'No'},
    'DeafOrHardOfHearing': {86014: 'Yes', 93553: 'Yes'},
    'BlindOrVisionDifficulty': {86014: 'No', 93553: 'No'},
    'CovidPos': {86014: 'No', 93553: 'No'}
 })

# Transform the new data using the preprocessor
new_data_transformed = pipeline.named_steps['preprocess'].transform(new_data)

# Use the trained classifier to make predictions 0 or 1
predictions = pipeline.named_steps['classifier'].predict(new_data_transformed)
print(f"Predicted Do you Have a heart disease?: {predictions}")

# Use the trained classifier to make predictions probability of 0, probability of 0
predictions_proba = pipeline.named_steps['classifier'].predict_proba(new_data_transformed)
# Print the predicted probability of not having heart disease, having
print(f"Predicted heart disease of having heart disease?: {predictions_proba[0:2, 1]}")