let computerSelection;
let playerScore = 0;
let computerScore = 0;
let countScore = 5;

function getComputerChoice() {
  const rps = ["Rock", "Paper", "Scissors"];
  const randomRPS = rps[Math.floor(Math.random() * rps.length)];
  console.log(`Computer choose ${randomRPS}`);
  computerSelection = randomRPS;
  return randomRPS;
}
function playRound(playerSelection, computerSelection) {
  if (!playerSelection) return "You're not choose anything or spell it wrong";
  if (playerScore === countScore || computerScore === countScore) {
    declareWinner();
    return;
  }
  const playerSelectionLowerCase = playerSelection.toLowerCase();
  const computerSelectionLowerCase = computerSelection.toLowerCase();
  if (playerSelectionLowerCase === "rock") {
    if (computerSelectionLowerCase === "paper") {
      changeComputerScore();
      showLoseResult(playerSelectionLowerCase, computerSelectionLowerCase);
      return "You Lose! Paper beats Rock";
    } else if (computerSelectionLowerCase === "scissors") {
      changePlayerScore();
      showWinResult(playerSelectionLowerCase, computerSelectionLowerCase);
      return "You Win! Rock beats Scissors";
    } else {
      result.textContent = "Draw";
      return "Draw";
    }
  }
  if (playerSelectionLowerCase === "paper") {
    if (computerSelectionLowerCase === "scissors") {
      showLoseResult(playerSelectionLowerCase, computerSelectionLowerCase);
      console.log("You Lose! Scissors beats Paper");
      return "You Lose! Scissors beats Paper";
    } else if (computerSelectionLowerCase === "rock") {
      showWinResult(playerSelectionLowerCase, computerSelectionLowerCase);
      console.log("You Win! Paper beats Rock");
      return "You Win! Paper beats Rock";
    } else {
      result.textContent = "Draw";
      return "Draw";
    }
  }
  if (playerSelectionLowerCase === "scissors") {
    if (computerSelectionLowerCase === "rock") {
      showLoseResult(playerSelectionLowerCase, computerSelectionLowerCase);
      console.log("You Lose! Rock beats Scissors");
      return "You Lose! Rock beats Scissors";
    } else if (computerSelectionLowerCase === "paper") {
      showWinResult(playerSelectionLowerCase, computerSelectionLowerCase);
      console.log("You Win! Scissors beats Paper");
      return "You Win! Scissors beats Paper";
    } else {
      result.textContent = "Draw";
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
    changeChooseText(e.target.id);
  });
});

const playerScorePath = document.querySelector(
  "body > div.score-container > div.score-number-container > div:nth-child(1)"
);
function changePlayerScore() {
  playerScore += 1;
  playerScorePath.textContent = playerScore;
  return;
}
const computerScorePath = document.querySelector(
  "body > div.score-container > div.score-number-container > div:nth-child(2)"
);
function changeComputerScore() {
  computerScore += 1;
  computerScorePath.textContent = computerScore;
  return;
}
function changeChooseText(text) {
  if (playerScore === countScore || computerScore === countScore) {
    return;
  }
  const playerChooseText = document.querySelector("#playerChoose");
  const computerChooseText = document.querySelector("#computerChoose");
  playerChooseText.textContent = "";
  playerChooseText.textContent += `You choose ${capitalizeFirstChar(text)}`;
  computerChooseText.textContent = "";
  computerChooseText.textContent += `Computer choose ${computerSelection}`;
}

const result = document.querySelector("body > div.result");

function showWinResult(playerSelection, computerSelection) {
  result.textContent = `You Win! ${capitalizeFirstChar(
    playerSelection
  )} beats ${capitalizeFirstChar(computerSelection)}`;
}
function showLoseResult(playerSelection, computerSelection) {
  result.textContent = `You Lose! ${capitalizeFirstChar(
    computerSelection
  )} beats ${capitalizeFirstChar(playerSelection)}`;
}

function capitalizeFirstChar(str) {
  if (str.length === 0) {
    return str;
  }
  const firstChar = str.charAt(0).toUpperCase();
  const remainingChars = str.slice(1);
  return firstChar + remainingChars;
}

const winnerText = document.querySelector("body > div.declare-winner");

function declareWinner() {
  if (playerScore > computerScore) {
    winnerText.textContent = "You Win! Human still better than computer";
  } else if (playerScore < computerScore) {
    winnerText.textContent = "You Lose! A.I. will conquer the world";
  } else {
    winnerText.textContent = "Draw";
  }
}

function reset() {
  playerScore = 0;
  computerScore = 0;
  computerScorePath.textContent = computerScore;
  playerScorePath.textContent = playerScore;
  result.textContent = "";
  playerChooseText = "";
  computerChooseText = "";
}
const resetBtn = document.querySelector("#reset");
resetBtn.addEventListener("click", reset);
