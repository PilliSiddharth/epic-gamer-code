const choices = ['rock', 'paper', 'scissors'];
const models = {
  rock: '<a-sphere radius="0.5" color="black"></a-sphere>',
  paper: '<a-box width="1" height="1" depth="0.1" color="white"></a-box>',
  scissors: '<a-triangle color="green" vertex-a="0 0.5 0" vertex-b="-0.5 -0.5 0" vertex-c="0.5 -0.5 0"></a-triangle>'
};

function choose(playerChoice) {
  const playerEntity = document.querySelector('#playerChoice');
  const computerEntity = document.querySelector('#computerChoice');

  // Clear previous choices
  playerEntity.innerHTML = '';
  computerEntity.innerHTML = '';

  // Display player choice
  playerEntity.insertAdjacentHTML('beforeend', models[playerChoice]);

  // Random computer choice
  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  computerEntity.insertAdjacentHTML('beforeend', models[computerChoice]);

  // Determine winner
  const result = determineWinner(playerChoice, computerChoice);
  alert(result);
}

function determineWinner(player, computer) {
  if (player === computer) {
    return "It's a tie!";
  }
  if (
    (player === 'rock' && computer === 'scissors') ||
    (player === 'paper' && computer === 'rock') ||
    (player === 'scissors' && computer === 'paper')
  ) {
    return 'You win!';
  } else {
    return 'You lose!';
  }
}