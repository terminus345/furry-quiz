let currentQuestion = 0;
let score = 0;

var correct = new Audio('audio/correct.mp3');
var wrong = new Audio('audio/wrong.mp3');
correct.volume = 0.4;
wrong.volume = 0.4;

const lovedImage = document.getElementById("loved");
const neutralImage = document.getElementById("neutral");
const hatedImage = document.getElementById("hated");

const quizData = JSON.parse(sessionStorage.getItem('quizData'));
const selectedPlayer = sessionStorage.getItem('selectedPlayer');

const questionImage = document.getElementById('question-image');
const characterName = document.getElementById('character-name');
const characterFrom = document.getElementById('character-from');
const answerButtons = document.getElementById('answer-buttons');
const resultContainer = document.getElementById('result-container');
const resultText = document.getElementById('result-text');

function startQuiz() {
    currentQuestion = 0;
    score = 0;
    if (selectedPlayer === 'fufu'){
        lovedImage.src = "images/chibi/fufu_loved.png";
        neutralImage.src = "images/chibi/fufu_neutral.png";
        hatedImage.src = "images/chibi/fufu_hated.png";
    } else if (selectedPlayer === 'mother'){
        lovedImage.src = "images/chibi/mother_loved.png";
        neutralImage.src = "images/chibi/mother_neutral.png";
        hatedImage.src = "images/chibi/mother_hated.png";
    }
    showQuestion();
}

function showQuestion() {
    if (currentQuestion < quizData.length) {
        const question = quizData[currentQuestion];
        questionImage.src = question.imageUrl;
        characterName.innerText = question.name;
        characterFrom.innerText = question.from;
    } else {
        showResult();
    }
}

function selectAnswer(selected) {
    const question = quizData[currentQuestion];
    if (selected === question.correctAnswer) {
        correct.play();
        score++;
    } else {
        wrong.play();
    }
    currentQuestion++;
    showQuestion();
}

function showResult() {
    document.getElementById('quiz-container').style.display = 'none';
    answerButtons.style.display = 'none';
    resultContainer.style.display = 'block';
    resultText.innerText = `You got ${score} out of ${quizData.length} questions right!`;
}

function restartQuiz() {
    resultContainer.style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
    answerButtons.style.display = 'block';
    startQuiz();
}

function characterSelect(){
    window.location.href = "index.html";
}

startQuiz();