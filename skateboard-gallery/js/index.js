'use strict';

const fullView = document.getElementById('view');
const skateboardNav = document.getElementById('nav');
const links = skateboardNav.getElementsByTagName('a');

function showFullView(event) {
    event.preventDefault();
    fullView.title = this.getElementsByTagName('img')[0].title;
    for (const link of links) {
        link.classList.remove('gallery-current');
    }
    this.classList.add('gallery-current');
    fullView.src = this.href;
}

for (const link of links) {
    link.addEventListener('click', showFullView);
}


