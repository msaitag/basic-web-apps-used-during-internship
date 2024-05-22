const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];

sounds.forEach((item) => {

    const btn = document.createElement('button');

    btn.innerText = item;

    document.body.style.background = 'green';

    btn.classList.add('btn');

    btn.addEventListener('click', () => {
        stopSongs();
        document.getElementById(item).play();
    });

    document.body.appendChild(btn);
});

function stopSongs() {
    sounds.forEach((item) => {
        const song = document.getElementById(item);

        song.pause();
        song.currentTime = 0;
    })
}