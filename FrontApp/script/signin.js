const SignIn = document.getElementById("signin-form");
// SignIn form
SignIn.addEventListener("submit", (event) => {
    event.preventDefault();
    const SignInData = new FormData(SignIn);
    const SignInDataObj = {};
  
    SignInData.forEach((value, key) => {
      SignInDataObj[key] = value;
    });
    console.log(SignInDataObj);
  })