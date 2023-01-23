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
  navigator.clipboard
    .writeText(text)
    .then(() => {
      console.log("Text copied to clipboard");
    })
    .catch((err) => {
      console.error("Failed to copy text: ", err);
    });
}
const htmlHeight = document.body.scrollHeight;
const displayHeight = window.innerHeight;
if (htmlHeight < displayHeight) {
  document.querySelector(".contenido").classList.remove("hidden");
  //elementos.forEach((el) => el.classList.remove("hidden"));
}
