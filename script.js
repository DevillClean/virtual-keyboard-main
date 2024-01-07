let keys = document.querySelectorAll('.key');
let keyboard = document.querySelector('#keyboard');
let textArea = document.querySelector('#textarea');
let capsLock = document.querySelector('.caps_lock');
let arrowUp = document.querySelector('#up');
let arrowDown = document.querySelector('#down');
let arrowLeft = document.querySelector('#left');
let ArrowRight = document.querySelector('#right');
let tab = document.querySelector('.tab');
let keyLetter = document.querySelectorAll('.key_letter');
let shift = document.querySelector('.shift');

for (let i = 0; i < keys.length; i++) {
    keys[i].setAttribute('keyname', keys[i].innerHTML);
    keys[i].setAttribute('lowerCaseName', keys[i].innerHTML.toLowerCase());
}


window.addEventListener('keydown', (e) => {
    console.log(e.key);
    textArea.focus();
    if (e.key == 'ArrowUp') {
        arrowUp.classList.add('active');
    } else if (e.key == 'ArrowDown') {
        arrowDown.classList.add('active');
    } else if (e.key == 'ArrowLeft') {
        arrowLeft.classList.add('active');
    } else if (e.key == 'ArrowRight') {
        ArrowRight.classList.add('active');
    } else if (e.key == 'Tab') {
        tab.classList.add('active');
    } else if (e.key == 'Shift') {
        for (let i = 0; i < keyLetter.length; i++) {
            keyLetter[i].classList.add('upperCase');
        }
        shift.classList.add('active');
    }
    else {
        for (let i = 0; i < keys.length; i++) {
            if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName') || e.key == keys[i].getAttribute('rus')) {
                keys[i].classList.add('active');

            } else if (e.ctrlKey && e.altKey) {
                var rus = keys[i].getAttribute('rus');
                keys[i].innerHTML = rus;
            } else if (e.altKey && e.ctrlKey) {
                var eng = keys[i].getAttribute('keyname');
                keys[i].innerHTML = eng;
            } else if (e.key == 'CapsLock') {
                capsLock.classList.toggle('active');
                capsLock.classList.toggle('active_caps');
                for (let i = 0; i < keyLetter.length; i++) {
                    keyLetter[i].classList.toggle('upperCase');
                }
            }
        }
    }
});

window.addEventListener('keyup', (e) => {
    if (e.key == 'ArrowUp') {
        arrowUp.classList.remove('active');
    } else if (e.key == 'ArrowDown') {
        arrowDown.classList.remove('active');
    } else if (e.key == 'ArrowLeft') {
        arrowLeft.classList.remove('active');
    } else if (e.key == 'ArrowRight') {
        ArrowRight.classList.remove('active');
    } else if (e.key == 'Tab') {
        tab.classList.remove('active');
    } else if (e.key == 'Shift') {
        for (let i = 0; i < keyLetter.length; i++) {
            keyLetter[i].classList.remove('upperCase');
        }
        shift.classList.remove('active');
    }
    else {
        for (let i = 0; i < keys.length; i++) {
            if (e.key == keys[i].getAttribute('keyname') || e.key == keys[i].getAttribute('lowerCaseName') || e.key == keys[i].getAttribute('rus')) {
                keys[i].classList.remove('active');
            }
        }
    }
});

document.addEventListener('click', (e) => {
    textArea.focus();
    var inner = e.target.innerHTML;
    console.log(inner);
    if (inner.length == 1) {
        textArea.value += e.target.innerHTML;
    } else if (inner == 'Enter') {
        console.log('PRESS ENTER');
        textArea.value += '\n';
    }
})


