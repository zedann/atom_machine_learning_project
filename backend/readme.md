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

<hr>

# history of patient

## Get all examines for user

### GET 127.0.0.1:3000/api/v1/users/:userId/examines

required: Authorization header -> bearer token get from cookie/login

## Create Examine

### POST 127.0.0.1:3000/api/v1/examines

example:

```json
{
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
  "Diabetic":"No"
  "user": "662b9a910e37e94a30bbc664",
  "result": 50
}
```
