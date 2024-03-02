function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
document.addEventListener('DOMContentLoaded', () => {
  const bodyElement = document.body;
  const colorSpan = document.querySelector('.color');
  const changeColorBtn = document.querySelector('.change-color');

  changeColorBtn.addEventListener('click', () => {
    const randomColor = getRandomHexColor();

    bodyElement.style.backgroundColor = randomColor;
    colorSpan.textContent = randomColor;

  });
});

const pargElem = document.querySelector("div.widget p");
pargElem.classList.add("nameColor");