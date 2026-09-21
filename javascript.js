//ask user for input
function getHumanChoice() {
    let userInput = prompt("What is your bet? Rock, Paper, or Scissors? ");
    return userInput;
}

console.log("You chose the " + getHumanChoice());

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

console.log("The computer chose the " + getComputerChoice());

//the algorithm that will calculate the options given
function playRound(computer, human) {
    

    const computer = getComputerChoice().toLocaleLowerCase();
    const human = getHumanChoice().toLocaleLowerCase();

    if (computer === human) {
        return console.log("It's a draw!");
    }

    else if (computer === "rock" && human === "paper") {
        return 

    }

}



playRound (computerChoice, humanChoice)

let computerScore = 0;
let humanScore = 0;

/*
How many possible situations are there?
rock beats scissors, scissors beat paper, paper beats rock
- assign values and calculate?
putr different if -else values?

*/