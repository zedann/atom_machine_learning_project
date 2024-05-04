console.log("Hello my team!");

document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".sidebar-body").style.display = "none";
});

document.querySelector(".open").addEventListener("click", function() {
  document.querySelector(".sidebar-body").style.display = "block";
});

const patientForm = document.getElementById("patient-form");
patientForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const patientData = new FormData(patientForm);

  const patientDataObj = {};

  patientData.forEach((value, key) => {
    patientDataObj[key] = value;
  });

  console.log(patientDataObj);
  // 127.0.0.1:3000


  // ai
  const predicted = await predict();
  patientDataObj['result'] = predicted;
  /*
  * if user logged/exist
  * add patientDataObj[user] = id;
  *
  * */

  if (localStorage.getItem('userId')) {
    patientDataObj['user'] = localStorage.getItem('user');
  }
  const resToBackEnd = fetch("http://127.0.0.1:3000/api/v1/examines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patientDataObj),
  });

  const dataFromBackend = await resToBackEnd.json();

  console.log(dataFromBackend);
});

async function predict() {
  const res = await fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patientDataObj),
  });

  const data = await res.json();

  console.log(data);

  return data;
}
