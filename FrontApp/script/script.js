console.log("Hello my team!");

document.querySelector(".close").addEventListener("click", function () {
  document.querySelector(".sidebar-body").style.display = "none";
});

document.querySelector(".open").addEventListener("click", function () {
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
});
