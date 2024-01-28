function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

function getComputerChoice() {
    let randomNumber = getRandomIntInclusive(1,3);
    let computerChoice;

    switch(randomNumber) {
        case 1: 
            computerChoice = 'rock';
            break;
        case 2: 
            computerChoice = 'paper';
            break;
        case 3: 
            computerChoice = 'scissors';
            break;
        default: 
            computerChoice = 'error';
    }

    return computerChoice;
}

function playRound(playerSelection, computerSelection) {
    let playerSelectionLowerCase = playerSelection.toLowerCase();
    let winner;

    if (computerSelection == 'paper') {
        if (playerSelectionLowerCase == 'paper') {
            winner = 'tie';
        } else if (playerSelectionLowerCase == 'rock') {
                winner = 'computer';
        } else if (playerSelectionLowerCase == 'scissors') {
            winner = 'player';
        } else {
            winner = 'error';
        }
    } else if (computerSelection == 'rock') {
        if (playerSelectionLowerCase == 'paper') {
            winner = 'player';
        } else if (playerSelectionLowerCase == 'rock') {
                winner = 'tie';
        } else if (playerSelectionLowerCase == 'scissors') {
            winner = 'computer';
        } else {
            winner = 'error';
        }
    } else if (computerSelection == 'scissors') {
        if (playerSelectionLowerCase == 'paper') {
            winner = 'computer';
        } else if (playerSelectionLowerCase == 'rock') {
                winner = 'player';
        } else if (playerSelectionLowerCase == 'scissors') {
            winner = 'tie';
        } else {
            winner = 'error';
        }
    } 

    let returnMessage;

    if (winner == 'error') {
        returnMessage = "It's an error. Computer choice is " + computerSelection + " and player choice is " + playerSelectionLowerCase + ". Those are not valid options.";
    } else if (winner == 'tie') {
        returnMessage = "It's a tie. Both players chose " + computerSelection;
    } else {
        returnMessage = winner + " won. "
        if (winner == 'computer') {
            returnMessage += computerSelection + " beats " + playerSelectionLowerCase;
        } else {
            returnMessage += playerSelection + " beats " + computerSelection;
        }
    }

    return returnMessage;
}
   
const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));