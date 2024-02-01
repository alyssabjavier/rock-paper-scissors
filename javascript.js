//define variables
let playerChoice = '';
let items = ['rock', 'paper', 'scissors'];
let roundWinner = '';
let playerScore = 0;
let computerScore = 0;
let isGameOver = false;

//functions to be called when button clicked
//computer choice function
function getComputerChoice(items) {
    return items[Math.floor(Math.random()*items.length)];   
  }

//1 round of game function
function playRound(playerChoice, computerChoice) {

  //if tie
  if (playerChoice === computerChoice) {
    result = 'it is a tie';

  }

    //if player loses
    if (playerChoice === 'rock' && computerChoice === 'paper' ||
    playerChoice === 'paper' && computerChoice === 'scissors' ||
    playerChoice.toLowerCase() === 'scissors' && computerChoice === 'rock') {
        result = 'you lose';
        computerScore++;
        console.log(computerScore);
} 

//if player wins
    if (playerChoice === 'rock' && computerChoice === 'scissors' || 
    playerChoice === 'paper' && computerChoice === 'rock' ||
    playerChoice === 'scissors' && computerChoice === 'paper') {
        result = 'you win this time';
        playerScore++;
        console.log(playerScore);  
    }

//game over
let gameOver = document.getElementById('gameover');
if (playerScore === 5) {
  gameOver.textContent = 'the game is over. you won surprisingly';
  isGameOver = true;
  console.log(isGameOver);
  document.getElementById('rock').removeEventListener('click', handleClick);
  document.getElementById('paper').removeEventListener('click', handleClick);
  document.getElementById('scissors').removeEventListener('click', handleClick);
};
if (computerScore === 5) {
  gameOver.textContent = 'the game is over. you lost lmao'
  isGameOver = true;
  console.log(isGameOver);
  document.getElementById('rock').removeEventListener('click', handleClick);
document.getElementById('paper').removeEventListener('click', handleClick);
document.getElementById('scissors').removeEventListener('click', handleClick);
};
}

function handleClick(event) {
  //get computer choice
  let computerChoice = getComputerChoice(items);
  console.log(computerChoice);
  //get player choice
  let playerChoice = event.target.id;
  console.log(playerChoice);
  //play round
  let round = playRound(playerChoice, computerChoice);
  document.getElementById('results').textContent = result;
  document.getElementById('score').textContent = `player: ${playerScore} computer: ${computerScore}`;
}

//add event listeners to buttons
document.getElementById('rock').addEventListener('click', handleClick);
document.getElementById('paper').addEventListener('click', handleClick);
document.getElementById('scissors').addEventListener('click', handleClick);