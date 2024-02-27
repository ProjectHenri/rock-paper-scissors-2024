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

console.log(getComputerChoice());