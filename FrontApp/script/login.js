const Login = document.getElementById("login-form");

Login.addEventListener("submit", async (e) => {
  e.preventDefault();
  const LoginData = new FormData(Login);
  const LoginDataObj = {};

  LoginData.forEach((value, key) => {
    LoginDataObj[key] = value;
  });
  console.log(LoginDataObj);

  const resFromBackEnd = await fetch(
    "http://127.0.0.1:3000/api/v1/users/login",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(LoginDataObj),
    }
  );
  const dataFromBackend = await resFromBackEnd.json();
  console.log(dataFromBackend);
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  const message = document.getElementById("modalMessage");

  if (dataFromBackend["status"] != "success") {
    modal.style.display = "block";
    message.textContent = dataFromBackend["message"];
  } else {
    const user = dataFromBackend["data"]["user"];
    localStorage.setItem("userId", user["_id"]);
    window.location.href = "../index.html";

    console.log(user);
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
});
document.querySelector(".forget-btn").addEventListener("click", (e) => {
  e.preventDefault();
  const modal = document.getElementById("forgetPasswordModel");
  const span = document.getElementsByClassName("close")[0];
  modal.style.display = "block";
  span.onclick = function () {
    modal.style.display = "none";
  };

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  };
  const forgetForm = document.getElementById("forget-form");
  console.log("clicked");
  console.log(forgetForm);
  forgetForm.addEventListener("submit", async (e) => {
    const formInfo = new FormData(forgetForm);
    const formInfoObj = {};

    formInfo.forEach((value, key) => {
      formInfoObj[key] = value;
    });
    console.log(formInfoObj);

    const resFromBackEnd = await fetch(
      "http://127.0.0.1:3000/api/v1/users/forgotPassword",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formInfoObj),
      }
    );

    const dataFromBackend = await resFromBackEnd.json();
    console.log(dataFromBackend);
    if (dataFromBackend["status"] === "success") {
      forgotEmailSent = true;
    }
  });
});

const resetBtn = document
  .querySelector(".resetBtn")
  .addEventListener("click", () => {
    const message = document.querySelector(".h2-title");
    message.textContent = "We Sent your reset token to your email!";
  });
