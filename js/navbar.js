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
  // check the window width
  const windowWidth = window.innerWidth;
  // toggle the CSS classes based on the scroll position and window width
  if (scrollPos > 0 && windowWidth >= 992) {
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
