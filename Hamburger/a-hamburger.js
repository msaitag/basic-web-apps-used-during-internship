const button = document.getElementById('btn');
const navbar = document.getElementById('nav');

button.addEventListener('click', () => {
    button.classList.toggle('active');
    navbar.classList.toggle('active');
})