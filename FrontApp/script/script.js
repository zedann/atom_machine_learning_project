console.log("Hello my team!");
const patientForm = document.getElementById("patient-form");

document.querySelector(".closeSide").addEventListener("click", function () {
  document.querySelector(".sidebar-body").style.display = "none";
});

document.querySelector(".open").addEventListener("click", function () {
  document.querySelector(".sidebar-body").style.display = "block";
});

if (localStorage.getItem("userId")) {
  document.querySelector(".login-signin").style.display = "none";
  document.querySelector(".logout").style.display = "block";
  document.querySelector(".pre-history").style.display = "block";
}
document
  .querySelector(".logout button")
  .addEventListener("click", async (e) => {
    e.preventDefault();
    document.querySelector(".login-signin").style.display = "block";
    document.querySelector(".logout").style.display = "none";
    const resFromBackend = await fetch(
      "http://127.0.0.1:3000/api/v1/users/logout"
    );
    console.log(resFromBackend);
    localStorage.removeItem("userId");
  });
patientForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const patientData = new FormData(patientForm);

  const patientDataObj = {};

  patientData.forEach((value, key) => {
    if (!isNaN(value)) {
      value = Number(value);
    }
    patientDataObj[key] = value;
  });

  console.log(patientDataObj);
  // 127.0.0.1:3000

  // ai
  const predicted = await predict(patientDataObj);
  console.log("predicted: ", predicted);
  predicted["classifier"] = Math.round(predicted["classifier"]);
  patientDataObj["result"] = predicted["classifier"];
  /*
   * if user logged/exist
   * add patientDataObj[user] = id;
   *
   * */

  console.log(localStorage.getItem("userId"));
  if (localStorage.getItem("userId")) {
    patientDataObj["user"] = localStorage.getItem("userId");
  }

  console.log(patientDataObj);
  const resFromBackend = await fetch("http://127.0.0.1:3000/api/v1/examines", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(patientDataObj),
  });

  const dataFromBackend = await resFromBackend.json();

  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  const message = document.getElementById("modalMessage");
  modal.style.display = "block";
  document.querySelector(".sidebar-body").style.display = "none";
  if (dataFromBackend["status"] != "success") {
    message.textContent = "Something went wrong please try again later!";
  } else {
    message.textContent = `${predicted["classifier"]}% that you have a Heart Disease`;
  }
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  console.log(dataFromBackend);
});

async function predict(patientDataObj) {
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
