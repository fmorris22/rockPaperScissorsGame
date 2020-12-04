/* Begin with function 'computerPlay' that randomly
returns either 'rock', 'paper', or 'scissors' */

function computerPlay(randomNumber) {
    if (randomNumber == 0) {
        return "rock";
    } else if (randomNumber == 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

/* Create function 'playRound' that takes two 
parameters, and returns a string that declares
the winner of the round. This function plays a
single round of the game. Make sure the
function is case insensitive. Use 'prompt()'
to get input from the user. */

function playRound(playerSelection, computerSelection) {

    if (playerSelection.toLowerCase() == computerSelection) {
        return "tie";
    } else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "rock") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "paper")) {
        return "win";
    } else if ((playerSelection.toLowerCase() == "rock" && computerSelection == "paper") ||
        (playerSelection.toLowerCase() == "paper" && computerSelection == "scissors") ||
        (playerSelection.toLowerCase() == "scissors" && computerSelection == "rock")) {
        return "loss";
    }

}


/* Write function 'game' that uses 'playRound'
inside of it. This function runs so that the
game is five rounds. */


function game() {
    let scoreToWin = 3;
    let playerScore = 0;
    let computerScore = 0;

    do {
        let playerSelection = prompt("Rock, paper, or scissors?");
        let computerSelection = computerPlay(Math.floor(Math.random() * 3));
        let displayResult = "";
        let roundResult = playRound(playerSelection, computerSelection);

        if (roundResult == "tie") {
            displayResult = "It's a tie! Try again. Score: You: " + playerScore + " Computer: " + computerScore;
            alert(displayResult);
        } else if (roundResult == "win") {
            playerScore++;
            if (playerScore <= 2) {
                displayResult = "You win this round... " + playerSelection + " beats " + computerSelection + "! Score: You: " + playerScore + " Computer: " + computerScore;
                alert(displayResult);
            } else {
                alert("Congratulations! You win!! Final Score: You: " + playerScore + " Computer: " + computerScore);
            }
        } else if (roundResult == "loss") {
            computerScore++;
            if (computerScore <= 2) {
                displayResult = "The computer wins this round... " + computerSelection + " beats " + playerSelection + "! Score: You: " + playerScore + " Computer: " + computerScore;
                alert(displayResult);
            } else {
                alert("Too bad, the computer won the game. :( Final Score: You: " + playerScore + " Computer: " + computerScore);
            }
        }
    } while (playerScore < scoreToWin && computerScore < scoreToWin);

}



/* use console.log() to display the results of 
each round, and the winner at the end. */