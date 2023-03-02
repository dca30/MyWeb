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
    cyber: "Cyberseguridad",
    server: "Servidores",
    front: "Frontend",
    back: "Backend",
    linux: "Linux",
    os: "OS",
    auto: "Automatización",
    tennis: "Tenis",
    padel: "Padel",
    gym: "Gym",
    bike: "Bici",
    run: "Correr",
    electro: "Electrónica",
    tv: "Series",
    movie: "Películas",
    description_aboutme:
      "Soy un programador apasionado que acaba de entrar en el mundo profesional. Tengo un gran interés en el desarrollo de proyectos secundarios y me siento cómodo trabajando con diversas tecnologías de programación. Siempre estoy ansioso por aprender y mejorar mis habilidades, y prospero en entornos de trabajo dinámicos que me desafían a pensar creativamente y a encontrar soluciones innovadoras. Con una sólida base en los principios de programación, estoy emocionado por aplicar mis conocimientos a proyectos del mundo real y contribuir al éxito de los equipos con los que trabajo.",
    interests: "INTERESES",
    hobbies: "AFICIONES",
    city: " Ciudad:",
    country: "España",
    birthday: "Nacimiento:",
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
    //Projects
    rpi_t: "Configuración de Raspberry Pi",
    rpi_st:
      "Instalación de Raspbian en Raspberry Pi 4b con caja impresa en 3D y visualización de estadísticas.",
    rpi_bt:
      "Configuración de Raspberry Pi: Este proyecto consistió en instalar el sistema operativo Raspbian en una Raspberry Pi 4b, crear una caja personalizada impresa en 3D e implementar una pantalla que muestra estadísticas sobre el uso de Raspberry Pi. El proceso incluyó la descarga de la imagen de Raspbian, la grabación en una tarjeta microSD, la configuración de los ajustes de Raspberry Pi y el diseño e impresión de la caja utilizando un software de modelado 3D. Luego, se conectó la pantalla a Raspberry Pi y se programó para mostrar estadísticas en tiempo real, como el uso de la CPU, la memoria y la temperatura.",
    twitter_t: "Bot de Twitter de Matrix",
    twitter_st:
      "Bot de Twitter en Python que publica fotogramas de la película Matrix cada hora.",
    twitter_bt:
      "Bot de Twitter de Matrix: Este proyecto fue un script de Python que tuitea automáticamente un fotograma de la película Matrix cada hora. El proceso incluyó la creación de una cuenta de desarrollador de Twitter y la obtención de credenciales de API, el uso de la biblioteca Python Tweepy para conectarse a la API de Twitter y el diseño del script para seleccionar aleatoriamente un fotograma de la película y tuitearlo junto con una leyenda. Además, se configuró el script para que se ejecutara según un cronograma utilizando un trabajo cron.",
    color_t: "Visualización de colores de películas",
    color_st:
      "Script en Python que extrae el color promedio de cada segundo de una película y crea una imagen con barras de colores.",
    color_bt:
      "Visualización de colores de películas: Este proyecto consistió en crear un script en Python que extrae el color promedio de cada segundo de una película y genera una imagen con barras que representan cada color. El proceso incluyó el uso de la biblioteca Python OpenCV para leer la película cuadro por cuadro, analizar cada cuadro para extraer el color promedio y usar la biblioteca Python Pillow para crear una imagen con barras para cada color. El resultado final fue una colorida visualización de la paleta de colores de la película.",
    web_t: "Diseño y alojamiento de sitios web",
    web_st:
      "Diseño y desarrollo de sitios web, incluyendo la compra de dominio, alojamiento gratuito y configuración de Cloudflare HTTPS.",
    web_bt:
      "Diseño y alojamiento de sitios web: Este proyecto consistió en diseñar y desarrollar un sitio web para mostrar mi currículum, habilidades de TI y educación. El proceso incluyó la compra de un nombre de dominio, la búsqueda de un proveedor de alojamiento gratuito y la configuración de Cloudflare para agregar HTTPS al sitio web. Además, utilicé HTML, CSS, JavaScript y Bootstrap para diseñar el diseño del sitio web y agregar elementos interactivos como botones y efectos de desplazamiento. Finalmente, configuré el sitio web para que fuera accesible al público.",
    transport_t: "Tiempos de transporte",
    transport_st: "Aplicación para tiempos de espera en transporte público",
    transport_bt:
      "Aplicación para tiempos de espera en transporte público: este proyecto implicó conectar a una API de la ciudad para recuperar información en tiempo real sobre los tiempos de llegada de varias opciones de transporte público. La aplicación fue diseñada para procesar y mostrar estos datos en un formato fácilmente accesible para los usuarios. Los pasos técnicos incluyeron la integración de la API, la implementación de la lógica de procesamiento y visualización de datos, y el diseño de la interfaz de usuario utilizando HTML, CSS, JavaScript y Bootstrap. El resultado final es una herramienta funcional para que los usuarios del transporte público se mantengan informados sobre los tiempos de espera.",
    plan_t: "Aplicación de planificación",
    plan_st:
      "Aplicación móvil para encontrar el mejor fin de semana para hacer una actividad con amigos",
    plan_bt:
      "Aplicación móvil para programar actividades en grupo: este proyecto implicó crear una aplicación móvil que ayuda a los usuarios a planificar actividades en grupo. La aplicación se integra con los calendarios de los usuarios para determinar los mejores momentos para un evento grupal en función de la disponibilidad de todos. El proceso involucró el desarrollo de un algoritmo para analizar los horarios de los usuarios, así como el diseño de una interfaz fácil de usar para agregar y ver horarios. El resultado final es una herramienta útil para que amigos y grupos coordinen sus horarios y aseguren el máximo número de asistentes para cualquier actividad planificada.",
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
    cyber: "Cybersecurity",
    server: "Servers",
    front: "Frontend",
    back: "Backend",
    linux: "Linux",
    os: "OS",
    auto: "Automatization",
    tennis: "Tennis",
    padel: "Padel",
    gym: "Gym",
    bike: "Bike",
    run: "Running",
    electro: "Electronics",
    tv: "Shows",
    movie: "Movies",
    //description_aboutme:
    description_aboutme:
      "I'm a passionate programmer who's just entered the professional world. I have a strong interest in developing side projects and am comfortable working with various programming technologies. I'm always eager to learn and improve my skills, and I thrive in dynamic work environments that challenge me to think creatively and come up with innovative solutions. With a solid foundation in programming principles, I'm excited to apply my knowledge to real-world projects and contribute to the success of the teams I work with.",
    interests: "INTERESTS",
    hobbies: "HOBBIES",
    city: " City:",
    country: "Spain",
    birthday: "Birthday:",
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
    //Projects
    rpi_t: "Raspberry Pi Setup",
    rpi_st:
      "Raspberry Pi 4b Raspbian installation with 3D printed case and display of stats.",
    rpi_bt:
      "Raspberry Pi Setup: This project involved installing the Raspbian operating system on a Raspberry Pi 4b, creating a custom 3D printed case, and implementing a display that shows statistics about the Raspberry Pi's usage. The process included downloading the Raspbian image, flashing it to a microSD card, configuring the Raspberry Pi's settings, and designing and printing the case using a 3D modeling software. The display was then connected to the Raspberry Pi and programmed to display real-time statistics such as CPU usage, memory usage, and temperature.",
    twitter_t: "Matrix Twitter Bot",
    twitter_st:
      "Twitter bot in Python that publishes Matrix movie frames every hour.",
    twitter_bt:
      "Matrix Twitter Bot: This project was a Python script that automatically tweets a frame from the movie Matrix every hour. The process included creating a Twitter developer account and obtaining API credentials, using the Python library Tweepy to connect to the Twitter API, and designing the script to randomly select a frame from the movie and tweet it along with a caption. Additionally, the script was set to run on a schedule using a cron job.",
    color_t: "Movie Color Visualization",
    color_st:
      "Python script that extracts average color of each second of a movie and creates image with color bars.",
    color_bt:
      "Movie Color Visualization: This project involved creating a Python script that extracts the average color of each second of a movie and generates an image with bars representing each color. The process included using the Python library OpenCV to read the movie frame by frame, analyzing each frame to extract the average color, and using the Python library Pillow to create an image with bars for each color. The final result was a colorful visualization of the movie's color palette.",
    web_t: "Website Design and Hosting",
    web_st:
      "Website design and development, including domain purchase, free hosting and Cloudflare HTTPS configuration.",
    web_bt:
      "Website Design and Hosting: This project involved designing and developing a website to showcase my resume, IT skills, and education. The process included purchasing a domain name, finding a free hosting provider, and configuring Cloudflare to add HTTPS to the website. Additionally, I used HTML, CSS, JavaScript, and Bootstrap to design the website layout and add interactive elements such as buttons and hover effects. Finally, I configured the website to be accessible to the public.",
    transport_t: "Transport times",
    transport_st: "App public transport wait times",
    transport_bt:
      "App for Public Transport Wait Times: This project involved connecting to a city API to retrieve real-time information on the arrival times of various public transportation options. The application was designed to process and display this data in an easily accessible format for users. Technical steps included API integration, data processing and display logic implementation, and user interface design using HTML, CSS, JavaScript, and Bootstrap. The end result is a functional tool for commuters to stay informed on public transport wait times.",
    plan_t: "Planning App",
    plan_st:
      "Mobile app for finding out the best weekend to do an activity some friends",
    plan_bt:
      "Mobile App for Group Activity Scheduling: This project involved creating a mobile application that helps users plan group activities. The app integrates with users' calendars to determine the best times for a group event based on everyone's availability. The process involved developing an algorithm to analyze users' schedules, as well as designing a user-friendly interface for adding and viewing schedules. The end result is a helpful tool for friends and groups to coordinate their schedules and ensure the maximum number of attendees for any planned activity.",
  },
};
function updateContent() {
  let elements = document.querySelectorAll("[data-translate]");
  let lang = localStorage.getItem("lang") || "es";
  // update the content
  elements.forEach(function (element) {
    let key = element.getAttribute("data-translate");
    element.innerHTML = translations[lang][key];
  });
  const htmlElement = document.getElementsByTagName("html")[0];
  // Set the value of the lang attribute to "en-US"
  htmlElement.setAttribute("lang", lang);
  const buttons = document.querySelectorAll(".dropdown-item");
  buttons.forEach((button) =>
    button.classList.toggle("seleccionado", button.id === lang)
  );
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
