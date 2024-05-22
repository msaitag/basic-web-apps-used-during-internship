const quizData = [
    {
        question: 'How old is BTC?',
        a: '10',
        b: '11',
        c: '13',
        d: '15',
        correct: 'c'
    },
    {
        question: 'What is the most used programming langueage in 2021?',
        a: 'Java',
        b: 'Python',
        c: 'JS',
        d: 'C#',
        correct: 'b'
    },
    {
        question: 'Who is the president of United States of America?',
        a: 'Borris Johnson',
        b: 'Abraham Lincoln',
        c: 'Barrack Obama',
        d: 'Joe Biden',
        correct: 'd'
    }
];

const quiz = document.getElementById('quiz');
const answerEls = document.querySelectorAll('.answer');
const questionEl = document.getElementById('question');
const a_text = document.getElementById('a-text');
const b_text = document.getElementById('b-text');
const c_text = document.getElementById('c-text');
const d_text = document.getElementById('d-text');
const submitBtn = document.getElementById('submit');


let currentQuestion = 0;
let score = 0;
loadQuiz();

function loadQuiz() {
    deselectAnswer()
    const currentQuizData = quizData[currentQuestion];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
};

function getSelected() {
    const answerEls = document.querySelectorAll('.answer');
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        };
    });
    return answer;
};

function deselectAnswer() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
};

submitBtn.addEventListener('click', () => {
    const answer = getSelected();
    if (answer) {
        if (answer == quizData[currentQuestion].correct) {
            score++;
        }
        currentQuestion++;
        if (currentQuestion < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `<h2 class="results">You answered to ${score}/${quizData.length} questions.</h2><br><button onclick="location.reload()">Reload</button>`;
        };
    };

});



