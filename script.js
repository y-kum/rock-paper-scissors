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
let conputerSelection;
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
let playerSelection = playerPlay();
console.log(playerSelection);



