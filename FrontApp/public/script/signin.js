const SignIn = document.getElementById("signin-form");
// SignIn form
SignIn.addEventListener("submit", async(event) => {
    event.preventDefault();
    const SignInData = new FormData(SignIn);
    const SignInDataObj = {};
  
    SignInData.forEach((value, key) => {
      SignInDataObj[key] = value;
    });
    
    const resToBackEnd = fetch("http://127.0.0.1:3000/api/v1/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(SignInDataObj),

    });
    const dataFromBackend = await resToBackEnd.json();
  })