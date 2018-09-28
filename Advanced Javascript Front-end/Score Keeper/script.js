
//Getting Elements
var p1Button = document.querySelector("#p1");
var p2Button = document.querySelector("#p2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var reset = document.querySelector("#reset");
var numInput = document.querySelector("input[type=number]");
var playingTo = document.querySelector("#playingTo");

//Scoring
var p1Score = 0;
var p2Score = 0;
var winningScore = 5;

var gameOver = false;

//Check for button click and let game play till winning score.
p1Button.addEventListener("click", function() {
    if (!gameOver) {
        numInput.disabled = true;
        p1Score++;
        if (p1Score === winningScore) {
            console.log("Game Over!");
            gameOver = true;
            p1Display.classList.add("winner");
        }
        p1Display.textContent = p1Score;
    }
    
})
p2Button.addEventListener("click", function() {
    if (!gameOver) {
        numInput.disabled = true;
        p2Score++;
        if (p2Score === winningScore) {
            console.log("Game Over!");
            gameOver = true;
            p2Display.classList.add("winner");
        }
        p2Display.textContent = p2Score;
    }
})

//Reset the entire game back to 0 and all contents in elements
reset.addEventListener("click", function () {
    console.log("The game has been reset");
    p1Score = 0;
    p2Score = 0;
    p1Display.textContent = p1Score;
    p1Display.classList.remove("winner");
    p2Display.textContent = p2Score;
    p2Display.classList.remove("winner");
    gameOver = false;
    numInput.disabled = false;
})
//Change runs anytime event is changed. 
numInput.addEventListener("change", function () {
    console.log("Input changed!");
    playingTo.textContent = this.value;
    winningScore = Number(this.value);
})