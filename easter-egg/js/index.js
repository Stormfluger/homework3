'use strict'

const navBar = document.getElementsByTagName('nav')[0];
function toggleNavOpen(event) {
    if (event.ctrlKey && event.altKey && event.code === 'KeyT') {
        navBar.classList.toggle('visible');
    }
}

document.addEventListener('keydown', toggleNavOpen);

const secretText = document.getElementsByClassName('secret')[0];
const secretCode = ['KeyY', 'KeyT', 'KeyN', 'KeyJ', 'KeyK', 'KeyJ', 'KeyU', 'KeyB', 'KeyZ'];
const indexArr = [];

function showSecret(event) {
  if (event.code === secretCode[indexArr.length]) {
      indexArr.push(event.code);
      if (indexArr.length === secretCode.length) {
        secretText.classList.add('visible');
      }
    } else {
      indexArr.length = 0;
    }
}

document.addEventListener('keydown', showSecret);