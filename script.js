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

// a function to play one round of rock paper scissors

function playRound() {
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
    else {
        return (`You Lose! ${computerSelection} beats ${playerSelection}`);
    }
}


function whoWon() {
    let winner;
    if (playRound() === `You win! ${playerSelection} beats ${computerSelection}`) {
        winner = 'player';
        return (winner);
    }
    else if (playRound() === `You Lose! ${computerSelection} beats ${playerSelection}`) {
        winner = 'computer';
        return (winner);
    }
    else {
        return ('no winner');
    }
}

function game() {
    let x = parseInt(0);
    let playerScore = parseInt(0);
    let computerScore = parseInt(0);

// playing game for five rounds

    for (x=0; x<5; ++x) {
        computerSelection = computerPlay();
        playerSelection = playerPlay();
        console.log(playRound());
        whoWon();
        
        if (whoWon() === 'player') {
            playerScore = playerScore +1;
        }
        else if (whoWon() === 'computer') {
            computerScore = computerScore +1;
        }
        console.log(`You : ${playerScore} Computer : ${computerScore}`)
    }

// comparing scores

    if (playerScore > computerScore) {
        return (`FINAL SCORES You : ${playerScore} Computer : ${computerScore} You win!`)
    }
    else if (playerScore < computerScore) {
        return (`FINAL SCORES You : ${playerScore} Computer : ${computerScore} You lose!`)
    }
    else (playerScore === computerScore) 
        return (`FINAL SCORES You : ${playerScore} Computer : ${computerScore} It's a draw!`)
    
}

console.log(game());