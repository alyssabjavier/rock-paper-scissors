//make computer choose rock, paper, or scissors
function getComputerChoice(items) {
    return items[Math.floor(Math.random()*items.length)];   
  }
  
  let items = ['rock', 'paper', 'scissors'];
  let roundWinner = '';
  let playerScore = 0;
  let computerScore = 0;
  
  //1 round of game
  function playRound() {
  //get computer choice
      let computerSelection = getComputerChoice(items);
          console.log(computerSelection);
  //get player choice
      let playerSelection = prompt("Rock, paper, or scissors?");
  
  //if tie
      if (playerSelection.toLowerCase() === computerSelection) {
          roundWinner = 'tie';
          alert('No winner this round!');
  } 
  
  //if player loses
      if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'paper' ||
      playerSelection.toLowerCase() === 'paper' && computerSelection === 'scissors' ||
      playerSelection.toLowerCase() === 'scissors' && computerSelection === 'rock') {
          roundWinner = 'computer';
          computerScore++;
          alert('You lose this round!')
  } 
  
  //if player wins
      if (playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors' || 
      playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ||
      playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
          roundWinner = 'player';
          playerScore++;
          alert('You win this round!')      
      }
  }
  
  //play full game
  function game() {
      //play 5 rounds and keep track of score
      playRound();
      console.log(playerScore);
      console.log(computerScore);
  
      playRound();
      console.log(playerScore);
      console.log(computerScore);
  
      playRound();
      console.log(playerScore);
      console.log(computerScore);
  
      playRound();
      console.log(playerScore);
      console.log(computerScore);
  
      playRound();
      console.log(playerScore);
      console.log(computerScore);
  
      //declare winner by comparing scores
      if (playerScore > computerScore) {
          alert(playerScore + ' to ' + computerScore + ', ' + 'You won the game!')
      }
  
      if (computerScore > playerScore) {
          alert(playerScore + ' to ' + computerScore + ', ' + 'You lost the game!')
      }
  
      if (playerScore === computerScore) (
          alert(playerScore + ' to ' + computerScore + ', ' + 'The game is a tie!')
      )
  }
  
  game();