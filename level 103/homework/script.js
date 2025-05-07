const button = document.getElementById('changeColorButton');
const colorDiv = document.getElementById('colorDiv');

button.addEventListener('click', function() {
    const randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);
    colorDiv.style.backgroundColor = randomColor;
});
