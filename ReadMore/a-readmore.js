const btns = document.getElementsByClassName('readMore');

const onButtonClick = (event) => {
    const btn = event.target;
    const dataTarget = btn.getAttribute('data-target');

    btn.innerHTML = btn.innerHTML == 'Show Less' ? 'Show More' : 'Show Less';

    const extendContent = document.getElementById(dataTarget + 'P');
    extendContent.classList.toggle('extended-height');
};

const attachingEvent = event => {
    event.addEventListener('click', onButtonClick);
};

Array.prototype.forEach.call(btns, attachingEvent);