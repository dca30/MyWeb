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
var btn = document.getElementById("show-more");
const percentages = {
  linux: 80,
  docker: 75,
  java: 85,
  python: 30,
  html: 85,
  javascript: 62,
  bootstrap: 65,
  css: 75,
  sql: 70,
  php: 40,
  laravel: 25,
  git: 90,
};

let css = "";
for (const skill in percentages) {
  css += `.progress-line .${skill} { width: ${percentages[skill]}%; }`;
  css += `.progress-line .${skill}::after { content: "${percentages[skill]}%"; }`;
}
const style = document.createElement("style");
style.innerHTML = css;
document.head.appendChild(style);
btn.addEventListener("click", function () {
  if (btn.getAttribute("data-translate") === "showmore") {
    updateContent();
    btn.setAttribute("data-translate", "showless");
  } else {
    updateContent();
    btn.setAttribute("data-translate", "showmore");
  }
  var cards = document.querySelectorAll(".card");
  var barras = document.querySelectorAll(".bar");
  var iconos = document.querySelectorAll(".icono");
  var h2s = Array.from(document.getElementsByTagName("h2"));

  cards.forEach((card) => {
    card.style.opacity = "0";
    card.style.visibility = "hidden";
  });
  setTimeout(() => {
    cards.forEach(function (card) {
      card.classList.toggle("one-per-row");
      card.classList.toggle("pt-4");
      card.classList.toggle("my-4");
      card.classList.toggle("small");
      card.classList.toggle("expanded");
    });

    [...barras, ...iconos, ...h2s].forEach(function (element) {
      element.classList.toggle("oculto");
    });
    setTimeout(() => {
      cards.forEach((card) => {
        card.style.opacity = "1";
        card.style.visibility = "visible";
      });
    }, 300);
  }, 300);
});
