document.addEventListener("DOMContentLoaded", function() {
    const colors = [
        { name: 'Red', code: 'red' },
        { name: 'Orange', code: 'orange' },
        { name: 'Yellow', code: 'yellow' },
        { name: 'Green', code: 'green' },
        { name: 'Blue', code: 'blue' },
        { name: 'Indigo', code: 'indigo' },
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

    const QuizPopup = (() => {
        const popupElement = document.getElementById('quizPopup');
        const exitButton = document.getElementById('exitBtn');

        function show() {
            popupElement.style.display = 'block';
        }

        function hide() {
            popupElement.style.display = 'none';
            closeGameOver();
        }

        exitButton.onclick = hide;

        function showGameOver() {
            document.getElementById('gameOver').style.display = 'block';
            document.getElementById('resultMessage').innerText = `You got ${correctAnswers} out of ${questions.length} correct!`;
        }

        function closeGameOver() {
            document.getElementById('gameOver').style.display = 'none';
        }

        return {
            show,
            hide,
            showGameOver,
            closeGameOver
        };
    })();

    document.getElementById('takeQuiz').onclick = () => {
        questions = getRandomQuestions(allQuestions, 3);
        currentQuestionIndex = 0;
        correctAnswers = 0;
        attempts = 0;
        QuizPopup.show();
        loadQuestion();
    };

    document.getElementById('tryAgain').onclick = resetQuiz;

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
            QuizPopup.showGameOver();
        }
    };

    function getRandomQuestions(allQuestions, numQuestions) {
        const shuffled = allQuestions.sort(() => 0.5 - Math.random());
        return shuffled.slice(0, numQuestions);
    }

    function loadQuestion() {
        if (currentQuestionIndex >= questions.length) {
            QuizPopup.showGameOver();
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
                if (attempts == 2) {
                    QuizPopup.showGameOver();
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

    function resetQuiz() {
        attempts = 0;
        currentQuestionIndex = 0;
        correctAnswers = 0;
        questions = getRandomQuestions(allQuestions, 3);
        loadQuestion();
        QuizPopup.closeGameOver();
    }
});

document.getElementById('generateNumbers').onclick = function() {
    let numbersContainer = document.querySelector(".numbersbox");
    numbersContainer.innerHTML = '';

    let randomNum = Math.floor(Math.random() * 10) + 1;

    let displayContainer = document.createElement("div");
    displayContainer.style.display = 'flex';
    displayContainer.style.alignItems = 'center';

    let numberDisplay = document.createElement("div");
    numberDisplay.textContent = randomNum;
    numberDisplay.style.textAlign = 'center';
    numberDisplay.style.fontSize = '70px';

    let button = document.createElement("button");
    button.className = "audio-button";
    button.style.display = 'block';
    button.style.marginTop = '10px';
    button.style.marginLeft = 'auto';
    button.style.marginRight = 'auto';

    let icon = document.createElement("i");
    icon.className = "fas fa-volume-high";
    icon.style.marginRight = '5px';

    button.appendChild(icon);

    button.onclick = function() {
        let audio = new Audio(`sounds/${randomNum}.mp3`);
        audio.play().catch(error => {
            console.error(`Audio file for number ${randomNum} not found or couldn't be played.`, error);
        });
    };
    displayContainer.appendChild(button);
    displayContainer.appendChild(numberDisplay);
    numbersContainer.appendChild(displayContainer)

    const swatches = document.querySelectorAll('.colorSwatch');
    const colorInfo = document.getElementById('colorInfo');
    
    const colorFacts = {
        'red': 'Red is often associated with energy and passion.',
        'orange': 'Orange represents enthusiasm and creativity.',
        'yellow': 'Yellow is the color of sunshine and happiness.',
        'green': 'Green symbolizes nature and growth.',
        'blue': 'Blue is often linked to calmness and stability.',
        'indigo': 'Indigo signifies intuition and perception.',
        'violet': 'Violet is associated with luxury and ambition.'
    };

    swatches.forEach(swatch => {
        swatch.onmouseover = () => {
            const colorName = swatch.innerText;
            colorInfo.innerText = colorFacts[colorName];
            colorInfo.style.visibility = 'visible';
        };

        swatch.onmouseout = () => {
            colorInfo.style.visibility = 'hidden';
        };

        document.addEventListener("DOMContentLoaded", function() {
            const clothingItems = document.querySelectorAll('.clothing-item');
            const clothingInfo = document.getElementById('clothingInfo');
        
            clothingItems.forEach(item => {
                item.addEventListener('mouseover', function() {
                    clothingInfo.innerText = item.dataset.info;
                    clothingInfo.style.visibility = 'visible';
                    const rect = item.getBoundingClientRect();
                    clothingInfo.style.top = `${rect.bottom}px`;
                    clothingInfo.style.left = `${rect.left}px`;
                });
        
                item.addEventListener('mouseout', function() {
                    clothingInfo.style.visibility = 'hidden';
                });
            });
        });
        
    });
};
