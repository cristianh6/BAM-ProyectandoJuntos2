// URLS //

let urlUserJson = "/public/data/users.json";
let urlHttpBin = "https://httpbin.org/post";
let urlCats = "https://http.cat/"
let pokeApi = "https://pokeapi.co/api/v2/pokemon/"
// DOM OBJECTS // 
let ul = document.querySelector("ul");
let boton = document.querySelector("button");

// STORAGE //
let userRegister = JSON.parse(localStorage.getItem("userRegister"));
let {registerEmail} = userRegister;


/* const getFetchData = () => {
  let response = fetch(urlUserJson);
  let data = response.json();
  return data;
}; */



document.addEventListener("DOMContentLoaded", async () => {
  boton.addEventListener("click", async (e) => {
    if (e.target) {
      let result = await getFetchPokemons();
    }
  });
});


const getFetchDataAsync = async () => {
  let user = {nombre: "Cristian"}
  let data = await fetch(urlHttpBin, {
    method: "POST",
    body: JSON.stringify(user),
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json"
    }
  });
  if(data.ok) {
    console.log("Data enviada correctamente")
  } else {
    console.log("Error en el envío")
  }
  return data;
};

const getFetchPokemons = () => {
  fetch(pokeApi)
  .then(response => response.json())
  .then(data => console.log(data.results[5]));
};







/* let prueba = await getFetchData();
      console.log(prueba);
      prueba.forEach(element => {
        if(element.correo == registerEmail) {
          console.log(element.correo + " Puede ingresar");
        } else {
          console.log(element.correo + " No puede ingresar");
        }
      }); */













const postFetchData = async () => {
  let data = { user: "Cristian" };
  let response = await fetch(urlHttpBin, {
    "method": "GET",
    "body": JSON.stringify(data),
    "Accept": "application/json",
    "headers": {
      "Content-Type": "application/json",

    },
  });
  if(response.ok) {
    console.log("Información enviada correctamente")
    ul.innerHTML += "<li></li>"
  } else {
    console.log("Error")
  }
  return response;
};
