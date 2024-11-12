let playerScore = 0;
let computerScore = 0;

const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
};

function checkWinner(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();
    const resultMessage = checkWinner(playerSelection, computerSelection);

    // Update the result message on the page
    document.getElementById('result').textContent = resultMessage;
    // Update the score on the page
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}