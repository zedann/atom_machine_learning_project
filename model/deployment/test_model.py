import joblib
import pandas as pd
import warnings
from customer_transformer import OrdinalEncoder, NRootTransformer
warnings.simplefilter("ignore")

# Loading our pipeline
try:
    with open('LGBMRandUS_acc87.pkl', 'rb') as f:
        pipeline = joblib.load(f)

except Exception as err:
    print(f"Unexpected {err=}, {type(err)=}")

new_data = pd.DataFrame(pd.DataFrame({
                    "Sex":"Male",
                    "AgeCategory":"25-29", 
                    "BMI":21.62, 
                    "GenHealth":"Excellent",
                    "PhysicalActivity":"No",
                    "PhysicalHealth":1.0,
                    "MentalHealth":6.0,
                    "SleepTime":7.0,
                    "DiffWalking":"No",
                    "Smoking":"Never smoked",
                    "AlcoholDrinking":"Yes",
                    "KidneyDisease":"No",
                    "Asthma":"No",
                    "SkinCancer":"No",
                    "Stroke":"No",
                    "Diabetic":"No"}, index= [0]))

# Transform the new data using the preprocessor
new_data_transformed = pipeline.named_steps['preprocessor'].transform(new_data)

# Use the trained classifier to make predictions 0 or 1
predictions = pipeline.named_steps['classifier'].predict(new_data_transformed)
print(f"Predicted Do you Have a heart disease?: {predictions}")

# Use the trained classifier to make predictions probability of 0, probability of 0
predictions_proba = pipeline.named_steps['classifier'].predict_proba(new_data_transformed)
# Print the predicted probability of not having heart disease, having
print(f"Predicted heart disease of having heart disease?: {predictions_proba[0, 1]*100}")