const options = document.querySelectorAll('.option');
const drawButton = document.querySelector('.draw-btn');
const resultDisplay = document.querySelector('.result');
let animationInterval;
let animationCount = 0;
let selectedIndex;

function startAnimation() {
  let currentIndex = 0;
  animationInterval = setInterval(() => {
    options[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % options.length;
    options[currentIndex].classList.add('active');

    animationCount++;

    if (animationCount === options.length * 4) {
      clearInterval(animationInterval);
      setTimeout(() => {
        options.forEach(option => option.classList.remove('active'));
        setTimeout(() => {
          selectedIndex = Math.floor(Math.random() * options.length);
          options[selectedIndex].classList.add('active');
          showResult();
        }, 300); // Mostrar el resultado después de 3 segundos
      }, 200); // Esperar 2 segundos antes de mostrar el resultado
    }
  }, 169); // Velocidad de animación en milisegundos
}

function showResult() {
  const selectedOption = options[selectedIndex].textContent;
  resultDisplay.textContent = `¡LA ACTIVADAD GANADORA ES: ${selectedOption}!`;
  drawButton.disabled = false;
}

drawButton.addEventListener('click', () => {
  animationCount = 0; // Reiniciar el contador de animación
  drawButton.disabled = true;
  resultDisplay.textContent = 'Sorteando...';
  options.forEach(option => option.classList.remove('active'));
  startAnimation();
});
