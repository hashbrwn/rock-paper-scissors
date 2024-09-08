
function getComputerChoice () {
  let x = Math.floor(Math.random() * 3);
if (x === 0){
   return "rock"
} else if (x === 1){
  return "paper"
} else if (x === 2){
  return "scissors"
} 

}

console.log(getComputerChoice());


function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let userInput = prompt("Enter your choice (rock, paper, or scissors)").toLowerCase();
  
  // Check if the user input is one of the valid choices
  if (choices.includes(userInput)) {
    console.log("Valid choice!");
    return userInput;  // Return the valid input
  } else {
    console.log("Invalid choice. Try again.");
    return getHumanChoice();  // Recursively call getHumanChoice again if input is invalid
  }
}


function playGame(){
  let humanScore = 0;
  let computerScore = 0;  

  function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    computerChoice = computerChoice.toLowerCase();
  
    if (humanChoice === computerChoice) {
      console.log('its a tie ');
    }else if ( humanChoice === "rock" && computerChoice === "scissors" ){
      console.log("you win! rock beats scissors")
      humanScore ++

    }else if (humanChoice === "scissors" && computerChoice === "paper"){
      console.log("you win! scissors beats paper")
      humanScore++ 
    
    } else if (humanChoice === "paper" && computerChoice === "rock"){
      console.log("you win! paper beats rock");
      humanScore++ 
  
    } else if (humanChoice === "scissors" && computerChoice === "rock"){
      console.log("you lose rock beats scissors ")
      computerScore++ 
    } else if (humanChoice === "paper" && computerChoice === "scissors"){
      console.log ("you lose scissors beat paper")
      computerScore++ 
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("you lose paper beats rock ")
      computerScore++ 
    } else {  
      console.log( "invalid answer, try again")  }
     
  }

  for(let round = 0; round < 5; round++){
     let humanChoice = getHumanChoice();
     let computerChoice = getComputerChoice();
  
     playRound(humanChoice, computerChoice);
  }

  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game.");
} else if (computerScore > humanScore) {
    console.log("Computer wins the game.");
} else {
    console.log("It's a tie!");
}


  
}


playGame();
  