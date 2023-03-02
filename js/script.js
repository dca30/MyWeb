generateNavbar();
generateSocialMedia();
activeNav();
function generateNavbar() {
  var header = document.getElementById("my-header");
  header.innerHTML = `
    <nav id="navTop" class="navbar navbar-expand-lg mx-auto">
      <div class="container-fluid">
        <button aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
          class="navbar-toggler" data-bs-target="#navbarSupportedContent" data-bs-toggle="collapse" type="button">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav ms-3 me-auto mb-2 mb-lg-0" id="enlaces">
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="index.html" data-translate="home"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="projects.html" data-translate="projects"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="skills.html" data-translate="skills"></a>
            </li>
            <li class="nav-item">
              <a class="nav-link text-uppercase" href="aboutme.html" data-translate="about"></a>
            </li>
          </ul>
          <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item <!--dropdown--> dropdown-menu-end">
              <a id="iconUser" aria-expanded="false" class="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#"
                role="button">
                <i class=" d-lg-inline fas fa-globe"></i>
              </a>
              <ul aria-labelledby="navbarDropdown2" class="dropdown-menu dropdown-menu-end">
                <li><a class="dropdown-item seleccionado" id="es" href="">Español</a></li>
                <li><a class="dropdown-item" id="en" href="">English</a></li>
              </ul>
            </li>
            <li class="my-1">
              <input type="checkbox" id="toggle" />
              <label class="toggle" for="toggle">
                <i class="bx bxs-sun"></i>
                <i class="bx bx-moon"></i>
                <span class="ball"></span>
              </label>
            </li>
          </ul>
        </div>
      </div>
      <div class="progress mx-auto">
        <div class="progress-bar" id="myBar"></div>
      </div>
    </nav>`;
}
function generateSocialMedia() {
  var socialmedia = document.getElementById("socialmedia");
  socialmedia.innerHTML = `<div class="detail">
            <ul class="sci">
                <li>
                    <a href="https://github.com/dca30" target="blank">
                        <i class="fab fa-github"></i></a>
                </li>
                <li>
                    <a href="https://www.instagram.com/calvoalegrediego/" target="blank">
                    <i class="fab fa-instagram"></i></a>
                </li>
                <li>
                    <a href="https://www.linkedin.com/in/diego-calvo-b495a219a/" target="blank">
                    <i class="fab fa-linkedin-in"></i></a>
                </li>      
                <li>
                    <button class="learn-more" onclick="copyToClipboard(event,'calvoalegred@gmail.com')">
                        <span class="circle" aria-hidden="true">
                            <span class="arrow"><i class="fa-solid fa-angle-right"></i></span>                            
                        </span>
                        <span class="button-text">COPY MAIL</span>
                    </button>
                </li>
            </ul>
        </div>`;
}
function activeNav() {
  const currentPage = "/MyWeb" + location.pathname;
  if (currentPage.startsWith("/MyWeb/")) {
    const navlink = document.querySelector(
      `a[href="${currentPage.substring(7)}"]`
    );
    switch (currentPage) {
      case "/MyWeb/index.html":
      case "/MyWeb/aboutme.html":
      case "/MyWeb/projects.html":
      case "/MyWeb/skills.html":
        navlink.classList.add("active");
        break;
      default:
        break;
    }
  }
}
function copyToClipboard(event, text) {
  event.preventDefault();
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
function checkHeight() {
  const htmlHeight = document.body.scrollHeight;
  const displayHeight = window.innerHeight;
  const contenido = document.querySelector(".contenido");
  if (htmlHeight < displayHeight && contenido.classList.contains("hidden")) {
    contenido.classList.toggle("hidden");
  }
}

//Ocultar media y boton en y = 0
const elements = document.querySelectorAll(".contenido, #btn-back-to-top");
window.addEventListener("scroll", function () {
  const action = window.pageYOffset > 100 ? "remove" : "add";
  elements.forEach((el) => el.classList[action]("hidden"));
});

// Call the checkHeight function after modifying the contents of the HTML document
document.addEventListener("DOMContentModified", checkHeight);
checkHeight();
