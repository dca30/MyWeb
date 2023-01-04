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
 var navlinks = document.querySelectorAll(".navbar-nav a");
  for (var i = 0; i < navlinks.length; i++) {
    navlinks[i].classList.remove("active");
  }
*//*
  const currentPage = location.pathname;
  if (currentPage === '/MyWeb/index.html') {
    // The user is on the home page
    const navlink = document.querySelector('a[href="index.html"]');
    navlink.classList.add('active');
  } else if (currentPage === '/MyWeb/aboutme.html') {
    // The user is on the about page
    const navlink = document.querySelector('a[href="aboutme.html"]');
    navlink.classList.add('active');
  } else if (currentPage === '/MyWeb/projects.html') {
    // The user is on the contact page
    const navlink = document.querySelector('a[href="projects.html"]');
    navlink.classList.add('active');
    } else if (currentPage === '/MyWeb/skills.html') {
    // The user is on the contact page
    const navlink = document.querySelector('a[href="skills.html"]');
    navlink.classList.add('active');
  }
*/

const currentPage = location.pathname;

if (currentPage.startsWith('/MyWeb/')) {
  console.log(currentPage.substring(7)); // Log the name of the HTML file
  const navlink = document.querySelector(`a[href="${currentPage.substring(7)}"]`);

  switch (currentPage) {
    case '/MyWeb/index.html':
    case '/MyWeb/aboutme.html':
    case '/MyWeb/projects.html':
    case '/MyWeb/skills.html':
      navlink.classList.add('active');
      break;
    default:
      break;
  }
}


/*
  function setActive(event) {
      var navlinks = document.querySelectorAll(".navbar-nav a");
      console.log("Me has clickado");
      for (var i = 0; i < navlinks.length; i++) {
        navlinks[i].classList.remove("active");
      }
      event.target.classList.add("active");
    }
*/
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