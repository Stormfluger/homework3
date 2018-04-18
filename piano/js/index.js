'use strict';

const piano = document.getElementsByClassName('set')[0];
const pianoKeys = piano.getElementsByTagName('li');
const soundsAlbum = {
    lower: [
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/first.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/second.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/third.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fourth.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/lower/fifth.mp3'
    ],
    middle: [
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/first.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/second.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/third.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fourth.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/middle/fifth.mp3'
    ],
    higher: [
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/first.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/second.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/third.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fourth.mp3',
        'https://netology-code.github.io/hj-homeworks/event-object/piano/sounds/higher/fifth.mp3'
    ]
};


function playPiano(event) {
    const index = Array.from(pianoKeys).indexOf(this);
    const sound = this.getElementsByTagName('audio')[0];

    if (event.shiftKey) {
        sound.src = soundsAlbum.lower[index];
        piano.classList.add('lower');
        piano.classList.remove('middle', 'higher');
    } else if (event.altKey) {
        sound.src = soundsAlbum.higher[index];
        piano.classList.add('higher');
        piano.classList.remove('middle', 'lower');
    } else {
        sound.src = soundsAlbum.middle[index];
        piano.classList.add('middle');
        piano.classList.remove('higher', 'lower');
    }
    sound.play();
}

for (const key of pianoKeys) {
    key.addEventListener('click', playPiano);
}

