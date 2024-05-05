
const Login = document.getElementById("login-form");
Login.addEventListener("submit", async (event) => {
    event.preventDefault();
    const LoginData = new FormData(Login);
    const LoginDataObj = {};
  
    LoginData.forEach((value, key) => {
      LoginDataObj[key] = value;
    });
    console.log(LoginDataObj);

    const resToBackEnd = fetch("http://127.0.0.1:3000/api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(LoginDataObj),
    });
    const dataFromBackend = await resToBackEnd.json();
  })