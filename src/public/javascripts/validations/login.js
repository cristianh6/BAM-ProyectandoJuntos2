console.log("success login");

let passwordRegex =
  "^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[*.!@$%^&(){}[]:;<>,.?/~_+-=|]).{8,32}$";

let email = document.querySelector("#login-email");
let loginForm = document.querySelector("#login-form");


window.addEventListener("DOMContentLoaded", () => {
  let userRegister = JSON.parse(localStorage.getItem("userRegister"));

  loginForm.addEventListener("submit", (event) => {

    event.preventDefault();
    let errors;
    if (event.target) {
      if (email.value == userRegister.registerEmail) {
        console.log("Puede acceder");
        errors = false;
      } else {
        console.log("Credenciales invalidas");
        errors = true;
      }
      
    }

    if(!errors) {
        event.target.submit();
        document.location.assign("https://www.google.com/?hl=es")
        
    } else {
        console.log("tiene errores")
    }
  });
});


