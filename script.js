function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
  }

function getComputerChoice() {
    let randomNumber = getRandomIntInclusive(1,3);
    let computerChoice;
    console.log(randomNumber);

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