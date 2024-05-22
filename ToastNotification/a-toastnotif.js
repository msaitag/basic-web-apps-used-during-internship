const button = document.getElementById('btn');
const body = document.getElementById('container');


button.addEventListener('click', () => {
    createNotification();
});

function createNotification() {
    const notif = document.createElement('div');
    notif.classList.add('toast');

    notif.innerText = 'Muhammet Ali is the Best ma Neighbor';

    body.appendChild(notif);

    setTimeout(() => {
        notif.remove();
    }, 3000);

};