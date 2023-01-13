$(document).ready(function () {
  var randomnbr = $(".nbr");
  var timer = 30;
  var it;
  var data = 0;
  var index;
  var change;
  var letters = ["d", "i", "e", "g", "o", " ", "c", "a", "l", "v", "o"];

  randomnbr.each(function () {
    change = Math.round(Math.random() * 100);
    $(this).attr("data-change", change);
  });

  function random() {
    return Math.round(Math.random() * 9);
  }
  function select() {
    return Math.round(Math.random() * randomnbr.length + 1);
  }
  function value() {
    $(".nbr:nth-child(" + select() + ")").html("" + random() + "");
    $(".nbr:nth-child(" + select() + ")").attr("data-number", data);
    data++;

    randomnbr.each(function () {
      if (
        parseInt($(this).attr("data-number")) >
        parseInt($(this).attr("data-change"))
      ) {
        index = $(".ltr").index(this);
        $(this).html(letters[index]);
        $(this).removeClass("nbr");
      }
    });
  }
  $it = setInterval(value, timer);
}); /*
/*function random() {
          return Math.round(Math.random() * 9);
        }*/ /*
/*function select() {
    return Math.floor(Math.random() * randomnbr.length);
  }*/
/*
document.addEventListener("DOMContentLoaded", function () {
  var randomnbr = document.querySelectorAll(".nbr");
  var timer = 50;
  var inc = 10;
  var data = 0;
  var count = 0;
  var index, change;
  var letters = [
    "d",
    "i",
    "e",
    "g",
    "o",
    " ",
    "c",
    "a",
    "l",
    "v",
    "o" ,
    " ",
    "a",
    "l",
    "e",
    "g",
    "r",
    "e",
  ];

  randomnbr.forEach(function (el) {
    change = Math.round(Math.random() * 100);
    el.setAttribute("data-change", change);
  });

  function value() {
    var randomEl = randomnbr[Math.floor(Math.random() * randomnbr.length)];
    randomEl.innerHTML = Math.round(Math.random() * 9);
    randomEl.setAttribute("data-number", data);
    data++;

    randomnbr.forEach(function (el) {
      if (
        parseInt(el.getAttribute("data-number")) <
        parseInt(el.getAttribute("data-change"))
      ) {
        index = Array.from(randomnbr).indexOf(el);
        el.innerHTML = letters[index];
        el.classList.remove("nbr");
        count++;
      }
    });
    setTimeout(value, timer + inc * count);
  }
  it = setInterval(value, timer);
});
*/
