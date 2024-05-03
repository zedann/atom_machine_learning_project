import joblib
import pandas as pd
import warnings
from customer_transformer import OrdinalEncoder, NRootTransformer
warnings.simplefilter("ignore")

# Loading our pipeline
try:
    with open('LgRegRandUS_rc77acc74.pkl', 'rb') as f:
        pipeline = joblib.load(f)

except Exception as err:
    print(f"Unexpected {err=}, {type(err)=}")

new_data = pd.DataFrame({
    "Sex":{"72830":"Male","64726":"Female"},
    "AgeCategory":{"72830":"25-29","64726":"80 or older"}, 
    "BMI":{"72830":21.62,"64726":30.99}, 
    "GenHealth":{"72830":"Excellent","64726":"Fair"},
    "PhysicalActivity":{"72830":"No","64726":"Yes"},
    "PhysicalHealth":{"72830":1.0,"64726":0.0},
    "MentalHealth":{"72830":6.0,"64726":7.0},
    "SleepTime":{"72830":7.0,"64726":7.0},
    "DiffWalking":{"72830":"No","64726":"No"},
    "Smoking":{"72830":"Never smoked","64726":"Yes"},
    "AlcoholDrinking":{"72830":"Yes","64726":"No"},
    "KidneyDisease":{"72830":"No","64726":"No"},
    "Asthma":{"72830":"No","64726":"No"},
    "SkinCancer":{"72830":"No","64726":"No"},
    "Stroke":{"72830":"No","64726":"No"},
    "Diabetic":{"72830":"No","64726":"No"}

 })

# Transform the new data using the preprocessor
new_data_transformed = pipeline.named_steps['preprocessor'].transform(new_data)

# Use the trained classifier to make predictions 0 or 1
predictions = pipeline.named_steps['classifier'].predict(new_data_transformed)
print(f"Predicted Do you Have a heart disease?: {predictions}")

# Use the trained classifier to make predictions probability of 0, probability of 0
predictions_proba = pipeline.named_steps['classifier'].predict_proba(new_data_transformed)
# Print the predicted probability of not having heart disease, having
print(f"Predicted heart disease of having heart disease?: {predictions_proba[0:2, 1]}")