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
function copyToClipboard(event, text) {
  event.preventDefault();
  navigator.clipboard.writeText(text);
}

//Borrar marca de agua 000webhost
/*
console.log("intento externo");
setInterval(function () {
  document.querySelector(
    '[title="Hosted on free web hosting 000webhost.com. Host your own website for FREE."]'
  ).classList.toggle(oculto);
  console.log("intentamos ocultar");
  document.querySelector(
    'img[src="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"]'
  ).style.display = "none";
}, 5000);
*/