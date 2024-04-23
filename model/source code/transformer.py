import pandas as pd
from sklearn.base import BaseEstimator, TransformerMixin

class Encoder(BaseEstimator, TransformerMixin):
    def __init__(self, random_state):
        self.random_state = random_state
        
    def fit(self, X, y = None):
        self.encoding = { 
            'Sex' : dict(zip(['Female', 'Male'], [0, 1])),
            'GeneralHealth' : dict(zip(['Fair', 'Poor', 'Good', 'Very good', 'Excellent'], range(5))),
            'DifficultyConcentrating' : dict(zip(['No', 'Yes'], [0, 1])),
            'DifficultyWalking' : dict(zip(['No', 'Yes'], [0, 1])),
            'DifficultyDressingBathing' :  dict(zip(['No', 'Yes'], [0, 1])),
            'DifficultyErrands' : dict(zip(['No', 'Yes'], [0, 1])),
            'SmokerStatus' : dict(zip(['Never smoked',
                                 'Former smoker',
                                 'Current smoker - now smokes some days',
                                 'Current smoker - now smokes every day'], range(4))),
            'ECigaretteUsage' : dict(zip(['Never used e-cigarettes in my entire life',
                                    'Not at all (right now)',
                                    'Use them some days',
                                    'Use them every day'], range(4))),

            'AgeCategory' : dict(zip(['Age 18 to 24', 'Age 25 to 29', 'Age 30 to 34', 'Age 35 to 39',
                                'Age 40 to 44', 'Age 45 to 49', 'Age 50 to 54', 'Age 55 to 59',
                                'Age 60 to 64', 'Age 65 to 69', 'Age 70 to 74', 'Age 75 to 79',
                                'Age 80 or older'], range(14))),

            'HadAsthma' : dict(zip(['No', 'Yes'], [0, 1])),
            'HadSkinCancer' : dict(zip(['No', 'Yes'], [0, 1])),
            'HadCOPD' : dict(zip(['No', 'Yes'], [0, 1])),
            'HadDepressiveDisorder' : dict(zip(['No', 'Yes'], [0, 1])),
            'HadKidneyDisease' : dict(zip(['No', 'Yes'], [0, 1])),
            'HadArthritis' : dict(zip(['No', 'Yes'], [0, 1])),
            'HadDiabetes' : dict(zip(['No', 'No, pre-diabetes or borderline diabetes', 
                                'Yes, but only during pregnancy (female)', 'Yes'], range(4))),
            'DeafOrHardOfHearing' : dict(zip(['No', 'Yes'], [0, 1])),
            'BlindOrVisionDifficulty' : dict(zip(['No', 'Yes'], [0, 1])),
            'CovidPos' : dict(zip(['No',
                             'Tested positive using home test without a health professional',
                             'Yes'], range(3))),
                   }
        
        return self
    
    def transform(self, X):
        X_ = X.copy()
        for col in self.encoding.keys():
            X_[col] = X_[col].map(self.encoding[col])
        return X_
    
    def fit_transform(self, X, y=None):
        self.fit(X, y)
        return self.transform(X)