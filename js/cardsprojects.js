function generateCards() {
  let cards = [
    {
      image: "raspberry.png",
      title: "Raspberry Pi Setup",
      smallText:
        "Raspberry Pi 4b Raspbian installation with 3D printed case and display of stats.",
      bigText:
        "Raspberry Pi Setup: This project involved installing the Raspbian operating system on a Raspberry Pi 4b, creating a custom 3D printed case, and implementing a display that shows statistics about the Raspberry Pi's usage. The process included downloading the Raspbian image, flashing it to a microSD card, configuring the Raspberry Pi's settings, and designing and printing the case using a 3D modeling software. The display was then connected to the Raspberry Pi and programmed to display real-time statistics such as CPU usage, memory usage, and temperature.",
    },
    {
      image: "twitter.png",
      title: "Matrix Twitter Bot",
      smallText:
        "Twitter bot in Python that publishes Matrix movie frames every hour.",
      bigText:
        "Matrix Twitter Bot: This project was a Python script that automatically tweets a frame from the movie Matrix every hour. The process included creating a Twitter developer account and obtaining API credentials, using the Python library Tweepy to connect to the Twitter API, and designing the script to randomly select a frame from the movie and tweet it along with a caption. Additionally, the script was set to run on a schedule using a cron job.",
    },
    {
      image: "timeline.png",
      title: "Movie Color Visualization",
      smallText:
        "Python script that extracts average color of each second of a movie and creates image with color bars.",
      bigText:
        "Movie Color Visualization: This project involved creating a Python script that extracts the average color of each second of a movie and generates an image with bars representing each color. The process included using the Python library OpenCV to read the movie frame by frame, analyzing each frame to extract the average color, and using the Python library Pillow to create an image with bars for each color. The final result was a colorful visualization of the movie's color palette.",
    },
    {
      image: "internet.png",
      title: "Website Design and Hosting",
      smallText:
        "Website design and development, including domain purchase, free hosting and Cloudflare HTTPS configuration.",
      bigText:
        "Website Design and Hosting: This project involved designing and developing a website to showcase my resume, IT skills, and education. The process included purchasing a domain name, finding a free hosting provider, and configuring Cloudflare to add HTTPS to the website. Additionally, I used HTML, CSS, JavaScript, and Bootstrap to design the website layout and add interactive elements such as buttons and hover effects. Finally, I configured the website to be accessible to the public.",
    },
    {
      image: "publictransport.png",
      title: "Transport times",
      smallText: "App public transport wait times",
      bigText:
        "App for Public Transport Wait Times: This project involved connecting to a city API to retrieve real-time information on the arrival times of various public transportation options. The application was designed to process and display this data in an easily accessible format for users. Technical steps included API integration, data processing and display logic implementation, and user interface design using HTML, CSS, JavaScript, and Bootstrap. The end result is a functional tool for commuters to stay informed on public transport wait times.",
    },
    {
      image: "plans.png",
      title: "Planning App",
      smallText:
        "Mobile app for finding out the best weekend to do an activity some friends",
      bigText:
        "Mobile App for Group Activity Scheduling: This project involved creating a mobile application that helps users plan group activities. The app integrates with users' calendars to determine the best times for a group event based on everyone's availability. The process involved developing an algorithm to analyze users' schedules, as well as designing a user-friendly interface for adding and viewing schedules. The end result is a helpful tool for friends and groups to coordinate their schedules and ensure the maximum number of attendees for any planned activity.",
    },
    /*{
      image: "twitter.png",
      title: "Test",
      smallText: "Still some text",
      bigText: "Even still more and more text",
    },*/
  ];

  let html = `
<div class="col-sm-5">
  <div class="card card-skill">
    <div class="card-top">
      <img src="images/projectcards/__IMAGE__" class="image" />
    </div>
    <div class="card-middle">
      <h2 class="mt-3">__TITLE__</h2>
      <p class="px-4 small-size">__SMALL_TEXT__</p>
      <p class="px-4 big-size hiddenProjects">__BIG_TEXT__</p>
    </div>
    <div class="card-bottom">
      <button type="button" class="btn btn-warning mb-4 expand-button">
        Show more
      </button>
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
      <div class="card card-skill expanded" style="z-index: 1000;" id="test">
        <div class="card-top">
          <img src="images/projectcards/raspberry.png" class="image small">
        </div>
        <div class="card-middle">
          <h2 class="mt-3">Raspberry Pi Setup</h2>
          <p class="px-4 small-size minimized hiddenProjects">Raspberry Pi 4b Raspbian installation with 3D printed case and display of stats.</p>
          <p class="px-4 big-size">Raspberry Pi Setup: This project involved installing the Raspbian operating system on a Raspberry Pi 4b, creating a custom 3D printed case, and implementing a display that shows statistics about the Raspberry Pi's usage. The process included downloading the Raspbian image, flashing it to a microSD card, configuring the Raspberry Pi's settings, and designing and printing the case using a 3D modeling software. The display was then connected to the Raspberry Pi and programmed to display real-time statistics such as CPU usage, memory usage, and temperature.</p>
        </div>
        <div class="card-bottom">
          <button type="button" class="btn btn-warning mb-4 expand-button">
            Show more
          </button>
        </div>
      </div>
    </div>`;
  output = output + expandedElement;
  document.getElementById("cartas").innerHTML = output;
  /*let lastCard = document.querySelectorAll(".col-sm-5")[cards.length - 1];
  lastCard.id = "test";*/
}

generateCards();
const test = document.getElementById("test");
test.classList.toggle("hiddenProjects");
//test.style.display = "none";
const buttons = document.querySelectorAll(".expand-button");
const header = document.getElementById("my-header");
const overlay = document.getElementById("overlay");
const bigCard = document.getElementById("expanded");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const card = button.closest(".card");
    test.classList.toggle("hiddenProjects");

    /*const image = card.querySelector(".image");
    image.classList.toggle("small");
    card.classList.toggle("expanded");
    const cardParagraph = card.querySelector("p");
    cardParagraph.classList.toggle("minimized");
    header.style.display = card.classList.contains("expanded")
      ? "none"
      : "block";
    overlay.style.display = card.classList.contains("expanded")
      ? "block"
      : "none";
    card.style.zIndex = card.classList.contains("expanded") ? 1000 : "";
    const smallSize = card.querySelector(".small-size");
    const bigSize = card.querySelector(".big-size");
    smallSize.classList.toggle("hiddenProjects");
    bigSize.classList.toggle("hiddenProjects");*/

    /*let small, big;
    small = smallSize.textContent;
    big = bigSize.textContent;

    console.log(small);
    console.log(big);*/
  });
});
