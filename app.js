let emptyheader = document.querySelector('h3');
let color1 = document.querySelector('#color1');
let color2 = document.querySelector('#color2');
let body = document.querySelector('#body');

const colorPicker = () => {
  body.style.background =
    'linear-gradient(to right, ' + color1.value + ', ' + color2.value + ')';
  emptyheader.textContent = body.style.background + ';';
};

color1.addEventListener('input', colorPicker);
color2.addEventListener('input', colorPicker);
