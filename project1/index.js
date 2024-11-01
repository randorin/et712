document.getElementById('takeQuiz').onclick = () => {
    questions = getRandomQuestions(allQuestions, 3);
    showPopup();
    loadQuestion();
};

const colors = [
    { name: 'Red', code: 'red' },
    { name: 'Orange', code: 'orange' },
    { name: 'Yellow', code: 'yellow' },
    { name: 'Green', code: 'green' },
    { name: 'Blue', code: 'blue' },
    { name: 'Indigo', code: '#4B0082' },
    { name: 'Violet', code: 'violet' }
];

const allQuestions = [
    { color: 'red', correct: 'Red' },
    { color: 'orange', correct: 'Orange' },
    { color: 'yellow', correct: 'Yellow' },
    { color: 'green', correct: 'Green' },
    { color: 'blue', correct: 'Blue' },
    { color: 'indigo', correct: 'Indigo' },
    { color: 'violet', correct: 'Violet' }
];

let questions = [];
let currentQuestionIndex = 0;
let attempts = 0;
let correctAnswers = 0;

document.getElementById('exitBtn').onclick = () => {
    closePopup();
};

document.getElementById('tryAgain').onclick = () => {
    resetQuiz();
};

document.getElementById('prevBtn').onclick = () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion();
    }
};

document.getElementById('nextBtn').onclick = () => {
    if (currentQuestionIndex < questions.length - 1) {
        currentQuestionIndex++;
        loadQuestion();
    } else {
        showGameOver();
    }
};


function getRandomQuestions(allQuestions, numQuestions) {
    const shuffled = allQuestions.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, numQuestions);
}

function showPopup() {
    document.getElementById('quizPopup').style.display = 'block';
}

function closePopup() {
    document.getElementById('quizPopup').style.display = 'none';
}

function loadQuestion() {
    if (currentQuestionIndex >= questions.length) {
        showGameOver();
        return;
    }
    const question = questions[currentQuestionIndex];
    document.getElementById('colorBox').style.backgroundColor = question.color;
    document.getElementById('attempts').innerText = `${attempts}/2 attempts total`;
    document.getElementById('options').innerHTML = '';

    colors.forEach(color => {
        const option = document.createElement('div');
        option.innerText = color.name;
        option.style.backgroundColor = '#fff';
        option.classList.add('option');

        option.onmouseover = () => {
            option.style.backgroundColor = 'pink';
            option.style.color = 'black';
        };

        option.onmouseout = () => {
            option.style.backgroundColor = '';
            option.style.color = '';
        };

        option.onclick = () => handleAnswer(option, color.name, question.correct);
        document.getElementById('options').appendChild(option);
    });
}

function handleAnswer(optionElement, selectedColor, correctColor) {
    if (attempts < 2) {
        if (selectedColor === correctColor) {
            correctAnswers++;
            alert("Correct!");
            disableOptions();
        } else {
            attempts++;
            document.getElementById('attempts').innerText = `${attempts}/2 attempted`;
            optionElement.style.backgroundColor = 'red';
            if (attempts >= 2) {
                showGameOver();
            }
        }
    }
}

function disableOptions() {
    const options = document.getElementById('options').querySelectorAll('.option');
    options.forEach(option => {
        option.style.pointerEvents = 'none';
        option.style.backgroundColor = '#ccc';
    });
}

function showGameOver() {
    document.getElementById('gameOver').style.display = 'block';
    document.getElementById('resultMessage').innerText = `You got ${correctAnswers} out of ${questions.length} correct!`;
}

function resetQuiz() {
    attempts = 0;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    questions = getRandomQuestions(allQuestions, 3);
    closePopup();  // Close popup before starting a new quiz
    showPopup();   // Show the popup again for a new game
    loadQuestion(); // Load the first question
}
