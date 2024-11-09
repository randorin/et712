const clothingDisplay = document.getElementById('clothingDisplay');
const shirtImage = document.createElement('img');
shirtImage.src = 'images/redshirtbgrm.png';
shirtImage.style.width = '200px';
shirtImage.style.display = 'none';
shirtImage.style.position = 'absolute';
shirtImage.style.zIndex = '1000';

document.body.appendChild(shirtImage);

const clothingText = document.querySelectorAll('.clothingText');
clothingText.forEach(text => {
    text.style.display = 'none';
});

clothingDisplay.onmouseover = (event) => {
    shirtImage.style.display = 'block';
    shirtImage.style.left = `${event.pageX}px`;
    shirtImage.style.top = `${event.pageY}px`;
    clothingText.forEach(text => {
        text.style.display = 'block';
    });
};

clothingDisplay.onmousemove = (event) => {
    shirtImage.style.left = `${event.pageX}px`;
    shirtImage.style.top = `${event.pageY}px`;
};

clothingDisplay.onmouseout = () => {
    shirtImage.style.display = 'none';
    clothingText.forEach(text => {
        text.style.display = 'none';
    });
};
