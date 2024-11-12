document.addEventListener('DOMContentLoaded', function () {
    function submitForm(event) {
        event.preventDefault();

        const name = document.getElementById('name').value;
        const color = document.getElementById('color').value;
        const feedbackMessage = document.getElementById('feedbackMessage');
        const resultDisplay = document.getElementById('resultDisplay');

        if (name && color) {
            feedbackMessage.innerHTML = "Form submitted successfully!";
            feedbackMessage.style.color = "red";

            const result = document.createElement('p');
            result.innerHTML = `Name: ${name} | Favorite Color: ${color}`;
            resultDisplay.appendChild(result);
        } else {
            feedbackMessage.innerHTML = "Please make sure to fill out both fields.";
            feedbackMessage.style.color = "red";
        }
    }

    document.getElementById('nameColorForm').addEventListener('submit', submitForm);
});
