const circle = document.querySelector('.circle');

circle.addEventListener('mouseover', () => {
    if (!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseout', () => {
    if (circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});