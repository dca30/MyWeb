const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");

function toggleDarkMode() {
  body.classList.toggle("light");
  body.classList.toggle("dark");

  sunIcon.className =
    sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  moonIcon.className =
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";
  if (location.pathname.includes("skills")) {
    updateSaturation();
  }
  localStorage.setItem("dark", body.classList.contains("dark"));
}

document.addEventListener("DOMContentLoaded", function () {
  toggle.addEventListener("change", toggleDarkMode);
  localStorage.getItem("dark") === "true" ? toggleDarkMode() : undefined;
});
