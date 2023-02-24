const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
//const timeline = document.getElementById("cardTimeline");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const navTop = document.getElementById("navTop");
//const dropdown = document.querySelector(".dropdown-menu");

function toggleDarkMode() {
  body.classList.toggle("dark");
  body.classList.toggle("light");

  //navTop.classList.toggle("navbar-dark");
  //navTop.classList.toggle("navbar-light");

  sunIcon.className =
    sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  moonIcon.className =
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

  /*if (timeline) timeline.classList.toggle("dark-mode-card");
  dropdown.classList.toggle("dropdown-menu-dark");*/
  localStorage.setItem("dark", body.classList.contains("dark"));
}
document.addEventListener("DOMContentLoaded", function () {
  toggle.addEventListener("change", toggleDarkMode);
  localStorage.getItem("dark") === "true" ? toggleDarkMode() : undefined;
});
