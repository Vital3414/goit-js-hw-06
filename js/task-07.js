const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', onInputChange);

function onInputChange(event) {
    const fontSize = event.target.value;
    textRef.style.fontSize = `${fontSize}px`;
}
