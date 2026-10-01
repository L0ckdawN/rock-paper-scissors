    let minNumber = 20;
    let maxNumber = 50;
    let randomNumber = Math.floor(Math.random() * (+maxNumber + 1 - +minNumber)) + +minNumber;

function getComputerChoice(){
   

    if (randomNumber <= 30){
     let computerResult='rock';
     console.log("Computer Choice is:" +"" + computerResult);
     return "rock";
    }
    else if(randomNumber <= 40 && randomNumber > 30){
     let computerResult ="paper";
      console.log("Computer Choice is:" +"" + computerResult);
      return "paper";
    }
    else if(randomNumber <= 50 && randomNumber > 40) {
    let  computerResult ="scissors";
     console.log("Computer Choice is:" +"" + computerResult);
     return "scissors";
}

}

function getHumanChoice() {

const playerChoice = prompt("Choose between rock paper and scissors");

 console.log(playerChoice.toLowerCase());
 return playerChoice.toLowerCase();
}
function playGame(){
let humanScore = 0
let computerScore = 0

function playRound(humanChoice, computerChoice){


    if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Win! Paper beats Rock");
        humanScore++;

    } else if (humanChoice === "rock" && computerChoice === 'scissors'){
        Console.log ("You Win! Rock beat Scissors.");
        humanScore++;

        
    } else if (humanChoice ==='scissors' && computerChoice ==='paper'){
        console.log('You Win! Scissors beats Paper.');
        humanScore++;
    } else if(humanChoice === computerChoice){
        console.log("It's a Draw!");
    }
    
    else{
        console.log("You Lose!");
    }

}
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
    playRound(humanSelection,computerSelection);
}
playGame();