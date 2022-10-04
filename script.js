const textEl = document.getElementById('auto-text-string');
const speedEl = document.getElementById('speed');
const text = 'We Love Programming!';

let speed = 300 / speedEl.value;

speedEl.addEventListener('click', (e) => {
    if (e.target.value > 10) {
        speed = 300 / 10;
    } else if (e.target.value < 1) {
        speed = 300 / 1;
    } else {
        speed = 300 / e.target.value;
    }
})

function addLetter() {
    const currentLength = textEl.textContent.length;
    if (currentLength < text.length) {
        textEl.textContent += text.charAt(currentLength);
    } else {
        textEl.textContent = '';
    }

    setTimeout(addLetter, speed);
}

function initScript() {
    textEl.textContent = '';
    setTimeout(addLetter, speed);
}

initScript();