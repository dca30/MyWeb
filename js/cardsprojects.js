function generateCards() {
  let cards = [
    {
      image: "raspberry.webp",
      title: "rpi_t",
      smallText: "rpi_st",
      bigText: "rpi_bt",
    },
    {
      image: "twitter.webp",
      title: "twitter_t",
      smallText: "twitter_st",
      bigText: "twitter_bt",
    },
    {
      image: "timeline.webp",
      title: "color_t",
      smallText: "color_st",
      bigText: "color_bt",
    },
    {
      image: "internet.webp",
      title: "web_t",
      smallText: "web_st",
      bigText: "web_bt",
    },
    {
      image: "publictransport.webp",
      title: "transport_t",
      smallText: "transport_st",
      bigText: "transport_bt",
    },
    {
      image: "plans.webp",
      title: "plan_t",
      smallText: "plan_st",
      bigText: "plan_bt",
    },
  ];

  let html = `
    <div class="col-sm-5">
      <div class="card">
        <div class="card-top">
          <img src="images/projectsMiniatures/__IMAGE__" class="image" />
        </div>
        <div class="card-middle">
          <h2 class="mt-3 px-4" data-translate="__TITLE__"></h2>
          <p class="px-4 small-size" data-translate="__SMALL_TEXT__">__SMALL_TEXT__</p>
          <p class="px-4 big-size hiddenProjects" data-translate="__BIG_TEXT__"></p>
        </div>
        <div class="card-bottom mb-4">      
          <svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1"
                xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" class="svg-sprite">
                <defs>
                  <filter id="filter">
                    <feTurbulence type="fractalNoise" baseFrequency="0.000001 0.000001" numOctaves="1" result="warp" seed="1">
                    </feTurbulence>
                    <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30" in="SourceGraphic" in2="warp">
                    </feDisplacementMap>
                  </filter>
                </defs>
          </svg>
           <div class="glitch btn-glitch expand-button" data-translate="showmore"></div>
        </div>
      </div>
    </div>`;

  let output = "";
  cards.forEach(function (card, index) {
    let cardHtml = html
      .replace("__IMAGE__", card.image)
      .replace("__TITLE__", card.title)
      .replace("__SMALL_TEXT__", card.smallText)
      .replace("__BIG_TEXT__", card.bigText);
    output += cardHtml;
  });
  let expandedElement = `
  <div class="col-sm-5">
    <div class="card expanded hiddenProjects" id="expanded">
        <div class="row h-100 w-100" id="myrow">
            <div class="col-sm-5 h-100">
                <div class="card-top d-flex">
                <div class="section">                 
                </div>
              </div>
            </div>
            <div class="col-sm-7">
                <div class="card-middle px-5 d-flex flex-column justify-content-center align-items-center">
                    <div class="row row-top position-absolute top-0">
                        <h2 class="data text-uppercase" id="movingletters"></h2>
                    </div>
                    <div class="row row-middle">
                        <p class="px-4 small-size hiddenProjects"></p>
                        <p class="px-4 big-size"></p>
                    </div>
                    <div class="row row-bottom position-absolute bottom-0 ">
                        <div class="col-sm-12 text-center">
                            <div class="card-bottom">
                                <svg style="position: absolute; width: 0; height: 0;" width="0" height="0" version="1.1"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                    class="svg-sprite">
                                    <defs>
                                        <filter id="filter">
                                            <feTurbulence type="fractalNoise" baseFrequency="0.000001 0.000001"
                                                numOctaves="1" result="warp" seed="1">
                                            </feTurbulence>
                                            <feDisplacementMap xChannelSelector="R" yChannelSelector="G" scale="30"
                                                in="SourceGraphic" in2="warp">
                                            </feDisplacementMap>
                                        </filter>
                                    </defs>
                                </svg>
                                <div class="glitch btn-glitch expand-button" data-translate="showless" id="btnglitcheado"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
  output += expandedElement;
  document.getElementById("cartas").innerHTML = output;
}
function expandCard(card) {
  document.querySelector(".section").innerHTML = `<div class="image-container">
              <div class="image-container-inner"></div>
              <img id="image" src="" class="image imgexpanded ">
            </div>`;
  const expanded = document.getElementById("expanded");
  let imageSrc = card.querySelector(".image").src;
  imageSrc = imageSrc.replace("projectsMiniatures", "projectsImages");
  imageSrc = imageSrc.replace("webp", "png");

  const h2 = card.querySelector("h2").textContent;
  const smallSize = card.querySelector(".small-size").textContent;
  const bigSize = card.querySelector(".big-size").textContent;
  expanded.querySelector(".image").src = imageSrc;
  expanded.querySelector("h2").innerHTML = h2;
  expanded.querySelector(".small-size").innerHTML = smallSize;
  expanded.querySelector(".big-size").innerHTML = bigSize;
  expanded.classList.toggle("hiddenProjects");

  //Eliminamos el header y oscurecemos el resto de cartas
  const isExpanded = card.classList.contains("expanded");
  overlay.style.display = isExpanded ? "none" : "block";
  header.style.display = isExpanded ? "block" : "none";
  movingLetters();
  fancyImage();
  smoothAppear();
}
function movingLetters() {
  const texto = baffle(".data", {
    characters: "`¡™£¢∞§¶•ªº–≠åß∂ƒ©˙∆˚¬…æ≈ç√∫˜µ≤≥÷/?░▒▓<>/",
    speed: 80,
    text: true,
    whitespace: false,
  });

  texto.start();

  const revealDuration = texto.text.length * 250;
  const revealInterval = 250;

  for (let i = 0; i < texto.text.length; i++) {
    setTimeout(function () {
      texto.reveal(i);
    }, i * revealInterval);
  }

  setTimeout(function () {
    texto.reveal(2000);
  }, revealDuration);
}
function fancyImage() {
  const tl = new TimelineMax();
  const imgContainer = document.getElementsByClassName("image-container");
  const imgInnerContainer = document.getElementsByClassName(
    "image-container-inner"
  );
  const img = document.getElementById("image");
  tl.from(imgContainer, 1.5, {
    height: 0,
    opacity: 0,
    ease: Expo.easeInOut,
  })
    .from(
      img,
      1.35,
      {
        opacity: 0,
        scale: 1.8,
        ease: Expo.easeOut,
      },
      1.45
    )
    .to(
      imgInnerContainer,
      1.25,
      {
        height: 0,
        ease: Expo.easeInOut,
      },
      1.25
    );
}
function smoothAppear() {
  $(".big-size").css("display", "none");
  $(".big-size").fadeIn(1000);
}
function expandFromIndex() {
  const urlParams = new URLSearchParams(window.location.search);
  const expandParam = urlParams.get("expand");

  const images = document.querySelectorAll("img");
  let myCard;

  images.forEach((image) => {
    if (
      image.getAttribute("src") ===
      "images/projectsMiniatures/" + expandParam + ".webp"
    ) {
      myCard = image.parentNode.parentNode; // select the parent element of the image
    }
  });
  if (myCard) {
    expandCard(myCard);
  }
}

generateCards();
const expanded = document.getElementById("expanded"); //Expanded Card
const buttons = document.querySelectorAll(".expand-button"); //Botones expandir
//const big = document.querySelector(".big-size");
const header = document.getElementById("my-header");
const overlay = document.getElementById("overlay");

document.addEventListener("DOMContentLoaded", function () {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      expandCard(card);
    });
  });
});
setTimeout(expandFromIndex, 500);
