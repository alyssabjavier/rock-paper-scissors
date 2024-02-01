const rockBtn = document.querySelector('#rockbtn');
const paperBtn = document.querySelector('#paperbtn');
const scissorsBtn = document.querySelector('#scissorsbtn');

let playerSelection = '';

rockBtn.addEventListener('click', () => {
    playerSelection = 'rock';
    alert(playerSelection);
});

paperBtn.addEventListener('click', () => {
    playerSelection = 'paper';
    alert(playerSelection);
});

scissorsBtn.addEventListener('click', () => {
    playerSelection = 'scissors';
    alert(playerSelection);
});