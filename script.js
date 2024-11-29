// Tüm div'ler
const divs = document.querySelectorAll('.box');

// Container
const container = document.querySelector('.container');
container.style.backgroundColor = getRandomColor();

// Renk ve içerik --> div'ler için
divs.forEach((div, index) => {
  div.textContent = `Bölüm ${index + 1}`;
  div.style.backgroundColor = getRandomColor();
});

// Rastgele renk
function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
