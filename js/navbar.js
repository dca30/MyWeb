/*  BACK TO TOP   */
const navbar = document.querySelector(".navbar");
let btnArriba = document.getElementById("btn-back-to-top");
btnArriba.addEventListener("click", () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

//Cambiar el nav a modo pill al scrollear
window.addEventListener("scroll", () => {
  const scrollPos = window.scrollY;
  const windowWidth = window.innerWidth;
  if (scrollPos > 0 && windowWidth >= 992) {
    navbar.classList.add("scrolled", "rounded-pill");
  } else {
    navbar.classList.remove("scrolled", "rounded-pill");
  }
});
//Barra scroll navbar
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
