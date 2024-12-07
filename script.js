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

    
    document.getElementById('result').textContent = resultMessage;
    

    if (playerScore === 5 || computerScore === 5) {
        const winner = playerScore === 5 ? 'Player' : 'Computer';
        document.getElementById('result').textContent = `${winner} wins the game!`;
        
        
        playerScore = 0;
        computerScore = 0;
    }

    
    document.getElementById('score').textContent = `Player: ${playerScore} | Computer: ${computerScore}`;
}