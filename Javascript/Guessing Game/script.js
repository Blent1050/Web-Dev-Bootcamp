
//create secretNumber
var secretNumber = 7;
var userGuess = prompt("Guess a number between 1-10");

if (Number(userGuess) === secretNumber) {
    console.log("You guessed Correctly!");
}
else if(userGuess > secretNumber){
    console.log("To high!");
}
else{
    console.log("To low!");
}
