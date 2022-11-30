console.log("sucess");

/* const qs = (element) => document.querySelector(element);
const qsa = (element) => document.querySelectorAll(element);
const $ = (element) => document.getElementById(element); */

let index = document.querySelector("body");
let article = document.querySelectorAll(".index__main-section1 article");
let article1 = document.querySelector(".index__main-section1 .index__article1");
let article2 = document.querySelector(".index__main-section1 .index__article2");
let article3 = document.querySelector(".index__main-section1 .index__article3");



let artStyle1 = function() {
  article1.style.visibility = 'visible'
  article1.style.transform = "translateX(-25%)";
  article1.style.transition = "all 2s";
  article1.classList.add('opacity1');
}

let artStyle2 = function() {
  article2.style.visibility = 'visible'
  article2.style.transform = "scale(100%)";
  article2.style.transition = "all 2s";
  article2.classList.add('opacity1');
}

let artStyle3 = function() {
  article3.style.visibility = 'visible'
  article3.style.transform = "translateX(25%)";
  article3.style.transition = "all 2s";        
  article3.classList.add('opacity1');
}

article.forEach(article => {
  article.classList.add('hover'),
  article.classList.add('opacity0')
})

  window.addEventListener("DOMContentLoaded", () => { 

  window.onscroll = function() {
    appear()
  };



  function appear() {
      if(document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        setTimeout(() => {
          artStyle1(),
          artStyle2(),
          artStyle3()
        }, 1000);
      } 
    }
  });



 

