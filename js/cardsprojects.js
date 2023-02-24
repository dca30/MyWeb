function generateCards() {
  let cards = [
    {
      image: "raspberry.webp",
      //title: "Raspberry Pi Setup",
      title: "rpi_t",
      //smallText:        "Raspberry Pi 4b Raspbian installation with 3D printed case and display of stats.",
      smallText: "rpi_st",
      //bigText:        "Raspberry Pi Setup: This project involved installing the Raspbian operating system on a Raspberry Pi 4b, creating a custom 3D printed case, and implementing a display that shows statistics about the Raspberry Pi's usage. The process included downloading the Raspbian image, flashing it to a microSD card, configuring the Raspberry Pi's settings, and designing and printing the case using a 3D modeling software. The display was then connected to the Raspberry Pi and programmed to display real-time statistics such as CPU usage, memory usage, and temperature.",
      bigText: "rpi_bt",
    },
    {
      image: "twitter.webp",
      //title: "Matrix Twitter Bot",
      title: "twitter_t",
      //smallText:        "Twitter bot in Python that publishes Matrix movie frames every hour.",
      smallText: "twitter_st",
      //bigText:        "Matrix Twitter Bot: This project was a Python script that automatically tweets a frame from the movie Matrix every hour. The process included creating a Twitter developer account and obtaining API credentials, using the Python library Tweepy to connect to the Twitter API, and designing the script to randomly select a frame from the movie and tweet it along with a caption. Additionally, the script was set to run on a schedule using a cron job.",
      bigText: "twitter_bt",
    },
    {
      image: "timeline.webp",
      //title: "Movie Color Visualization",
      title: "color_t",
      //smallText:        "Python script that extracts average color of each second of a movie and creates image with color bars.",
      smallText: "color_st",
      //bigText:        "Movie Color Visualization: This project involved creating a Python script that extracts the average color of each second of a movie and generates an image with bars representing each color. The process included using the Python library OpenCV to read the movie frame by frame, analyzing each frame to extract the average color, and using the Python library Pillow to create an image with bars for each color. The final result was a colorful visualization of the movie's color palette.",
      bigText: "color_bt",
    },
    {
      image: "internet.webp",
      //title: "Website Design and Hosting",
      title: "web_t",
      //smallText:        "Website design and development, including domain purchase, free hosting and Cloudflare HTTPS configuration.",
      smallText: "web_st",
      //bigText:        "Website Design and Hosting: This project involved designing and developing a website to showcase my resume, IT skills, and education. The process included purchasing a domain name, finding a free hosting provider, and configuring Cloudflare to add HTTPS to the website. Additionally, I used HTML, CSS, JavaScript, and Bootstrap to design the website layout and add interactive elements such as buttons and hover effects. Finally, I configured the website to be accessible to the public.",
      bigText: "web_bt",
    },
    {
      image: "publictransport.webp",
      //title: "Transport times",
      title: "transport_t",
      //smallText: "App public transport wait times",
      smallText: "transport_st",
      //bigText:        "App for Public Transport Wait Times: This project involved connecting to a city API to retrieve real-time information on the arrival times of various public transportation options. The application was designed to process and display this data in an easily accessible format for users. Technical steps included API integration, data processing and display logic implementation, and user interface design using HTML, CSS, JavaScript, and Bootstrap. The end result is a functional tool for commuters to stay informed on public transport wait times.",
      bigText: "transport_bt",
    },
    {
      image: "plans.webp",
      //title: "Planning App",
      title: "plan_t",
      //smallText:        "Mobile app for finding out the best weekend to do an activity some friends",
      smallText: "plan_st",
      //bigText:"Mobile App for Group Activity Scheduling: This project involved creating a mobile application that helps users plan group activities. The app integrates with users' calendars to determine the best times for a group event based on everyone's availability. The process involved developing an algorithm to analyze users' schedules, as well as designing a user-friendly interface for adding and viewing schedules. The end result is a helpful tool for friends and groups to coordinate their schedules and ensure the maximum number of attendees for any planned activity.",
      bigText: "plan_bt",
    },
  ];

  let html = `
    <div class="col-sm-5">
      <div class="card card-skill">
        <div class="card-top">
          <img src="images/projectcards/__IMAGE__" class="image" />
        </div>
        <div class="card-middle">
          <h2 class="mt-3" data-translate="__TITLE__"></h2>
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
           <div class="glitch btn-small btn-dark btn-glitch expand-button rounded-pill">Bitch'n</div>
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
    <div class="card card-skill expanded hiddenProjects" id="expanded">
        <div class="row h-100 w-100" id="myrow">
            <div class="col-sm-5 h-100">
                <div class="card-top d-flex <!--flex-column justify-content-start align-items-center-->">
                <div class="section">
                  <div class="image-container">
                    <div class="image-container-inner"></div>
                    <img id="image" src="" class="image imgexpanded ">
                  </div>
                </div>
              </div>
            </div>
            <div class="col-sm-7">
                <div class="card-middle px-5 d-flex flex-column justify-content-center align-items-center">
                    <div class="row">
                        <h2 class="data text-uppercase" id="movingletters"></h2>
                    </div>
                    <div class="row">
                        <p class="px-4 small-size minimized hiddenProjects"></p>
                        <p class="px-4 big-size"></p>
                    </div>
                    <div class="row">
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
                                <div class="glitch btn-small btn-dark btn-glitch expand-button" id="btnglitcheado">Bitch'n</div>
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
function changeExpanded(card) {
  const expanded = document.getElementById("expanded");
  const imageSrc = card.querySelector(".image").src;
  /*.replace(/\.webp$/, "E.webp");*/
  const h2 = card.querySelector("h2").textContent;
  const smallSize = card.querySelector(".small-size").textContent;
  const bigSize = card.querySelector(".big-size").textContent;

  expanded.querySelector(".image").src = imageSrc;
  expanded.querySelector("h2").innerHTML = h2;
  //expanded.querySelector("h2").innerHTML = h2;
  expanded.querySelector(".small-size").innerHTML = smallSize;
  expanded.querySelector(".big-size").innerHTML = bigSize;
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
  //tl.restart();
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

generateCards();
const expanded = document.getElementById("expanded"); //Expanded Card
const buttons = document.querySelectorAll(".expand-button"); //Botones expandir

const header = document.getElementById("my-header");
const overlay = document.getElementById("overlay");
document.addEventListener("DOMContentLoaded", function () {
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const card = button.closest(".card");
      expanded.classList.toggle("hiddenProjects");
      const isExpanded = card.classList.contains("expanded");
      overlay.style.display = isExpanded ? "none" : "block";
      header.style.display = isExpanded ? "block" : "none";
      const btnVuelta = document.getElementById("btnglitcheado");
      console.log(btnVuelta);
      const h2 = card.querySelector("h2");
      card.querySelector("h2").classList.toggle("text-expanded");
      changeExpanded(card);
      movingLetters();
      fancyImage();
    });
  });
});
