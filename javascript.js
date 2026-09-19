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

console.log(getComputerChoice());
