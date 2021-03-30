// Define player and computer scores
let playerScore = 0
let computerScore = 0

// Computer's turn

function computerPlay() {
let number = Math.random() * 3;
if (number <= 1) {
    return "rock";
}
else if (number <= 2) {
        return "paper";
    }
else {
    return "scissors";
}
}

// Play round - human v computer

function playRound(playerSelection, computerSelection) {
playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
computerSelection = computerPlay();

if(
    (playerSelection === "rock" && computerSelection === "scissors")
    || (playerSelection === "paper" && computerSelection === "rock")  
    || (playerSelection === "scissors" && computerSelection === "paper")
)
    {
        playerScore++;
    return `You win - ${playerSelection} beats ${computerSelection}! Score: You ${playerScore} - ${computerScore} Computer`;
}

else if(
(playerSelection === "rock" && computerSelection === "paper")
|| (playerSelection === "paper" && computerSelection === "scissors")
|| (playerSelection === "scissors" && computerSelection === "rock")
)
{
    computerScore++;
    return `You lose - ${computerSelection} beats ${playerSelection}! Score: You ${playerScore} - ${computerScore} Computer`
}

else if(playerSelection === computerSelection)
{ 
return `It's a tie! Computer also chose ${computerSelection}. Score: You ${playerScore} - ${computerScore} Computer`;
}

else {
    return "Hey, you can't play with that! Please choose rock, paper or scissors.";
}
}

// 5-round game function

function game() {
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());
    console.log(playRound());



if (playerScore > computerScore) {
    console.log(`You win! Final score: You ${playerScore} - ${computerScore} Computer`)
}
else if(playerScore < computerScore) {
    console.log(`You lose! Final score: You ${playerScore} - ${computerScore} Computer`)
}

else {
    console.log(`It's a tie! Final score: You ${playerScore} - ${computerScore} Computer`)
}
}