function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.addEventListener('DOMContentLoaded', function() {
  const inputElement = document.querySelector('input');
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const boxesContainer = document.getElementById('boxes');

  createButton.addEventListener('click', function() {
    const amount = parseInt(inputElement.value);

    if (amount >= 1 && amount <= 100) {
      createBoxes(amount);
      inputElement.value = '';
    }
  });

  destroyButton.addEventListener('click', function() {
    destroyBoxes();
  });
  function destroyBoxes() {
    const boxes = document.querySelectorAll('#boxes div');
    boxes.forEach(box => {
      box.remove();
    });
  }

  function createBoxes(amount) {
    
    boxesContainer.innerHTML = '';
  
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      box.style.width = `${30 + i * 10}px`;
      box.style.height = `${30 + i * 10}px`;
      box.style.backgroundColor = getRandomHexColor();
      boxesContainer.appendChild(box);
    }
  }
});


const dContr = document.getElementById('controls');
dContr.classList.add('blockInput')

const input = document.querySelector('#controls input');
input.classList.add("inputNumber");

const btnCr = document.querySelector('[data-create]');
btnCr.classList.add('styleBtnCr');

const btnDstr = document.querySelector('[data-destroy]');
btnDstr.classList.add('styleBtnDstr');


const boxes = document.getElementById('boxes');
boxes.classList.add('areaOutput')

