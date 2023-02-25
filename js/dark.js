const body = document.querySelector("body");
const toggle = document.getElementById("toggle");
const sunIcon = document.querySelector(".toggle .bxs-sun");
const moonIcon = document.querySelector(".toggle .bx-moon");
const navTop = document.getElementById("navTop");

function toggleDarkMode() {
  /*if (localStorage.getItem("dark") === "true") {
    body.classList.add("light");
    body.classList.remove("dark");
  } else {
    body.classList.add("dark");
    body.classList.remove("light");
  }
*/
  body.classList.toggle("light");
  body.classList.toggle("dark");

  sunIcon.className =
    sunIcon.className == "bx bxs-sun" ? "bx bx-sun" : "bx bxs-sun";
  moonIcon.className =
    moonIcon.className == "bx bxs-moon" ? "bx bx-moon" : "bx bxs-moon";

  localStorage.setItem("dark", body.classList.contains("dark"));
}
document.addEventListener("DOMContentLoaded", function () {
  toggle.addEventListener("change", toggleDarkMode);
  localStorage.getItem("dark") === "true" ? toggleDarkMode() : undefined;
});
