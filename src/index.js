import "./index.css";

function updateCanvasSize() {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
    generateImage();
}

function drawPixel(color, x, y) {
    context.beginPath();
    context.fillStyle = color;
    context.fillRect(x, y, 1, 1);
    context.closePath();
}

function getRandomNumber(min, max) {
    return Math.floor(min + Math.random() * (max - min + 1));
}

function generateImage() {
    for (let y = 0; y < canvas.height; y++) {
        for (let x = 0; x < canvas.width; x++) {
            let color = "black";
            if (getRandomNumber(0, 1) === 0) {
                color = "white";
            }
            drawPixel(color, x, y);
        }
    }
}

const canvas = document.getElementById('pixels');
const context = canvas.getContext('2d');

updateCanvasSize();
window.addEventListener("resize", updateCanvasSize);