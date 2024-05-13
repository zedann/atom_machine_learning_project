const getHistory = async () => {
  if (!localStorage.getItem("userId")) return;

  const userId = localStorage.getItem("userId");

  const resFromBackEnd = await fetch(
    `http://127.0.0.1:3000/api/v1/users/${userId}/examines`,
    {
      method: "GET",
      credentials: "include", // Send cookies
    }
  );

  const examines = await resFromBackEnd.json();

  const allExamines = examines["data"]["data"];
  console.log(allExamines);
};

// Function to populate the card with user data
function populateCard(userData) {
  document.getElementById("sex").textContent = userData["Sex"];
  document.getElementById("ageCategory").textContent = userData["AgeCategory"];
  document.getElementById("bmi").textContent = userData["BMI"];
  document.getElementById("genHealth").textContent = userData["GenHealth"];
  document.getElementById("physicalActivity").textContent =
    userData["PhysicalActivity"];
  document.getElementById("physicalHealth").textContent =
    userData["PhysicalHealth"];
  document.getElementById("mentalHealth").textContent =
    userData["MentalHealth"];
  document.getElementById("sleepTime").textContent = userData["SleepTime"];
  document.getElementById("diffWalking").textContent = userData["DiffWalking"];
  document.getElementById("smoking").textContent = userData["Smoking"];
  document.getElementById("alcoholDrinking").textContent =
    userData["AlcoholDrinking"];
  document.getElementById("kidneyDisease").textContent =
    userData["KidneyDisease"];
  document.getElementById("asthma").textContent = userData["Asthma"];
  document.getElementById("skinCancer").textContent = userData["SkinCancer"];
  document.getElementById("stroke").textContent = userData["Stroke"];
  document.getElementById("diabetic").textContent = userData["Diabetic"];
}

getHistory();
