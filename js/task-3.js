document.addEventListener('DOMContentLoaded', function () {
    const nameInput = document.getElementById('name-input');
    const nameOutput = document.getElementById('name-output');
    

    nameInput.addEventListener('input', function () {
      const enteredName = nameInput.value.trim();
  
      if (enteredName === '') {
        nameOutput.textContent = 'Anonymous';
      } else {
        nameOutput.textContent = enteredName;
      }
    });
});

document.querySelector("input").classList.add("txtInput");
document.querySelector("h1").classList.add("outputTxt");
document.querySelector("div").classList.add("content");

const txtInp = document.getElementById("name-input");
txtInp.setAttribute("maxlength", "10");


