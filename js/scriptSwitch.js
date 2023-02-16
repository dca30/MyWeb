const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
const timeline = document.getElementById("cardTimeline");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const navTop = document.getElementById("navTop");
const dropdowns = document.querySelectorAll(".dropdown-menu");

function toggleDarkMode() {
  const color = document.documentElement.style;
  localStorage.getItem("dark") === "true"
    ? color.setProperty("--hover-color", "black")
    : color.setProperty("--hover-color", "white");
  body.classList.toggle("dark");
  body.classList.toggle("light");
  body.classList.toggle("dark-body");
  navTop.classList.toggle("navbar-dark");
  navTop.classList.toggle("navbar-light");
  sunIcon.className =
    sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  moonIcon.className =
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
  Array.from(document.getElementsByClassName("card")).forEach((card) => {
    card.classList.toggle("dark-mode-card");
  });
  if (timeline) timeline.classList.toggle("dark-mode-card");
  dropdowns.forEach((dropdown) => {
    dropdown.classList.toggle("dropdown-menu-dark");
  });
  localStorage.setItem("dark", body.classList.contains("dark"));
}
document.addEventListener("DOMContentLoaded", function () {
  toggle.addEventListener("change", toggleDarkMode);
  localStorage.getItem("dark") === "true" ? toggleDarkMode() : undefined;
});
