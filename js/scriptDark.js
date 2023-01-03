let btn = document.getElementById("myBtn");
let btn2 = document.getElementById("btn2");
/*
if(localStorage.getItem('dark')) {
        changeIcon(anchor);
    }
*/


function changeIcon(anchor) {
  // Toggle the dark mode preference in local storage
  // Toggle the dark mode styles
  /*
    if (btn2.classList.contains('fa-moon')) {
      console.log('Tiene moon');
      localStorage.setItem('dark', false);
    } else {
      console.log('No tiene moon');
      localStorage.setItem('dark',true);
    }*/
  var icon = anchor.querySelector("i");
  var navTop = document.getElementById("navTop");
  var dropdownMenu = document.getElementById("dropdown-menu");
  navTop.classList.toggle("dark-mode-nav");
  const dropdowns = document.querySelectorAll('.dropdown-menu');
  var element = document.body;
  element.classList.toggle("dark-mode-body");
  //Recogemos todos las card y les cambiamos el color dependiendo de si esta en modo oscuro o no
  Array.from(document.getElementsByClassName("card")).forEach(element => {
    element.classList.toggle('dark-mode-card')
  });
  Array.from(document.getElementsByClassName("btn-warning")).forEach(element => {
    element.classList.toggle('text-white')
  });
  var element = document.getElementById("btn-back-to-top");
  element.classList.toggle('text-white')

  var element2 = document.getElementById("my-header");
  element2.classList.toggle("dark-mode-header");
  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');

  //Modo oscuro navbar arriba
  navTop.classList.toggle("navbar-dark");
  navTop.classList.toggle("navbar-light");
  for (const dropdown of dropdowns) {
    dropdown.classList.toggle('dropdown-menu-dark');
  }
}
