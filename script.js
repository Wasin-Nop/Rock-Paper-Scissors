function getComputerChoice() {
  const rps = ["Rock", "Paper", "Scissors"];
  const randomRPS = rps[Math.floor(Math.random() * rps.length)];
  console.log(`Computer choose ${randomRPS}`);
  return randomRPS;
}

function play(playerSelection, computerSelection) {
  if (!playerSelection) return "You're not choose anything";
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  const computerSelectionLowerCase = computerSelection.toLowerCase();
  if (playerSelectionLowerCase === "rock") {
    if (computerSelectionLowerCase === "paper") {
      return "You Lose! Paper beats Rock";
    } else if (computerSelectionLowerCase === "scissors") {
      return "You Win! Rock beats Scissors";
    } else {
      return "Draw";
    }
  }
  if (playerSelectionLowerCase === "paper") {
    if (computerSelectionLowerCase === "scissors") {
      return "You Lose! Scissors beats Paper";
    } else if (computerSelectionLowerCase === "rock") {
      return "You Win! Paper beats Rock";
    } else {
      return "Draw";
    }
  }
  if (playerSelectionLowerCase === "scissors") {
    if (computerSelectionLowerCase === "rock") {
      return "You Lose! Rock beats Scissors";
    } else if (computerSelectionLowerCase === "paper") {
      return "You Win! Scissors beats Paper";
    } else {
      return "Draw";
    }
  }
}
