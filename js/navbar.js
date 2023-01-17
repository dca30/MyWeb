// get a reference to the navbar
const navbar = document.querySelector(".navbar");
/*Funcion boton volver arriba*/
//Get the button
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

  // if the scroll position is greater than 0 (i.e. the user has scrolled down)
  if (scrollPos > 0) {
    // change the navbar's width to 50% and add rounded corners
    navbar.style.width = "50%";
    navbar.style.margin = "8px";
    navbar.classList.add("rounded-pill");
  } else {
    // otherwise, reset the navbar to its original style
    navbar.style.width = "100%";
    navbar.style.margin = "0px";
    navbar.classList.remove("rounded-pill");
  }
});

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}
// When the user scrolls the page, execute scrollFunction
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  var scrolled = window.pageYOffset || document.documentElement.scrollTop;
  /*if (scrolled > 200) {
    document.getElementById("social").classList.add("show");
  }*/
};
window.onscroll = function () {
  scrollFunction();
};
const elements = document.querySelectorAll(".contenido, #btn-back-to-top");
window.addEventListener("scroll", function () {
  const action = window.pageYOffset > 100 ? "remove" : "add";
  elements.forEach((el) => el.classList[action]("hidden"));
});
