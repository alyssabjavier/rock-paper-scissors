//make computer choose rock, paper, or scissors
function getComputerChoice(items) {
  return items[Math.floor(Math.random()*items.length)];   
}

let items = ['rock', 'paper', 'scissors'];

let computerSelection = getComputerChoice(items);
console.log(computerSelection);


//get player choice
let playerSelection = prompt("Rock, paper, or scissors?");


//game

let roundWinner = '';
let playerScore = 0;
let computerScore = 0;


if (playerSelection.toLowerCase() === computerSelection) {
   roundWinner = 'tie';
    alert('No winner!');
    console.log(playerScore);
    console.log(roundWinner);
} 

if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper' ||
    playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors' ||
    playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
    roundWinner = 'computer';
    computerScore++;
    console.log(computerScore);
    console.log(roundWinner);
    alert('You lose!')
} 
if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors' || 
    playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ||
    playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        roundWinner = 'player';
        playerScore++;
        console.log(playerScore);
        console.log(roundWinner);
        alert('You win!')      
    }

