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
console.log(getComputerChoice());

// this code above will return rock, paper or scissors at random.