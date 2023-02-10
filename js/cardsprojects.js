const buttons = document.querySelectorAll(".expand-button");
const header = document.getElementById("my-header");
const overlay = document.getElementById("overlay");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    /*var div = document.getElementById("myDiv");
    div.style.display = "block";*/

    // Get the corresponding image
    const image = card.querySelector(".image");
    image.classList.toggle("small");
    card.classList.toggle("expanded");
    const cardParagraph = card.querySelector("p");
    cardParagraph.classList.toggle("minimized");
    header.style.display = card.classList.contains("expanded")
      ? "none"
      : "block";
    overlay.style.display = card.classList.contains("expanded")
      ? "block"
      : "none";
    card.style.zIndex = card.classList.contains("expanded") ? 1000 : "";
    const smallSize = card.querySelector(".small-size");
    const bigSize = card.querySelector(".big-size");
    smallSize.classList.toggle("hiddenProjects");
    bigSize.classList.toggle("hiddenProjects");

    let selectedCardParagraph;
    if (cardParagraph.classList.contains("minimized")) {
      selectedCardParagraph = smallSize.textContent;
    } else {
      selectedCardParagraph = bigSize.textContent;
    }
    console.log(selectedCardParagraph);
  });
});
