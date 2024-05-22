const seeNo = document.querySelector('.seeNo');
const hearNo = document.querySelector('.hearNo');
const speakNo = document.querySelector('.speakNo');

seeNo.addEventListener('click', () => {
    if (hearNo.classList.contains('hearNo')) {
        hearNo.classList.add('active');
        seeNo.classList.remove('active');
    }
})

hearNo.addEventListener('click', () => {
    if (speakNo.classList.contains('speakNo')) {
        speakNo.classList.add('active');
        hearNo.classList.remove('active');
    }
})

speakNo.addEventListener('click', () => {
    if (seeNo.classList.contains('seeNo')) {
        seeNo.classList.add('active');
        speakNo.classList.remove('active');
    }
})