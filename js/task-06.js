const inputRef = document.querySelector('#validation-input');

inputRef.addEventListener('blur', onInputBlur);

function onInputBlur(event) {
    const validLength = event.currentTarget.dataset.length;
    const currentLength = event.currentTarget.value.length;

    if (currentLength === Number(validLength)) {
        event.currentTarget.classList.remove('invalid');
        event.currentTarget.classList.add('valid');
    } else {
        event.currentTarget.classList.remove('valid');
        event.currentTarget.classList.add('invalid');
    }
}