# Backend for machine learning project

# AUTH

## sign up

### POST 127.0.0.1:3000/api/v1/users/signup

example:

```json
{
  "name": "zedan",
  "email": "zedan1234@gmail.com",
  "password": "z1234@z1234",
  "passwordConfirm": "z1234@z1234",
  "phone": "01012646762"
}
```

## login

### POST 127.0.0.1:3000/api/v1/users/login

example:

```json
{
  "email": "zedan1234@gmail.com",
  "password": "z1234@z1234"
}
```

## logout

### GET 127.0.0.1:3000/api/v1/users/logout

## forgotPassword

### POST 127.0.0.1:3000/api/v1/users/forgotPassword

example:

```json
{
  "email": "zedan1234@gmail.com"
}
```

## resetPassword (NOT USED ALONE ITS PART OF forgotPassword)

### PATCH 127.0.0.1:3000/api/v1/users/resetPassword/:token

example:

```json
{
  "password": "z1234@z1234",
  "passwordConfirm": "z1234@z1234"
}
```

# history of patient

## Get all examines for user

### GET 127.0.0.1:3000/api/v1/users/:userId/examines

required: Authorization header -> bearer token get from cookie/login

## Create Examine

### POST 127.0.0.1:3000/api/v1/examines

example:

```json
{
  "Sex": "Female",
  "GeneralHealth": "Fair",
  "PhysicalHealthDays": 2.0,
  "MentalHealthDays": 4.0,
  "DifficultyConcentrating": "No",
  "DifficultyWalking": "Yes",
  "DifficultyDressingBathing": "No",
  "DifficultyErrands": "No",
  "SmokerStatus": "Never smoked",
  "ECigaretteUsage": "Never used e-cigarettes in my entire life",
  "AgeCategory": "Age 80 or older",
  "HeightInMeters": 1.52,
  "WeightInKilograms": 63.5,
  "BMI": 27.34,
  "HadAsthma": "No",
  "HadSkinCancer": "No",
  "HadCOPD": "No",
  "HadDepressiveDisorder": "Yes",
  "HadKidneyDisease": "No",
  "HadArthritis": "Yes",
  "HadDiabetes": "No",
  "DeafOrHardOfHearing": "Yes",
  "BlindOrVisionDifficulty": "No",
  "CovidPos": "No",
  "user": "662b9a910e37e94a30bbc664",
  "result": 2134125
}
```
