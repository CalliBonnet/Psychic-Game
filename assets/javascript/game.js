
//This is determining the letters that the computer can pick from 
const computerChoices = ["a","b","c"];

//This is gathering the ID's from the HTML file & creating new varibles here 
var userGuess = document.getElementById("user-Guess");
var userWin = document.getElementById("user-win");
var userLose = document.getElementById("user-lose");
var userGuessCount = document.getElementById("user-guess-count");
var pastUserGueses = document.getElementById("past-user-guess");

//This is declaring what the win, lose, and count values start at 
let win = 0; 
let lose = 0; 
let count = 10; 

//This is creating en event & the event is the user picking/Guesses a letter 
document.onkeyup = function (event) {
    let userPick = event.key;
    console.log(userPick);

    let computerLetterPick = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerLetterPick);

    //The below are the if/else statements 
    if ((userPick === "a" && computerLetterPick === "a") || (userPick === "b" && computerLetterPick === "b") || (userPick === "c" && computerLetterPick === "c")) {
        win++;
        console.log("You Win!");
    } else {
        lose++;
        console.log("you lose!!");
    }


    //this is attempting to decrease the user count by 1 
    let decreaseUserGuessCout = function () {
        count = count -1;
        console.log("Decreasing the user guess count");
    }

    //this is attempting to determine what happens when the user guess count = 0 
    let NoMoreUserGuesses = function (){
        if (count === 0) {

        }
    }
    


    userGuess.textContent = userPick;
    computerLetter.textContent = computerLetterPick; 
    userWin.textContent = win;
    userLose.textContent = lose;
    userGuessCount.textContent = count; 
}
