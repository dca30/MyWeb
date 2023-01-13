var btn = document.getElementById("myButton");
btn.addEventListener("click", function () {
  var cards = document.querySelectorAll(".card");
  var barras = document.querySelectorAll(".bar");
  var iconos = document.querySelectorAll(".icono");
  var h3s = Array.from(document.getElementsByTagName("h3"));
  cards.forEach(function (card) {
    card.classList.toggle("one-per-row");
    card.classList.toggle("pt-4");
    card.classList.toggle("small");
  });

  barras.forEach(function (bar) {
    bar.classList.toggle("oculto");
  });

  iconos.forEach(function (icon) {
    icon.classList.toggle("oculto");
  });
  h3s.forEach(function (h3) {
    h3.classList.toggle("oculto");
  });
});
