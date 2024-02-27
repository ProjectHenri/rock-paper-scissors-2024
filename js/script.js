function getComputerChoice(){

    let randomNumber = Math.random();
    let computerChoice;

    if( randomNumber <= 0.33 ){
        
        computerChoice = "scissors";

    }
    else if( randomNumber <= 0.66 ){

        computerChoice = "paper"

    }
    else{

        computerChoice = "rock"

    }

    return computerChoice;

}

function playRound(playerChoice, computerSelection){

    let result;
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice === computerSelection){

        result = "It's a tie!";

    }else if (

            (playerChoice === "rock" && computerSelection === "scissors" ) ||
            (playerChoice === "paper" && computerSelection === "rock" ) ||
            (playerChoice === "scissors" && computerSelection === "paper")

        ){
        
            result = "You win!"

    }else{
            
        result = "You lost!"

    }

    return result;

}

function playGame(){

    let playerScore = 0;
    let computerScore = 0;
    let roundResult;

    for (let i = 0; i < 5; i++){

        let playerChoice = prompt("What is your choice?");
        let computerChoice = getComputerChoice();
        roundResult = playRound(playerChoice, computerChoice);

        if (roundResult === "You win!"){

            playerScore++;

        }else if (roundResult === "You lost!"){

            computerScore++;
        }

    }

    if (playerScore === computerScore){

        return `It's a tie with a score of ${playerScore} to ${computerScore}!`;

    }else if (playerScore > computerScore){

        return `You win with a score of ${playerScore} to ${computerScore}!`;

    }else{

        return `You lose with a score of ${playerScore} to ${computerScore}!`;

    }
}
