document.querySelector(".login-form").addEventListener('submit', function (event) {
    event.preventDefault();
  
    let form = event.target;
    let formData = {};
  
    for (var i = 0; i < form.elements.length; i++) {
      var element = form.elements[i];

        if (element.tagName === 'INPUT' && element.type !== 'submit') {
        formData[element.name] = element.value.trim();
  
        if (formData[element.name] === '') {
          alert('Все поля формы должны быть заполнены');
          return;
        }
      }
    }
    console.log("Дані з форми:", formData);

    form.reset();
});


// const labels = document.querySelectorAll('label');

// labels[0].classList.add('labelForm');
// labels[1].classList.add('labelForm');    