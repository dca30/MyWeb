
// When the user scrolls the page, execute scrollFunction
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
/*Funcion boton volver arriba*/
//Get the button
let btnArriba = document.getElementById("btn-back-to-top");
let socialMenu = document.getElementById("social");

// When the user clicks on the button, scroll to the top of the document
btnArriba.addEventListener("click", backToTop);
var node = document.querySelector('[title="Hosted on free web hosting 000webhost.com. Host your own website for FREE."]');
node.style.display = "none";
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btnArriba.style.display = "block";
      socialMenu.style.display = "block";
    } else {
      btnArriba.style.display = "none";
      socialMenu.style.display = "none";
    }
}

/*function funcionOscuro() {
    var iconoSol = document.getElementById("luna");
    var iconoLuna = document.getElementById("sol");
    var navTop = document.getElementById("navTop");
    var dropdownMenu = document.getElementById("dropdown-menu");
    navTop.classList.toggle("dark-mode-nav");

    const dropdowns = document.querySelectorAll('.dropdown-menu');

    if (iconoSol.style.display === "none") {
      iconoSol.style.display = "block";
      iconoLuna.style.display = "none";

      navTop.classList.remove("navbar-dark");
      navTop.classList.add("navbar-light");
      for (const dropdown of dropdowns) {
                  dropdown.classList.remove('dropdown-menu-dark');
                }
      //dropdownMenu.classList.remove("dropdown-menu-dark");
    } else {
      iconoSol.style.display = "none";
      iconoLuna.style.display = "block";
      navTop.classList.remove("navbar-light");
      navTop.classList.add("navbar-dark");
      for (const dropdown of dropdowns) {
                  dropdown.classList.add('dropdown-menu-dark');
                }
  }
  var element = document.body;
  element.classList.toggle("dark-mode-body");

  var element = document.getElementById("btn-back-to-top");
  //element.style.color = "white";

  var element2 = document.getElementById("my-header");
  element2.classList.toggle("dark-mode-header");
}*/