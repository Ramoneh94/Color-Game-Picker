let numSquares = 6;
let color = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let pickedColor = pickColor();
let ColorDisplay = document.getElementById("ColorDisplay");
let messageDisplay = document.getElementById("message");
let h1 = document.querySelector("h1");
let resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");
let easyButton = document.getElementById("Easy");
let hardButton = document.getElementById("Hard");

easyButton.addEventListener("click", function() {
    easyButton.classList.add("selected");
    hardButton.classList.remove("selected");
    numSquares = 3;
    color = generateRandomColors(numSquares);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;
    for (let index = 0; index < squares.length; index++) {
        if (color[index]) {
            squares[index].style.background = color[index];
        } else {
            squares[index].style.display = "none";
        }

    }


})

hardButton.addEventListener("click", function() {
    easyButton.classList.remove("selected");
    hardButton.classList.add("selected");
    numSquares = 6;
    color = generateRandomColors(numSquares);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.background = color[index];
        squares[index].style.display = "block";


    }
})

resetButton.addEventListener("click", function() {
    color = generateRandomColors(numSquares);
    pickedColor = pickColor();
    ColorDisplay.textContent = pickedColor;
    messageDisplay.textContent = "";
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.background = color[index];
    }
    h1.style.background = "steelblue";
    this.textContent = "New Colors";
})

ColorDisplay.textContent = pickedColor;

for (let index = 0; index < squares.length; index++) {
    // add initial colors to squares
    squares[index].style.background = color[index];

    //add.click listeners to squares
    squares[index].addEventListener("click", function name() {
        let clickedcolor = this.style.background;
        if (clickedcolor === pickedColor) {
            messageDisplay.textContent = "Correct";
            changeColors(clickedcolor);
            resetButton.textContent = "Play Again?";
            h1.style.background = clickedcolor;

        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try Again";

        }
    });
}

function changeColors(color) {
    for (let index = 0; index < squares.length; index++) {
        squares[index].style.background = color;
    }
}

function pickColor() {
    //Math.floor(Math.random() * 6 + 1)
    let random = Math.floor(Math.random() * color.length);
    return color[random];

}

function generateRandomColors(num) {
    let arr = []
    for (let index = 0; index < num; index++) {
        arr.push(randomColor())
    }
    return arr;
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return "rgb(" + r + ", " + g + ", " + b + ")";
}