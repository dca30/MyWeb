const colors = [
  "#f0c674", // Linux
  "#0db7ed", // Docker
  "#b07219", // Java
  "#3572a5", // Python
  "#e34c26", // HTML
  "#f7df1e", // JavaScript
  "#563d7c", // Bootstrap
  "#254BDD", // CSS
  "#808080", // SQL
  "#4f5d95", // PHP
  "#f05340", // Laravel
  "#f34b7d", // Git
];

const transparentColors = colors.map((color) => {
  const [r, g, b] = color.match(/\w\w/g).map((x) => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
});

const cards = document.querySelectorAll(".card");

cards.forEach((card, index) => {
  card.style.backgroundColor = transparentColors[index];
});
changeDisplay = document.getElementById("change-layout-button");
changeDisplay.addEventListener("click", changeLayout);
function changeLayout() {
  var cards = document.querySelectorAll(".carta");
  cards.forEach(function (card) {
    card.classList.toggle("col-sm-2");
    card.classList.toggle("col-sm-12");
  });
}

/*window.addEventListener("scroll", function () {
  var cards = document.querySelectorAll(".card-skill");
  if (window.scrollY == 0) {
    cards.forEach(function (card) {
      card.classList.remove("horizontal");
      //card.classList.add("card");
      card.classList.add("card-skill");
      card.classList.add("pt-4");
    });
  } else {
    cards.forEach(function (card) {
      card.classList.add("horizontal");
      //card.classList.remove("card");
      card.classList.remove("card-skill");
      card.classList.remove("pt-4");
    });
  }
});*/
