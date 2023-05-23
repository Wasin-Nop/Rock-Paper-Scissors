function getComputerChoice() {
  const rps = ["Rock", "Paper", "Scissors"];
  const randomRPS = rps[Math.floor(Math.random() * rps.length)];
  console.log(`Computer choose ${randomRPS}`);
  return randomRPS;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  if (!playerSelection) return "You're not choose anything or spell it wrong";
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  const computerSelectionLowerCase = computerSelection.toLowerCase();
  if (playerSelectionLowerCase === "rock") {
    if (computerSelectionLowerCase === "paper") {
      console.log("You Lose! Paper beats Rock");
      return "You Lose! Paper beats Rock";
    } else if (computerSelectionLowerCase === "scissors") {
      console.log("You Win! Rock beats Scissors");
      return "You Win! Rock beats Scissors";
    } else {
      console.log("Draw");
      return "Draw";
    }
  }
  if (playerSelectionLowerCase === "paper") {
    if (computerSelectionLowerCase === "scissors") {
      console.log("You Lose! Scissors beats Paper");
      return "You Lose! Scissors beats Paper";
    } else if (computerSelectionLowerCase === "rock") {
      console.log("You Win! Paper beats Rock");
      return "You Win! Paper beats Rock";
    } else {
      console.log("Draw");
      return "Draw";
    }
  }
  if (playerSelectionLowerCase === "scissors") {
    if (computerSelectionLowerCase === "rock") {
      console.log("You Lose! Rock beats Scissors");
      return "You Lose! Rock beats Scissors";
    } else if (computerSelectionLowerCase === "paper") {
      console.log("You Win! Scissors beats Paper");
      return "You Win! Scissors beats Paper";
    } else {
      console.log("Draw");
      return "Draw";
    }
  } else {
    console.log("You're not choose anything or spell it wrong");
  }
}

const rpsContainer = document.querySelectorAll("div");

rpsContainer.forEach((button) => {
  button.addEventListener("click", (e) => {
    playRound(e.target.id, getComputerChoice());
  });
});

// function playroundTextResult(playerSelection, computerSelection) {
//   return ;
// }
