/* console.log("search success");
let urlAllCountries = "https://restcountries.com/v2/all";

let formCountries = document.querySelector("#form-countries");
let inputSearch = document.querySelector("#input-search");
let buttonSearch = document.querySelector("#button-search");
let searchResult = document.querySelector("#search-result");

window.onload = async function () {
  formCountries.addEventListener("submit", async (e) => {
    e.preventDefault();
    let error;
    let inputValue = inputSearch.value.trim();
    if (e.target && inputValue.length > 2) {
      let filteredCountry = await filterCountriesByName(inputValue);
      filteredCountry.forEach((element) => {
        searchResult.innerHTML += `
                <div class="border">
                <h3>${element.name}</h3>
                <img width="300px" src="${element.flag}">
                </div>
                `;
        searchResult.classList.add("border-dark")
      });
      error = false;
      toggleStyle(error);
    } else {
      error = true;
      toggleStyle(error);
    }
  });
};

let apiCall = async function () {
  try {
    let result = await fetch(urlAllCountries);
    let data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

let filterCountriesByName = async function (keyword) {
  try {
    let allCountries = await apiCall();
    let keywordToFind = allCountries.filter((nombre) => nombre.name == keyword);
    return keywordToFind;
  } catch (error) {
    console.log(error);
  }
};

let toggleStyle = function (error) {
  if (!error) {
    inputSearch.classList.remove("border-danger");
    inputSearch.classList.add("border-success");
  } else {
    inputSearch.classList.remove("border-success");
    inputSearch.classList.add("border-danger");
  }
}; */

console.log("success");

let urlAllCountries = "https://restcountries.com/v2/all";

let formCountries = document.querySelector("#form-countries");
let inputSearch = document.querySelector("#input-search");
let buttonSearch = document.querySelector("#button-search");
let searchResult = document.querySelector("#search-result");


let search;

let query = new URLSearchParams(location.search);
      if(query.has('keyword')){
      search = query.get('keyword');
      console.log(search)
    };

    
window.onload = function () {
 
  formCountries.addEventListener("submit", async (e) => {
    e.preventDefault();
    let error;
    if (e.target && inputSearch.value.trim().length > 2) {
      error = false;
      toggleStyle(error);
      let inputValue = inputSearch.value;
      let inputCapitalize = capitalizeFirstLetter(inputValue);
      let allCountries = await apiCall();
      allCountries.forEach(element => {
        if(element.translations.es.includes(inputCapitalize)) {
          searchResult.innerHTML += `
          <h3>${element.name}</h3>
          <img width="300px" src="${element.flag}">
          `;
        }
      });

      
      
    } else {
      error = true;
      toggleStyle(error);
      console.log("El país debe tener más de 2 caraceteres");
    }
    
    e.target.submit()
  });
};

let apiCall = async function () {
  try {
    let result = await fetch(urlAllCountries);
    let data = await result.json();
    return data;
  } catch (error) {
    console.log(error);
  }
};

let toggleStyle = function (error) {
  if (!error) {
    inputSearch.classList.remove("border-danger");
    inputSearch.classList.add("border-success");
  } else {
    inputSearch.classList.remove("border-success");
    inputSearch.classList.add("border-danger");
  }
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase().trim() + string.slice(1);
}


let redirect = function () {

}