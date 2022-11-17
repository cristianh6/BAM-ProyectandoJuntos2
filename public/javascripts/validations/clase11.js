console.log("success");

let nombre = document.querySelector("#register-name");
let apellido = document.querySelector("#register-surname");
let email = document.querySelector("#register-email");
let registerForm = document.querySelector("#register-form");
let registerErrors = document.querySelector("#register-errors");
let validRegex =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

window.addEventListener("DOMContentLoaded", () => {
  nombre.addEventListener("blur", (e) => {
    listenNameAndSurname(nombre, e);
  });

  apellido.addEventListener("blur", (e) => {
    listenNameAndSurname(apellido, e);
  });

  email.addEventListener("blur", (e) => {
    listenerEmail(email, e);
  });

  registerForm.addEventListener("submit", (event) => {
    event.preventDefault();
    let elements = event.target.elements;
    let result = validateForm(event, elements);
    !result && event.target.submit();
  });
});

// FUNCIONES //

let listenNameAndSurname = (input, e) => {
  if (
    (e.target && e.target.value.trim().length < 3) ||
    e.target.value.trim().length > 20
  ) {
    input.classList.remove("border-success");
    input.classList.add("border-danger");
  } else {
    input.classList.remove("border-danger");
    input.classList.add("border-success");
  }
};

let listenerEmail = (input, e) => {
  if (
    (e.target && e.target.value.trim().length < 3) ||
    e.target.value.trim().length > 30 ||
    !e.target.value.match(validRegex)
  ) {
    input.classList.remove("border-success");
    input.classList.add("border-danger");
  } else {
    input.classList.remove("border-danger");
    input.classList.add("border-success");
  }
};

function validateEmail(input) {
  if (input.value.match(validRegex)) {
    return true;
  } else {
    return false;
  }
}

function validateForm(event, elements) {
  let errors;
  if (event.target) {
    for (let i = 0; i < elements.length - 6; i++) {
      const element = elements[i];
      if (!element.value || element.value == undefined) {
        registerErrors.innerText = "Los campos señalados son obligatorios";
        element.classList.remove("border-success");
        element.classList.add("border-danger");
        errors = true;
      } else {
        element.classList.remove("border-danger");
        validateEmail(email)
          ? element.classList.remove("border-danger")
          : email.classList.add("border-danger");
        errors = false;
      }
    }
  }
  return errors;
}
