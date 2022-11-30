function funcionOscuro() {
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


  var element2 = document.getElementById("my-header");
  element2.classList.toggle("dark-mode-header");

    /*var iconUser = document.getElementById("iconUser");
    iconUser.classList.toggle("dark-mode-iconUser");*/


}
// When the user scrolls the page, execute funcionDesplazamiento
window.onscroll = function() {funcionDesplazamiento()};

function funcionDesplazamiento() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}