//this is creating the computer gueses 
let computerChoices = ["c", "t", "a"];

//this is getting the elements from within the html so that you cann read them in you JS 
let userPick = document.getElementById("user-Pick");
let computerPick = document.getElementById("computer-Pick");
let winScore = document.getElementById("user-win");
let loseScore = document.getElementById("user-lose");
let guessCount = document.getElementById("user-guess-count"); 

//this is stating what the starting values of the Win, Lose, and Guess Count is
let win = 0;
let lost = 0;
let Count = 10; 

//This is the start of the function 
document.onkeyup = function (event) {
    let userGuess = event.key;
    console.log(userGuess);

    var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];
    console.log(computerGuess);

//This is if the user anf computer guess match 
if ((userGuess === "c" && computerGuess === "c") || (userGuess === "t" && computerGuess === "t") || (userGuess === "a" && computerGuess === "a")) {
  win++
  Count--; 
  console.log("you win!")
}

//This is if the user and computer guess do not match 
if (userGuess !== computerGuess) {
lost++
Count--; 
console.log("You lose!")
}


    userPick.textContent = userGuess;
    computerPick.textContent = computerGuess;
    winScore.textContent = win;
    loseScore.textContent = lost;
    guessCount.textContent = Count; 
}