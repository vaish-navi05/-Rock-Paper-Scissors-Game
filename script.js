let userScore = 0;
let compScore = 0;

const resultDisplay = document.getElementById("result");
const userScoreSpan = document.getElementById("userScore");
const compScoreSpan = document.getElementById("compScore");
const choices = document.querySelectorAll(".choice");
const resetBtn = document.getElementById("resetBtn");

choices.forEach(choice => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("data-choice");
    playGame(userChoice);
  });
});

function playGame(userChoice) {
  const options = ["rock", "paper", "scissors"];
  const compChoice = options[Math.floor(Math.random() * 3)];
  let result = "";

  if (userChoice === compChoice) {
    result = `🤝 Draw! You both chose ${userChoice}`;
  } else if (
    (userChoice === "rock" && compChoice === "scissors") ||
    (userChoice === "paper" && compChoice === "rock") ||
    (userChoice === "scissors" && compChoice === "paper")
  ) {
    result = `✅ You Win! ${userChoice} beats ${compChoice}`;
    userScore++;
  } else {
    result = `❌ You Lose! ${compChoice} beats ${userChoice}`;
    compScore++;
  }

  resultDisplay.innerText = result;
  userScoreSpan.innerText = userScore;
  compScoreSpan.innerText = compScore;
}

resetBtn.addEventListener("click", () => {
  userScore = 0;
  compScore = 0;
  userScoreSpan.innerText = userScore;
  compScoreSpan.innerText = compScore;
  resultDisplay.innerText = "👉 Make your move!";
});
