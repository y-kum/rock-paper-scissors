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
console.log(computerPlay());
