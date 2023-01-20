//Primera timeline
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
//Segunda timeline
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
createTimeline(words1, container1, icons1);
createTimeline(words2, container2, icons2);

function createTimeline(words, container, icons) {
  createDotsAndLines(words, container);
  // Add click event listener to dots
  let lastClicked;
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    addClickEventToDot(dot);
  });

  function createDotsAndLines(words, container) {
    // Create start line
    const startLine = document.createElement("span");
    startLine.classList.add("line");
    container.prepend(startLine);

    // Create dots for each word
    words.forEach((word, index) => {
      const dot = createDot(word, index);
      container.appendChild(dot);
      index < words.length - 1 ? container.appendChild(createLine()) : null;
    });

    // Create end line
    const endLine = document.createElement("span");
    endLine.classList.add("line");
    container.appendChild(endLine);
  }
  // Create dot
  function createDot(word, index) {
    const dot = document.createElement("div");
    dot.classList.add("dot");

    const diagonal = document.createElement("p");
    diagonal.classList.add("diagonal");
    diagonal.innerText = word;

    // Add Font Awesome icon to dot
    const iconClasses = icons[index];
    icon = iconClasses
      ? ((icon = document.createElement("i")),
        icon.classList.add(...iconClasses, "icon", "hide"),
        icon)
      : null;

    dot.appendChild(icon);
    dot.appendChild(diagonal);
    return dot;
  }
  // Create line
  function createLine() {
    const line = document.createElement("span");
    line.classList.add("line");
    return line;
  }
  // Add click event to dot
  function addClickEventToDot(dot) {
    dot.addEventListener("click", function () {
      if (lastClicked === dot) {
        return;
      }
      if (lastClicked) {
        lastClicked.classList.toggle("bigger");
        if (lastClicked.querySelector(".icon")) {
          lastClicked.querySelector(".icon").classList.add("hide");
        }
      }
      dot.classList.add("bigger");
      if (dot.classList.contains("bigger")) {
        dot.querySelector(".icon").classList.remove("hide");
      } else {
        dot.querySelector(".icon").classList.add("hide");
      }
      dot.style.backgroundColor = "black";
      dot.querySelector(".diagonal").classList.add("bold");
      if (lastClicked) {
        lastClicked.querySelector(".diagonal").classList.remove("bold");
      }
      lastClicked = dot;

      let prev = dot.previousElementSibling;
      while (prev) {
        if (prev.classList.contains("dot") || prev.classList.contains("line")) {
          prev.style.backgroundColor = "black";
        }
        prev = prev.previousElementSibling;
      }
      let next = dot.nextElementSibling;
      while (next) {
        if (next.classList.contains("dot") || next.classList.contains("line")) {
          next.style.backgroundColor = "lightgray";
        }
        next = next.nextElementSibling;
      }
    });
  }
}
