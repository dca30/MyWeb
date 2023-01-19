const container1 = document.querySelector(".container1-timeline");
const words1 = [
  "Cyber Seguridad",
  "Servidores",
  "Frontend",
  "Backend",
  "Linux",
  "OS",
  "Automatizacion",
];
const icons1 = [
  ["fas", "fa-shield-alt"],
  ["fas", "fa-server"],
  ["fas", "fa-code"],
  ["fas", "fa-database"],
  ["fa-brands", "fa-linux"],
  ["fas", "fa-laptop-code"],
  ["fas", "fa-robot"],
];

const container2 = document.querySelector(".container2-timeline");
const words2 = [
  "Tenis",
  "padel",
  "gym",
  "bici",
  "correr",
  "cerveza",
  "fiesta",
  "bar",
  "electronica",
  "series",
  "peliculas",
];
const icons2 = [
  ["fas", "fa-tennis-ball"],
  ["fas", "fa-paddle-ball"],
  ["fas", "fa-dumbbell"],
  ["fas", "fa-bicycle"],
  ["fas", "fa-running"],
  ["fas", "fa-beer"],
  ["fas", "fa-glass-cheers"],
  ["fas", "fa-beer"],
  ["fas", "fa-plug"],
  ["fas", "fa-tv"],
  ["fas", "fa-film"],
];
createTimeline(words2, container2, icons2);

createTimeline(words1, container1, icons1);

function createTimeline(words, container, icons) {
  createCirclesAndLines(words, container);
  // Add click event listener to circles
  let lastClicked;
  const circles = document.querySelectorAll(".circle");
  circles.forEach((circle) => {
    addClickEventToCircle(circle);
  });

  function createCirclesAndLines(words, container) {
    // Create start line
    const startLine = document.createElement("span");
    startLine.classList.add("line");
    container.prepend(startLine);

    // Create circles for each word
    words.forEach((word, index) => {
      const circle = createCircle(word, index);
      container.appendChild(circle);
      index < words.length - 1 ? container.appendChild(createLine()) : null;
    });

    // Create end line
    const endLine = document.createElement("span");
    endLine.classList.add("line");
    container.appendChild(endLine);
  }
  // Create circle
  function createCircle(word, index) {
    const circle = document.createElement("div");
    circle.classList.add("circle");

    const diagonal = document.createElement("p");
    diagonal.classList.add("diagonal");
    diagonal.innerText = word;

    // Add Font Awesome icon to circle
    const iconClasses = icons[index];
    icon = iconClasses
      ? ((icon = document.createElement("i")),
        icon.classList.add(...iconClasses, "icon", "hide"),
        icon)
      : null;

    circle.appendChild(icon);
    circle.appendChild(diagonal);
    return circle;
  }
  // Create line
  function createLine() {
    const line = document.createElement("span");
    line.classList.add("line");
    return line;
  }
  // Add click event to circle
  function addClickEventToCircle(circle) {
    circle.addEventListener("click", function () {
      lastClicked
        ? (lastClicked.classList.toggle("bigger"),
          lastClicked.classList.remove("bold"),
          lastClicked.querySelector(".icon")
            ? lastClicked.querySelector(".icon").classList.add("hide")
            : null)
        : null;
      circle.classList.add("bigger");
      circle.classList.contains("bigger")
        ? circle.querySelector(".icon").classList.remove("hide")
        : circle.querySelector(".icon").classList.add("hide");
      circle.style.backgroundColor = "black";
      circle.querySelector(".diagonal").classList.add("bold");
      lastClicked
        ? lastClicked.querySelector(".diagonal").classList.remove("bold")
        : null;
      lastClicked = circle;

      let prev = circle.previousElementSibling;
      while (prev) {
        prev.classList.contains("circle") || prev.classList.contains("line")
          ? (prev.style.backgroundColor = "black")
          : null;
        prev = prev.previousElementSibling;
      }
      let next = circle.nextElementSibling;
      while (next) {
        next.classList.contains("circle") || next.classList.contains("line")
          ? (next.style.backgroundColor = "lightgray")
          : null;
        next = next.nextElementSibling;
      }
    });
  }
}
