
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
"q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var loss = 0;
var guess = 9;
var letters = [];
var winningLetter = "";

function selectRandomLetter(array){
    var max = array.length - 1;
    var random = Math.floor(Math.random() * max);
    return array[random];
}

function displayAnswer(event) {
    var userGuess = String.fromCharCode(event.which);
    var answerFound = letters.indexOf(userGuess);
    if (answerFound < 0) {
        document.getElementById('game').innerHTML = userGuess
        letters.push(userGuess);
        displayGuesses();
        countGuessesLeft();
        checkAnswer(userGuess);
    }
}

function checkAnswer(userGuess){
    if (userGuess === winningLetter){
        guess = 9;
        document.getElementById('game').innerHTML = 'You Win!!';
        wins++
        document.getElementById('win').innerHTML = wins;
        letters = [];
        winningLetter = selectRandomLetter(alphabet);
    }
}

function countGuessesLeft() {
    guess--;
    document.getElementById('guessLeft').innerHTML = guess;
    if (guess === 0) {
        guess = 9;
        document.getElementById('game').innerHTML = 'You Lose!';
        document.getElementById('result').innerHTML = '0'
        letters = [];
        loss++
        document.getElementById('losses').innerHTML = loss;
    }
}

function displayGuesses() {
    var answers = letters.join(', ')
    document.getElementById('result').innerHTML = answers;
}
// check that the DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
    winningLetter = selectRandomLetter(alphabet);
    document.getElementById('guessLeft').innerHTML = guess;
    document.onkeypress = displayAnswer;
});