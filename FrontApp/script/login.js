
const Login = document.getElementById("login-form");
Login.addEventListener("submit", (event) => {
    event.preventDefault();
    const LoginData = new FormData(Login);
    const LoginDataObj = {};
  
    LoginData.forEach((value, key) => {
      LoginDataObj[key] = value;
    });
    console.log(LoginDataObj);
  })