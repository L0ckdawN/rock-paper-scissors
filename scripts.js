    let minNumber = 20;
    let maxNumber = 50;
    let randomNumber = Math.floor(Math.random() * (+maxNumber + 1 - +minNumber)) + +minNumber;

function getComputerChoice(){
   

    if (randomNumber <= 30){
     let computerResult='Rock';
     console.log("Computer Choice is:" +"" + computerResult);
    }
    else if(randomNumber <= 40 && randomNumber > 30){
     let computerResult ="Paper";
      console.log("Computer Choice is:" +"" + computerResult);
    }
    else if(randomNumber <= 50 && randomNumber > 40) {
    let  computerResult ="Scissors";
     console.log("Computer Choice is:" +"" + computerResult);
}

}
console.log(randomNumber);
console.log(getComputerChoice());

function getHumanChoice() {

let playerChoice = prompt("Choose between rock paper and scissors");
return playerChoice;
 
}

