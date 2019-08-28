
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






userGuess.textContent = userPick;
userWin.textContent = win;
userLose.textContent = lose;
userGuessCount.textContent = count; 