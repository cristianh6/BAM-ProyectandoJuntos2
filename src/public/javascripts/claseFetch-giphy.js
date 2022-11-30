let ul = document.querySelector("ul");
let boton = document.querySelector("button");
let urlGiphy =
  "https://api.giphy.com/v1/gifs/trending?api_key=Noi5WvBuoGudTrkflJBzRyijUWbKZLwd&limit=25&rating=g";

let number = 200
let urlCats = "https://http.cat/200"







 document.addEventListener("DOMContentLoaded", () => {
  boton.addEventListener("click", async (e) => {
    if (e.target) {
      let result = await fetchData();
      console.log(result)
      /* for (let i = 0; i < result.data.length; i++) {
        const element = result.data[i];
        let gif = "<div>" + element.title + "</div>";
        gif += "<img src=" + element.images.original.url + ">";
        ul.innerHTML += "<li>" + gif + "</li>";
      } */
    }
  });
}); 


 let fetchData = function() {
    fetch(urlGiphy)
        .then(function(respuesta) {
          return respuesta.json();
        })
        .then(function(informacion) {
          console.log(informacion)
          /* for (let i = 0; i < informacion.data.length; i++) {
            let gif = "<p>" + informacion.data[i].title + "</p>";
            gif += "<img src=" + informacion.data[i].images.original.url + ">"
            ul.innerHTML += "<li>" + gif + "</li>"
          } */
        })
        .catch(function(error) {
            alert("Error", error)
        })
} 

