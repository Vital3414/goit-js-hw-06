const currentColorRef = document.querySelector('.color');

const changeColorBtnRef = document.querySelector(".change-color");

changeColorBtnRef.addEventListener("click", onChangeColorBtnClick);


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

function onChangeColorBtnClick(event) {
  const newColor = getRandomHexColor();
  document.body.style.backgroundColor = newColor;
  currentColorRef.textContent = newColor;
};