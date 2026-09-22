//put this outside so the score doenst loop to one or two
let computerScore = 0;
let humanScore = 0;

while (true) {

//how do I make this infinite?

//ask user for input
function getHumanChoice() {
    let userInput = prompt("What is your bet? Rock, Paper, or Scissors? ");
    return userInput;
}
const humanChoice = getHumanChoice().toLocaleLowerCase();
console.log("You chose the " + humanChoice); 

//generate a random choice
function getComputerChoice() {
    const number = Math.random();

    if (number < 0.33)
    {
        return "rock";
    }
    else if (number < 0.67)
    {
        return "paper";
    }
    else {
        return "scissors";
    }    
}

const computerChoice = getComputerChoice().toLocaleLowerCase();
console.log("The computer chose the " + computerChoice);


//the algorithm that will calculate the options given
function playRound(computer, human) {

    console.log("Comparing:", computer, human, "| Scores before:", computerScore, humanScore);

    if (computer === human) {
        return console.log("It's a draw!");
    }
    else if (computer === "rock" && human === "paper") {
        humanScore++;
        return console.log("Paper beats rock. You win!");
    }
    else if (computer === "paper" && human === "rock") {
        computerScore++;
        return console.log("Paper beats rock. Computer wins!");
    }
    else if (computer === "scissors" && human === "paper") {
        computerScore++;
        return console.log("Scissors beats paper. Computer wins!");
    }
    else if (computer === "paper" && human === "scissors") {
        humanScore++;
        return console.log("Scissors beats paper. You win!");
    }
    else if (computer === "rock" && human === "scissors") {
        computerScore++;
        return console.log("Rock beats scissors. Computer wins!");
    }
    else if (computer === "scissors" && human === "rock") {
        humanScore++;
        return console.log("Rock beats scissors. You win!");
    }
}


playRound (computerChoice, humanChoice)

console.log("Computer score: " + computerScore + "    " +  "Human Score: " + humanScore);

const playAgain = prompt("Do you want to play again? y for yes, n for no")
if (playAgain.toLocaleLowerCase() === "n") {
    break;
}
/*
How many possible situations are there?
rock beats scissors, scissors beat paper, paper beats rock
- assign values and calculate?
put different if -else values?
*/

}