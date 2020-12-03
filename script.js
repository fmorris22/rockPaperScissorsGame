let compChoice = "";
let userScore = 0;
let compScore = 0;
let scoreToWin = 3;

function rockSelection() {
    compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        alert("It's a tie! Rock can't beat another Rock. Try again?")
    } else if (compChoice == 1) {
        compScore++;
        if (userScore == scoreToWin) {
            alert("Game over! You win!! Play again?")
        } else if (compScore == scoreToWin) {
            alert("Game over! The computer won!! Play again?")
        } else {
            alert("The computer wins! Paper beats Rock! Try again?")
        }
    } else {
        userScore++;
        if (userScore == scoreToWin) {
            alert("Game over! You win!! Play again?")
        } else if (compScore == scoreToWin) {
            alert("Game over! The computer won!! Play again?")
        } else {
            alert("You win! Rock beats Scissors! Play again?")
        }
    }

}

function paperSelection() {
    compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        userScore++;
        if (userScore == scoreToWin) {
            alert("Game over! You win!! Play again?")
        } else if (compScore == scoreToWin) {
            alert("Game over! The computer won!! Play again?")
        } else {
            alert("You win! Paper beats Rock! Play again?")
        }

    } else if (compChoice == 1) {
        alert("It's a tie! Paper can't beat Paper. Try again?")
    } else {
        compScore++;
        if (userScore == scoreToWin) {
            alert("Game over! You win!! Play again?")
        } else if (compScore == scoreToWin) {
            alert("Game over! The computer won!! Play again?")
        } else {
            alert("The computer wins! Scissors beats Paper! Try again?")
        }
    }

}

function scissorsSelection() {
    compChoice = Math.floor(Math.random() * 3);
    if (compChoice == 0) {
        compScore++;
        if (userScore == scoreToWin) {
            alert("Game over! You win!! Play again?")
        } else if (compScore == scoreToWin) {
            alert("Game over! The computer won!! Play again?")
        } else {
            alert("The computer wins! Rock beats Scissors! Try again?")
        }
    } else if (compChoice == 1) {
        userScore++
        if (userScore == scoreToWin) {
            alert("Game over! You win!! Play again?")
        } else if (compScore == scoreToWin) {
            alert("Game over! The computer won!! Play again?")
        } else {
            alert("You win! Scissors beats Paper! Play again?")
        }
    } else {
        alert("It's a tie! Scissors can't beat Scissors. Try again?")
    }

}