console.log("success register");

let nombre = document.querySelector("#register-name");
let apellido = document.querySelector("#register-surname");
let email = document.querySelector("#register-email");
let registerForm = document.querySelector("#register-form");
let registerErrors = document.querySelector("#register-errors");
let registerEmailError = document.querySelector("#register-email-error") 
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
    let getStorage = JSON.parse(localStorage.getItem("userRegister"));
    let elements = event.target.elements;
    let result = validateForm(event, elements);
    let formToStorage = validateStorage(result, getStorage);
    !formToStorage && event.target.submit();
  });

function validateStorage(result, getStorage) {
  let errors;
  if(!getStorage) {
    localStorage.setItem("userRegister", JSON.stringify({
      registerName: "",
      registerSurname: "",
      registerEmail: ""
    }))
    
  }
  if(result) {
    console.log("Debe corregir los errores");
    errors = true;
  }
  else if(!result && getStorage.registerEmail == email.value) {
    console.log("Este email ya se encuentra registrado");
    errors = true;
  } else {
    localStorage.setItem("userRegister", JSON.stringify({
      registerName: nombre.value,
      registerSurname: apellido.value,
      registerEmail: email.value
    }))
    errors = false;
  }
  return errors;
}

    // STORAGE // 
    /* let storageRegister = setAndGetStorageRegister();
    let inputsToStorage = Object.keys(storageRegister);

    inputsToStorage.forEach((element) => {
      inputsToStorage[element] = localStorage.setItem(
        "userRegister",
        JSON.stringify({
          registerName: nombre.value,
          registerSurname: apellido.value,
          registerEmail: email.value,
        })
      );
    }); */



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
      registerEmailError.innerText = "El mail es invalido";
    } else {
      input.classList.remove("border-danger");
      input.classList.add("border-success");
      registerEmailError.innerText = "";
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
        if (!element.value || element.value == undefined || element.value.length < 3 || !validateEmail(email)) {
          registerErrors.innerText = "Los campos señalados son obligatorios";
          element.classList.remove("border-success");
          element.classList.add("border-danger");
          errors = true;
        } else {
          element.classList.remove("border-danger");
          
          errors = false;
        }
      }
    }
    return errors;
  }

})


