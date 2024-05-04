console.log("Hello my team!");

document.querySelector(".close").addEventListener("click", function() {
  document.querySelector(".sidebar-body").style.display = "none";
});

document.querySelector(".open").addEventListener("click", function() {
  document.querySelector(".sidebar-body").style.display = "block";
});

const patientForm = document.getElementById("patient-form");
patientForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const patientData = new FormData(patientForm);

  const patientDataObj = {};

  patientData.forEach((value, key) => {
    patientDataObj[key] = value;
  });

  console.log(patientDataObj);
  // 127.0.0.1:3000

  fetch("http://127.0.0.1:3000/api/v1/examines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patientDataObj),
  }).then(res => res.json()).then(data => console.log(data));

  // ai 
  fetch("http://127.0.0.1:5000/predict", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patientDataObj),
  }).then(res => res.json()).then(data => console.log(data));
});
