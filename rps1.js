let userScore = 0;
let computerScore = 0;
const userWin = document.querySelector('.player-score p');
const computerWin = document.querySelector('.computer-score p');
const displayHands = document.getElementById('displayChoice');
const result = document.getElementById('displayResult');
const rockBtn = document.getElementById('r');
const paperBtn = document.getElementById('p');
const scissorsBtn = document.getElementById('s');

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomNumber = Math.floor(Math.random()*choices.length);
    return choices[randomNumber];
}

function win() {
    userScore++;
    userWin.innerHTML = userScore;
}

function loss() {
    computerScore++;
    computerWin.innerHTML = computerScore;
}

function playGame(userChoice){
    const computerChoice = getComputerChoice();
    if (userChoice === computerChoice){
        displayHands.innerHTML = 'You chose ' + userChoice + '.' + ' Computer chose ' + computerChoice + '.';
        result.innerHTML = 'Draw!';
        return;
    }
    if (userChoice === 'rock'){
        displayHands.innerHTML = 'You chose rock. ' + ' Computer chose ' + computerChoice + '.';
        if(computerChoice === 'scissors'){
            result.innerHTML = 'You Win!';
            win();
            return;
        }
        else {
            result.innerHTML = 'Computer Wins!';
            loss();
            return;
        }
    }
    if (userChoice === 'paper'){
        displayHands.innerHTML = 'You chose paper. ' + ' Computer chose ' + computerChoice + '.';
        if(computerChoice === 'rock'){
            result.innerHTML = 'You Win!';
            win();
            return;
        }
        else {
            result.innerHTML = 'Computer Wins!';
            loss();
            return;
        }
    }
    if (userChoice === 'scissors'){
        displayHands.innerHTML = 'You chose scissors. '  + ' Computer chose ' + computerChoice + '.';
        if(computerChoice === 'paper'){
            result.innerHTML = 'You Win!';
            win();
            return;
        }
        else {
            result.innerHTML = 'Computer Wins!';
            loss();
            return;
        }
    }
}

function game() {
    rockBtn.addEventListener('click', function(){
        playGame("rock");
    })

    paperBtn.addEventListener('click', function(){
        playGame("paper");
    })

    scissorsBtn.addEventListener('click', function(){
        playGame("scissors");
    })
}

game();
