// get a reference to the navbar
const navbar = document.querySelector('.navbar');

// listen for the scroll event
window.addEventListener('scroll', () => {
  // get the current scroll position
  const scrollPos = window.scrollY;

  // if the scroll position is greater than 0 (i.e. the user has scrolled down)
  if (scrollPos > 0) {
    // change the navbar's width to 50% and add rounded corners
    navbar.style.width = '50%';
    navbar.style.margin = '8px';
    navbar.classList.add("rounded-pill");
  } else {
    // otherwise, reset the navbar to its original style
    navbar.style.width = '100%';
    navbar.style.margin = '0px';
    navbar.classList.remove("rounded-pill");
  }
});