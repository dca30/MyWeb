const translations = {
  es: {
    //Navbar
    home: "Inicio",
    projects: "Proyectos",
    skills: "Habilidades",
    about: "Acerca",
    language: "Idioma",
    //About me
    about_me: "SOBRE MI",
    description_aboutme:
      "Me considero una persona abierta, con facilidad para el trato con mis compañeros. Enfocado al logro, soy una persona muy versátil y con mucha facilidad para aprender nuevos conocimientos y adaptarme a las circunstancias y entornos. Estoy interesado en poder aportar todo mi potencial en una empresa a medida que obtengo nuevas habilidades informáticas.",
    interests: "INTERESES",
    hobbies: "AFICIONES",
    city: "Ciudad:",
    country: "España",
    birthday: "Nacimiento:",
    cyber: " Cyber Seguridad",
    servers: " Servidores",
    automation: " Automatizacion",
    tennis: " Tenis",
    bike: " Bici",
    running: " Correr",
    beer: " Cerveza",
    party: " Fiesta",
    electronics: " Electronica",
    tvshow: " Series",
    movies: " Peliculas",
    //Index
    carousel1Title: "Proyecto Raspberry Pi",
    carousel2Title: "Bot Twitter",
    carousel3Title: "De película a colores",
    carousel1Description:
      "Servidor web alojado en la Raspberry Pi 4b. Además de la fabricacion de la carcasa de la raspberry.",
    carousel2Description:
      "Bot de Twitter que publica periodicamente frames de la pelicula Matrix",
    carousel3Description:
      "Script de python que a partir de una pelicula genera una imagen formada por barras en la cual cada una de ellas es del color medio de cada frame",
    resume: "CV",
    //CV Index
    skills1: "Orientacion a objetivos",
    skills2: "Empatía",
    skills3: "Habilidades de comunicación",
    skills4: "Trabajo en equipo",
    skills5: "Optimización",
    languages: "Idiomas",
    french: "Francés",
    english: "Inglés | B2 - EOI",
    others: "otros",
    officepack: "Paquete Office: Word, Excel, Access",
    experience: "Experiencia",
    programmer: "Programador",
    programmertask: "Gestor de sistemas informaticos y desarrollador web",
    sportseller: "VENDEDOR DEPORTIVO",
    sportsellertask:
      "Atención al cliente, reposición, tareas logísticas y cobro",
    biker: "TÉCNICO DE MOTOS ELÉCTRICAS",
    bikertask: "Reparación de cableado y software de las motos",
    education: "EDUCACIÓN",
    dam: "Grado superior en desarrollo de aplicaciones multiplataforma | (Actualidad)",
    daw: "Grado superior en desarrollo de aplicaciones Web | (Actualidad)",
    certification:
      "Certificado de profesionalidad de desarrollo de aplicaciones con tecnologías web",
    age: "Edad:",
    showmore: "Mostrar más",
    showless: "Mostrar menos",
  },
  en: {
    //Navbar
    home: "Home",
    projects: "Projects",
    skills: "Skills",
    about: "About",
    language: "Language",
    //About me
    about_me: "ABOUT ME",
    description_aboutme:
      "I consider myself an open person, with ease in dealing with my colleagues. Focused on achieving goals, I am a very versatile person with a lot of ability to learn new knowledge and adapt to different circumstances and environments. I am interested in being able to contribute my full potential in a company as I gain new IT skills.",
    interests: "INTERESTS",
    hobbies: "HOBBIES",
    city: "City:",
    country: "Spain",
    birthday: "Birthday:",
    cyber: " Cyber Security",
    servers: " Servers",
    automation: " Automation",
    tennis: " Tennis",
    bike: " Bike",
    running: " Running",
    beer: " Beer",
    party: " Party",
    electronics: "Electronics",
    tvshow: " Tv shows",
    movies: " Movies",
    //Index
    carousel1Title: "Raspberry Pi Project",
    carousel2Title: "Twitter Bot",
    carousel3Title: "Movie to colors",
    carousel1Description:
      "Web server hosted on Raspberry Pi 4b. In addition to building the Raspberry Pi case.",
    carousel2Description:
      "Twitter bot that periodically posts frames from The Matrix movie",
    carousel3Description:
      "Python script that generates an image formed by bars from a movie, where each bar is the average color of each frame.",
    resume: "Resume",
    //CV Index
    skills1: "Goal Orientation",
    skills2: "Empathy",
    skills3: "Communication Skills",
    skills4: "Teamwork",
    skills5: "Optimization",
    languages: "Languages",
    french: "French",
    english: "English | B2 - EOI",
    others: "Others",
    officepack: "Office Pack: Word, Excel, Access",
    experience: "Experience",
    programmer: "Programmer",
    programmertask: "Computer Systems Manager and Web Developer",
    sportseller: "Sports seller",
    sportsellertask:
      "Customer service, restocking, logistics tasks and payment processing",
    biker: "Electric motorcycle technician",
    bikertask: "Software and wiring repair of motorcycles",
    education: "Education",
    dam: "Higher Degree in Multiplatform Application Development | (Currently)",
    daw: "Higher Degree in Web Application Development | (Currently)",
    certification:
      "Professional Certification in Web Technologies Application Development",
    age: "Age:",
    showmore: "Show more",
    showless: "Show less",
  },
};
function updateContent() {
  // remove the "fade-out" class before updating the content
  let elements = document.querySelectorAll("[data-translate]");
  // get the current language from local storage or default to "es"
  let lang = localStorage.getItem("lang") || "es";
  // update the content
  elements.forEach(function (element) {
    let key = element.getAttribute("data-translate");
    element.innerHTML = translations[lang][key];
  });
}
// attach click event to each link
const links = document.querySelectorAll(".dropdown-item");
links.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    localStorage.setItem("lang", this.innerHTML === "Español" ? "es" : "en");
    updateContent();
  });
});
// call the updateContent function to initialize the page
updateContent();
