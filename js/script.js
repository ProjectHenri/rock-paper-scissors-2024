const buttons = document.querySelectorAll("button");
let currentState = document.querySelector("#current-state");
let playerScore = document.querySelector("#player .score");
let computerScore = document.querySelector("#computer .score");

buttons.forEach(button => button.addEventListener("click", playRound));
buttons.forEach(button => button.addEventListener('click', toggleState));

function toggleState(e){
    buttons.forEach(button => button.classList.remove('active'));
    e.target.classList.add('active');
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

function playRound(playerSelection){

    let playerChoice = playerSelection.target.dataset.selection;
    let computerChoice = getComputerChoice();
    let result;

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

      updateGame(result, playerChoice, computerChoice);

}

function updateGame(result, playerChoice, computerChoice){

    switch(result){
        case "tie":
            currentState.textContent = `It's a tie, you both chose ${playerChoice}!`;
            break;
        case "lose":
            currentState.textContent = `You lose, ${computerChoice} beats ${playerChoice}!`;
            computerScore.textContent = ++computerScore.textContent;

            break;
        case "win":
            currentState.textContent = `You win, ${playerChoice} beats ${computerChoice}!`;
            playerScore.textContent = ++playerScore.textContent;

    }

    if(playerScore.textContent === "5" || computerScore.textContent === "5"){
        currentState.textContent = `Game over, you ${result} with a result of ${playerScore.textContent} to ${computerScore.textContent}! 
        Pick an option to start a new game.`;
        playerScore.textContent = 0;
        computerScore.textContent = 0;
    }

}

