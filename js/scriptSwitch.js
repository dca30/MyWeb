const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
const timeline = document.getElementById("cardTimeline");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const navTop = document.getElementById("navTop");
const dropdowns = document.querySelectorAll(".dropdown-menu");

function toggleDarkMode() {
  body.classList.toggle("dark");
  body.classList.toggle("light");
  body.classList.toggle("dark-body");
  navTop.classList.toggle("navbar-dark");
  navTop.classList.toggle("navbar-light");
  sunIcon.className =
    sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  moonIcon.className =
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
  localStorage.setItem("dark", body.classList.contains("dark"));
  Array.from(document.getElementsByClassName("card")).forEach((card) => {
    card.classList.toggle("dark-mode-card");
  });
  timeline.classList.toggle("dark-mode-card");

  dropdowns.forEach((dropdown) => {
    dropdown.classList.toggle("dropdown-menu-dark");
  });
}

toggle.addEventListener("change", toggleDarkMode);

const darkMode = localStorage.getItem("dark");
if (darkMode === "true") {
  toggleDarkMode();
}
