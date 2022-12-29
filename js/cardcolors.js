const colors = [
  '#f0c674', // Linux
  '#0db7ed',  // Docker
  '#b07219', // Java
  '#3572a5', // Python
  '#e34c26', // HTML
  '#f7df1e', // JavaScript
  '#563d7c', // Bootstrap
  '#254BDD', // CSS
  '#808080', // SQL
  '#4f5d95', // PHP
  '#f05340', // Laravel
  '#f34b7d', // Git
];

const transparentColors = colors.map(color => {
  const [r, g, b] = color.match(/\w\w/g).map(x => parseInt(x, 16));
  return `rgba(${r}, ${g}, ${b}, 0.5)`;
});

const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
  card.style.backgroundColor = transparentColors[index];
});