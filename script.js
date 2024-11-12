// Function to randomly generate the computer's choice
function getComputerChoice() {
  let x = Math.floor(Math.random() * 3); // Generates a random number between 0 and 2
  if (x === 0) {
    return "rock"; // Returns "rock" if x is 0
  } else if (x === 1) {
    return "paper"; // Returns "paper" if x is 1
  } else if (x === 2) {
    return "scissors"; // Returns "scissors" if x is 2
  }
}

console.log(getComputerChoice()); // Test to see what getComputerChoice() outputs in the console

// Function to get the player's choice
function getHumanChoice() {
  const choices = ["rock", "paper", "scissors"];
  let userInput = prompt("Enter your choice (rock, paper, or scissors)").toLowerCase();
  
  // Check if the user's choice is valid
  if (choices.includes(userInput)) {
    console.log("Valid choice!");
    return userInput;  // Returns the valid input
  } else {
    console.log("Invalid choice. Try again.");
    return getHumanChoice();  // Calls getHumanChoice again if input is invalid
  }
}

// Selects the buttons and result/score divs from the HTML
const rockButton = document.querySelector("#Rock");
const paperButton = document.querySelector("#Paper");
const scissorButton = document.querySelector("#Scissors");
const divResult = document.querySelector("#Results");
const divScore = document.querySelector("#Score");

// Event listeners for each button, triggering a round with the selected choice
rockButton.addEventListener('click', () => { playRound('Rock', getComputerChoice() ); });
paperButton.addEventListener('click', () => { playRound('Paper', getComputerChoice()); });
scissorButton.addEventListener('click', () => { playRound('Scissors', getComputerChoice()); });

// Variables to keep track of each player's score
let humanScore = 0;
let computerScore = 0;  

// Function to play one round of Rock-Paper-Scissors
function playRound(humanChoice, computerChoice) {
  
  humanChoice = humanChoice.toLowerCase();
  computerChoice = computerChoice.toLowerCase();
  
  // Determine the round result and update the result div
  if (humanChoice === computerChoice) {
    divResult.textContent = 'It\'s a tie!';  
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    divResult.textContent = "You win! Rock beats Scissors";
    humanScore++; // Increments player's score by 1
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    divResult.textContent = "You win! Scissors beats Paper";
    humanScore++; 
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    divResult.textContent = "You win! Paper beats Rock";
    humanScore++; 
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    divResult.textContent = "You lose! Rock beats Scissors";
    computerScore++; 
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    divResult.textContent = "You lose! Scissors beats Paper";
    computerScore++; 
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    divResult.textContent = "You lose! Paper beats Rock";
    computerScore++; 
  } else {  
    divResult.textContent = "Invalid answer, try again"; // In case of unexpected input
  }
    
  // Updates the score display after each round
  divScore.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

  // Check if someone has won the game by reaching 5 points
  if (humanScore == 5) {
    divResult.textContent += "\nYou win the game!"; // Adds a game-winning message if the player reaches 5 points
    resetGame();
  } else if (computerScore == 5) {
    resetGame();
    divResult.textContent += "\nComputer wins the game!"; // Adds a game-winning message if the computer reaches 5 points
  }
}

function resetGame(){
  humanScore = 0;
  computerScore = 0;
  divScore.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;

}

  // for(let round = 0; round < 5; round++){
  //    let humanChoice = getHumanChoice();
  //    let computerChoice = getComputerChoice();
  
  //    playRound(humanChoice, computerChoice);
  // }

// function resetGame() {
//   humanScore = 0;
//   computerScore = 0;
//   divScore.textContent = `Player: ${humanScore} - Computer: ${computerScore}`;
// }






  