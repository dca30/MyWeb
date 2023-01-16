const buttons = document.querySelectorAll(".expand-button");
const header = document.getElementById("my-header");
const overlay = document.getElementById("overlay");
//const closeButton = document.getElementById("close-button");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.parentElement.parentElement;
    card.classList.toggle("expanded");
    header.style.display = header.style.display === "none" ? "block" : "none";
    overlay.style.display = card.classList.contains("expanded")
      ? "block"
      : "none";
    card.style.zIndex = card.classList.contains("expanded") ? 1000 : "";
    button.innerHTML = card.classList.contains("expanded")
      ? "Show less"
      : "Show more";
  });
});
