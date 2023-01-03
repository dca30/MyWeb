// When the user scrolls the page, execute scrollFunction
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};
/*Funcion boton volver arriba*/
//Get the button
let btnArriba = document.getElementById("btn-back-to-top");
let socialMenu = document.getElementById("social");

// When the user clicks on the button, scroll to the top of the document
btnArriba.addEventListener("click", backToTop);
/*
var node = document.querySelector('[title="Hosted on free web hosting 000webhost.com. Host your own website for FREE."]');
node.style.display = "none";
*/
function backToTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function scrollFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
  if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      btnArriba.style.display = "block";
      socialMenu.style.display = "block";
    } else {
      btnArriba.style.display = "none";
      socialMenu.style.display = "none";
    }
}

function copyToClipboard(event, text) {
    event.preventDefault();
    navigator.clipboard.writeText(text).then(function() {
      console.log('Copied to clipboard');
    }, function(err) {
      console.error('Failed to copy: ', err);
    });
  }