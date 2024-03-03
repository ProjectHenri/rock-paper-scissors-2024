const buttons = document.querySelectorAll("button");

buttons.forEach(button => button.addEventListener("click", playRound));

function playRound(playerSelection){

    let playerChoice = playerSelection.target.dataset.selection;
    let computerChoice = getComputerChoice();
    let result="";

    if (playerChoice === computerChoice) {
        result = "tie";
      } else if (
        (playerChoice === "rock" && computerChoice === "paper") ||
        (playerChoice === "paper" && computerChoice === "scissors") ||
        (playerChoice === "scissors" && computerChoice === "rock")
      ) {
        result = "lose";
      } else {
        result = "win";
      }

}


function getComputerChoice(){

    let choice;
    let random = Math.floor(Math.random() * 3);

    switch(random){

        case 0:
            choice = "rock";
            break;

        case 1:
            choice = "paper";
            break;

        case 2:
            choice ="scissors";
            break;
    }

    return choice;

}

