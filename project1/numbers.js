
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

    
};
