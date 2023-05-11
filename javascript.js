//make computer choose rock, paper, or scissors
function getComputerChoice(items) {
  return items[Math.floor(Math.random()*items.length)];   
}

let items = ['rock', 'paper', 'scissors'];
let roundWinner = '';
let playerScore = 0;
let computerScore = 0;

//game
function playRound() {
//get computer choice
    let computerSelection = getComputerChoice(items);
        console.log(computerSelection);
//get player choice
    let playerSelection = prompt("Rock, paper, or scissors?");

    if (playerSelection.toLowerCase() === computerSelection) {
        roundWinner = 'tie';
        alert('No winner!');
} 

    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper' ||
    playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors' ||
    playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
        roundWinner = 'computer';
        computerScore++;
        alert('You lose!')
} 
    if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors' || 
    playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ||
    playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        roundWinner = 'player';
        playerScore++;
        alert('You win!')      
    }
}

playRound();
console.log(playerScore);
console.log(computerScore);

playRound();
console.log(playerScore);
console.log(computerScore);

playRound();
console.log(playerScore);
console.log(computerScore);

