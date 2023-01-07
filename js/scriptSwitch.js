function addEventListeners() {
  
  const toggle = document.getElementById("toggle");
  const body = document.querySelector("body");
  const sunIcon = document.querySelector(".toggle .bxs-sun");
  const moonIcon = document.querySelector(".toggle .bx-moon");

  toggle.addEventListener("change", () => {
    const dark = localStorage.getItem("dark");
    localStorage.setItem("dark", dark === "true" ? false : true);
    body.classList.toggle("dark");
    sunIcon.className =
      sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
    moonIcon.className =
      moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

    var navTop = document.getElementById("navTop");
    var dropdownMenu = document.getElementById("dropdown-menu");
    navTop.classList.toggle("dark-mode-nav");
    const dropdowns = document.querySelectorAll(".dropdown-menu");
    var element = document.body;
    element.classList.toggle("dark-mode-body");
    //Recogemos todos las card y les cambiamos el color dependiendo de si esta en modo oscuro o no
    Array.from(document.getElementsByClassName("card")).forEach((element) => {
      element.classList.toggle("dark-mode-card");
    });
    Array.from(document.getElementsByClassName("btn-warning")).forEach(
      (element) => {
        element.classList.toggle("text-white");
      }
    );
    var element = document.getElementById("btn-back-to-top");
    element.classList.toggle("text-white");

    var element2 = document.getElementById("my-header");
    element2.classList.toggle("dark-mode-header");
    //icon.classList.toggle('fa-sun');
    //icon.classList.toggle('fa-moon');

    //Modo oscuro navbar arriba
    navTop.classList.toggle("navbar-dark");
    navTop.classList.toggle("navbar-light");
    for (const dropdown of dropdowns) {
      dropdown.classList.toggle("dropdown-menu-dark");
    }
  });
}

const darkMode = localStorage.getItem("dark");

// If the "dark" variable is null, set it to the default value of true
if (darkMode === null) {
  localStorage.setItem("dark", false);
}

// Get the checkbox element
const checkbox = document.getElementById("toggle");
// On each page, check for the presence of the dark mode setting in localStorage
const dark = localStorage.getItem("dark");

if (dark === "true") {
  //HERE
  //addEventListeners();
}
  document.addEventListener("DOMContentLoaded", addEventListeners);

