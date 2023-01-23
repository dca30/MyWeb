const buttons = document.querySelectorAll(".expand-button");
const header = document.getElementById("my-header");
const overlay = document.getElementById("overlay");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    card.classList.toggle("expanded");
    const cardParagraph = card.querySelector("p");
    cardParagraph.classList.toggle("minimized");
    header.style.display = card.classList.contains("expanded")
      ? "block"
      : "none";
    overlay.style.display = card.classList.contains("expanded")
      ? "block"
      : "none";
    card.style.zIndex = card.classList.contains("expanded") ? 1000 : "";
    button.innerHTML =
      button.innerHTML === "Show more" ? "Show less" : "Show more";
    const smallSize = card.querySelector(".small-size");
    const bigSize = card.querySelector(".big-size");
    smallSize.classList.toggle("hidden");
    bigSize.classList.toggle("hidden");
  });
});
