const navbar = document.querySelector(".navbar");
/*Funcion boton volver arriba*/
let btnArriba = document.getElementById("btn-back-to-top");

// When the user clicks on the button, scroll to the top of the document
btnArriba.addEventListener("click", backToTop);
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

// listen for the scroll event
//Cambiar el nav a modo pill al scrollear
window.addEventListener("scroll", () => {
  // get the current scroll position
  const scrollPos = window.scrollY;
  // toggle the CSS classes based on the scroll position
  if (scrollPos > 0) {
    navbar.classList.add("scrolled", "rounded-pill");
  } else {
    navbar.classList.remove("scrolled", "rounded-pill");
  }
});

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  var barra = document.getElementById("myBar");
  barra.style.width = scrolled + "%";
}
window.onscroll = function () {
  scrollFunction();
};
const elements = document.querySelectorAll(".contenido, #btn-back-to-top");
window.addEventListener("scroll", function () {
  const action = window.pageYOffset > 100 ? "remove" : "add";
  elements.forEach((el) => el.classList[action]("hidden"));
});
//Posible opcion refactorizada
/*const navbar = document.querySelector(".navbar");
const btnArriba = document.getElementById("btn-back-to-top");
const barra = document.getElementById("myBar");
const elements = document.querySelectorAll(".contenido, #btn-back-to-top");

// When the user clicks on the button, scroll to the top of the document
btnArriba.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

// listen for the scroll event
window.addEventListener("scroll", () => {
  // get the current scroll position
  const scrollPos = window.scrollY;

  // if the scroll position is greater than 0 (i.e. the user has scrolled down)
  if (scrollPos > 0) {
    // change the navbar's width to 50% and add rounded corners
    navbar.classList.add("scrolled", "rounded-pill");
    barra.classList.add("show");
  } else {
    // otherwise, reset the navbar to its original style
    navbar.classList.remove("scrolled", "rounded-pill");
    barra.classList.remove("show");
  }

  // calculate the scroll percentage and update the progress bar
  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (scrollPos / height) * 100;
  barra.style.width = `${scrolled}%`;

  // toggle the visibility of elements based on the scroll position
  const action = scrollPos > 100 ? "remove" : "add";
  elements.forEach((el) => el.classList[action]("hidden"));
});*/
