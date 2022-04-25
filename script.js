// a function for computer's selection
function computerPlay() {
    let num;
    let choice;
    num = Math.floor(Math.random()*3);
    if (num === 0) {
        choice = 'Rock';
    }
    else if (num === 1) {
        choice = 'Paper';
    }
    else {
        choice = 'Scissors';
    }
    return choice;
}
let computerSelection;
computerSelection = computerPlay();
console.log(computerSelection);

// a function for user's selection

function playerPlay() {
    input = prompt('Rock? Paper? Scissors?');

    // making multiple replacements without using for loop

    let caseinsensitiveRock = input.replace(/rock/gi,'Rock');
    let caseinsensitiveRockPaper = caseinsensitiveRock.replace(/paper/gi,'Paper');
    let caseinsensitiveRockPaperScissors = caseinsensitiveRockPaper.replace(/scissors/gi,'Scissors');
    let playerInput;
    if (caseinsensitiveRockPaperScissors === 'Rock' || caseinsensitiveRockPaperScissors ==='Paper' || caseinsensitiveRockPaperScissors === 'Scissors') {
        playerInput = caseinsensitiveRockPaperScissors;
    }
    else {
        alert('You don\'t know how to play');
        return ('You don\'t know how to play');
    }
    return playerInput;
}
let playerSelection;
playerSelection = playerPlay();
console.log(playerSelection);

// a function to play one round of rock paper scissors

function playRound(computerSelection, playerSelection) {
    if ((computerSelection === 'Rock') && (playerSelection === 'Paper')) {
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if ((computerSelection === 'Paper') && (playerSelection === 'Scissors')) {
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if ((computerSelection === 'Scissors') && (playerSelection === 'Rock')) {
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    }
    else if (computerSelection === playerSelection) {
        return ('It\'s a draw!');
    }
    else if ((playerSelection !== 'Rock') || (!playerSelection !== 'Paper') || (!playerSelection !== 'Scissors')) {
        return ('Try again!');
    }
    else {
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}

alert(playRound(computerSelection, playerSelection));
console.log(playRound(computerSelection, playerSelection));


