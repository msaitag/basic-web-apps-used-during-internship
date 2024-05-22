const openJs = document.getElementById('open');
const popupContainer = document.querySelector('.popupContainer');
const closeJs = document.getElementById('close');

openJs.addEventListener('click', () => {
    if (!popupContainer.classList.contains('active')) {
        popupContainer.classList.toggle('active');



    };
});

closeJs.addEventListener('click', () => {
    if (popupContainer.classList.contains('active')) {
        popupContainer.classList.remove('active');


    };
});