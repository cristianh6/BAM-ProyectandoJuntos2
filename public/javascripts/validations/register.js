/* console.log("register success");

let nombre = document.querySelector("#register-name");
let apellido = document.querySelector("#register-surname");
let email = document.querySelector("#register-email");
let emailError = document.getElementById('register-email-error')
let buttonSubmit = document.querySelector("#register-submit");
let form = document.getElementById("register-form");
let divName = document.querySelector("#div-input-name");
let inputs = document.getElementsByTagName("input");
let users = [];

document.addEventListener("DOMContentLoaded", () => {
  storageLocalJson();
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let elements = e.target.elements;
  let errors = false;
  for (let i = 0; i < elements.length - 6; i++) {
    if (!elements[i].value.trim() || elements[i].value.trim().length < 2) {
      elements[i].style.border = "1px solid red";
      errors = elements[i];
      console.log(errors);
      errors = true;
    } else {
      elements[i].style.border = "1px solid green";
    }
  }
  if (!errors) {
    let newUser = {
      nombre: nombre.value,
      apellido: apellido.value,
      correo: email.value,
    };
    compareEmails(newUser.correo, () => {
      localStorage.setItem("userForm", JSON.stringify(newUser));
      location.replace("http://127.0.0.1:5500/public/views/index.html");
    });   
  }
});

const fetchLocalJson = async () => {
  try {
    const response = await fetch("../data/users.json");
    const data = response.json();
    return data;
  } catch (error) {
    console.error;
  }
};

const storageLocalJson = async () => {
  try {
    const response = await fetchLocalJson();
    localStorage.setItem("userForm", JSON.stringify(response));
    const getJson = JSON.parse(localStorage.getItem("userForm"));
    return getJson;
  } catch (error) {
    console.log(error);
  }
};


const compareEmails = (registerUserEmail, submit) => {
  let jsonParsed = JSON.parse(localStorage.getItem("userForm"));
  let filterEmails = jsonParsed.filter((user) => user.correo === registerUserEmail);
  if(filterEmails.length > 0) {
    emailError.textContent = "Este mail no está disponible";
    emailError.style.color = "red";
  } else {
    users.push(filterEmails);
    submit();
  }
  return filterEmails;
}; */

 


/* const fetchLocalJson = async () => {
  try {
    const response = await fetch("https://apis.datos.gob.ar/georef/api");
    const data = await response.json();
    console.log(data)
  } catch (error) {
    console.error;
  }
};

fetchLocalJson() */