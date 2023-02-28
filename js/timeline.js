//Primera timeline
const container1 = document.querySelector(".container1-timeline");
const words1 = ["cyber", "server", "front", "back", "linux", "os", "auto"];
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
  "tennis",
  "padel",
  "gym",
  "bike",
  "run",
  "electro",
  "tv",
  "movie",
];
const icons2 = [
  ["bx", "bx-tennis-ball"],
  ["fa", "fa-table-tennis-paddle-ball"],
  ["fas", "fa-dumbbell"],
  ["fas", "fa-bicycle"],
  ["fas", "fa-running"],
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
    startLine.classList.add("line", "primary");
    container.prepend(startLine);

    // Create dots for each word
    words.forEach((word, index) => {
      const dot = createDot(word, index);
      container.appendChild(dot);
      index < words.length - 1 ? container.appendChild(createLine()) : null;
    });

    // Create end line
    const endLine = document.createElement("span");
    endLine.classList.add("line", "primary");
    container.appendChild(endLine);
  }
  // Create dot
  function createDot(word, index) {
    const dot = document.createElement("div");
    dot.classList.add("dot", "primary");

    const textdot = document.createElement("p");
    textdot.classList.add("textdot", "hide"); // add the hide class here
    textdot.setAttribute("data-translate", word);

    // Add Font Awesome icon to dot
    const iconClasses = icons[index];
    icon = iconClasses
      ? ((icon = document.createElement("i")),
        icon.classList.add(...iconClasses, "icon"),
        icon)
      : null;

    dot.appendChild(icon);
    dot.appendChild(textdot);
    return dot;
  }

  // Create line
  function createLine() {
    const line = document.createElement("span");
    line.classList.add("line", "primary");
    return line;
  }
  // Add click event to dot
  function addClickEventToDot(dot) {
    dot.addEventListener("click", function () {
      // Check if this dot is the last clicked dot and return if it is
      if (lastClicked === dot) {
        return;
      }
      // If there was a last clicked dot, toggle its "bigger" class and hide its textdot line if it has one
      if (lastClicked) {
        if (
          dot.parentNode.classList.contains("container1-timeline") &&
          dot.classList.contains("bigger")
        ) {
          lastClicked.classList.toggle("bigger");
        } else if (!dot.parentNode.classList.contains("container1-timeline")) {
          lastClicked.classList.toggle("bigger");
        }
      }
      //Deal with the visibility of the textdot
      if (lastClicked && lastClicked.querySelector(".textdot")) {
        lastClicked.querySelector(".textdot").classList.add("hide");
      }

      // Add the "bigger" class to this dot, and show or hide its textdot line based on whether it has the "bigger" class
      dot.classList.add("bigger");
      dot
        .querySelector(".textdot")
        .classList.toggle("hide", !dot.classList.contains("bigger"));
      //Set the background color of all previous siblings of this dot (dots and lines) to black
      let prev = dot.previousElementSibling;
      while (prev) {
        if (prev.classList.contains("dot") || prev.classList.contains("line")) {
          prev.classList.add("primary");
          prev.classList.remove("primary-dark");
        }
        prev = prev.previousElementSibling;
      }
      // Set the background color of all next siblings of this dot (dots and lines) to lightgray
      let next = dot.nextElementSibling;
      while (next) {
        if (next.classList.contains("dot") || next.classList.contains("line")) {
          next.classList.add("primary-dark");
          next.classList.remove("primary");
        }
        next = next.nextElementSibling;
      }
      dot.classList.add("primary");
      dot.classList.remove("primary-dark");
      // Set the last clicked dot to this dot
      lastClicked = dot;
    });
  }
}
