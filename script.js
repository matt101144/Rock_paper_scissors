const getComputerChoice = () => {
    const randomNumber = Math.floor(Math.random() *3);
        switch (randomNumber){
            case 0:
            return "rock";

            case 1:
            return "paper";
            
            case 2:
            return "scissors";
        } 
}


// this code above will return rock, paper or scissors at random.

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper") 
    ){
        return `congratulations, ${playerSelection} beats ${computerSelection}`;
    }
    else {
        return `you lose! ${computerSelection} beats ${playerSelection}`
    }
}

// console.log(checkWinner("paper", getComputerChoice())); 



function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("pick rock, paper, or scissors!");
        const computerSelection = getComputerChoice();
        console.log(checkWinner(playerSelection, computerSelection));
    }
}
    game();
