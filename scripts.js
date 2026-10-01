    let minNumber = 20;
    let maxNumber = 50;
    
function getComputerChoice(){

    let randomNumber = Math.floor(Math.random() * (+maxNumber + 1 - +minNumber)) + +minNumber;


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
        console.log ("You Win! Rock beat Scissors.");
        humanScore++;

        
    } else if (humanChoice ==='scissors' && computerChoice ==='paper'){
        console.log('You Win! Scissors beats Paper.');
        humanScore++;
    } else if(humanChoice === computerChoice){
        console.log("It's a Draw!");
    }
    
    else{
        console.log("You Lose!");
        computerScore++;
    }

}
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    playRound(getHumanChoice(),getComputerChoice());
    
    if(humanScore > computerScore){
        console.log(`Player has won:  ${humanScore} -  ${computerScore}`);
    
    }else if(humanScore === computerScore){
        console.log(`You have tied with the score ${humanScore} - ${computerScore}`)
    }
    else {
        console.log(`Computer has won: "  ${computerScore} - ${humanScore}`);
    }

}
playGame();