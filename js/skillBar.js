createSkillBars();
function createSkillBars() {
  let cardsSkills = [
    {
      title: "Linux",
      fa: "fa-brands fa-linux",
    },
    {
      title: "Docker",
      fa: "fa-brands fa-docker",
    },
    {
      title: "Java",
      fa: "fa-brands fa-java",
    },
    {
      title: "Python",
      fa: "fa-brands fa-python",
    },
    {
      title: "HTML",
      fa: "fa-brands fa-html5",
    },
    {
      title: "Javascript",
      fa: "fa-brands fa-js",
    },
    {
      title: "Bootstrap",
      fa: "fa-brands fa-bootstrap",
    },
    {
      title: "CSS",
      fa: "fa-brands fa-css3-alt",
    },
    {
      title: "SQL",
      fa: "fa-solid fa-database",
    },
    {
      title: "PHP",
      fa: "fa-brands fa-php",
    },
    {
      title: "Laravel",
      fa: "fa-brands fa-laravel",
    },
    {
      title: "Git",
      fa: "fa-brands fa-github",
    },
  ];

  let html = `
      <div class="card card-bar card-skill pt-4 my-4">
        <i class="icono __FA__ fa-2x"></i>
        <h2>__TITLE__</h2>
        <div class="skills-bar px-4">
          <div class="bar oculto">
            <div class="info">
              <span class="fw-bold">__TITLEUC__</span>
            </div>
            <div class="progress-line"><span class="__TITLELC__"></span></div>
          </div>
        </div>
      </div>`;

  let output = "";
  cardsSkills.forEach(function (card, index) {
    let cardHtml = html
      .replace("__FA__", card.fa)
      .replace("__TITLE__", card.title)
      .replace("__TITLEUC__", card.title.toUpperCase())
      .replace("__TITLELC__", card.title.toLowerCase());
    output += cardHtml;
  });
  document.querySelector(".card-container.center").innerHTML = output;

  const colors = [
    "#f0c674", // Linux
    "#0db7ed", // Docker
    "#b07219", // Java
    "#3572a5", // Python
    "#e34c26", // HTML
    "#f7df1e", // JavaScript
    "#563d7c", // Bootstrap
    "#254BDD", // CSS
    "#808080", // SQL
    "#4f5d95", // PHP
    "#f05340", // Laravel
    "#f34b7d", // Git
  ];
  const isDarkMode = localStorage.getItem("dark") === "true";
  const saturationValue = isDarkMode ? 0.75 : 0.35;

  const transparentColors = colors.map((color) => {
    const [r, g, b] = color.match(/\w\w/g).map((x) => parseInt(x, 16));
    return `rgba(${r}, ${g}, ${b}, ${saturationValue})`;
  });

  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    card.style.backgroundColor = transparentColors[index];
  });
  const percentages = {
    linux: 80,
    docker: 75,
    java: 85,
    python: 30,
    html: 85,
    javascript: 62,
    bootstrap: 65,
    css: 75,
    sql: 70,
    php: 40,
    laravel: 25,
    git: 90,
  };

  let estilosBarras = "";
  for (const skill in percentages) {
    estilosBarras += `.progress-line .${skill} { width: ${percentages[skill]}%; }`;
    estilosBarras += `.progress-line .${skill}::after { content: "${percentages[skill]}%"; }`;
  }
  const style = document.createElement("style");
  style.innerHTML = estilosBarras;
  document.head.appendChild(style);
}
const btn = document.getElementById("show-more");
btn.addEventListener("click", function () {
  btn.setAttribute(
    "data-translate",
    btn.getAttribute("data-translate") === "showmore" ? "showless" : "showmore"
  );
  updateContent();
  transitionBars();
  checkHeight();
  document.addEventListener("DOMContentModified", checkHeight);

  function transitionBars() {
    const cards = document.querySelectorAll(".card");
    const barras = document.querySelectorAll(".bar");
    const iconos = document.querySelectorAll(".icono");
    const h2s = Array.from(document.getElementsByTagName("h2"));

    cards.forEach((card) => {
      card.style.opacity = "0";
      card.style.visibility = "hidden";
    });
    setTimeout(() => {
      cards.forEach(function (card) {
        card.classList.toggle("one-per-row");
        card.classList.toggle("pt-4");
        card.classList.toggle("my-4");
        card.classList.toggle("small");
        card.classList.toggle("expanded");
      });

      [...barras, ...iconos, ...h2s].forEach(function (element) {
        element.classList.toggle("oculto");
      });
      setTimeout(() => {
        cards.forEach((card) => {
          card.style.opacity = "1";
          card.style.visibility = "visible";
        });
      }, 300);
    }, 300);
  }
});
