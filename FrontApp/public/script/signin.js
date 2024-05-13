const SignIn = document.getElementById("signin-form");
// SignIn form
SignIn.addEventListener("submit", async (e) => {
  e.preventDefault();
  const signUpData = new FormData(SignIn);
  const signUpDataObj = {};

  signUpData.forEach((value, key) => {
    signUpDataObj[key] = value;
  });
  console.log(signUpDataObj);

  const resFromBackEnd = await fetch(
    "http://127.0.0.1:3000/api/v1/users/signup",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(signUpDataObj),
    }
  );
  const dataFromBackend = await resFromBackEnd.json();
  console.log(dataFromBackend);
  const modal = document.getElementById("myModal");
  const span = document.getElementsByClassName("close")[0];
  const message = document.getElementById("modalMessage");

  modal.style.display = "block";
  if (dataFromBackend["status"] !== "success") {
    message.textContent = dataFromBackend["message"];
  } else {
    const user = dataFromBackend["data"]["user"];
    localStorage.setItem("userId", user["_id"]);
    message.textContent = "We Sent an email to you , Welcome to our family";
    message.style.color = "#86DC3D";

    setTimeout(() => {
      window.location.href = "../index.html";
    }, 3000);

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


