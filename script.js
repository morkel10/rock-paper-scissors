/*
1. computerPlay function
- Random number * 3 - will determine rock, paper or scissors using random number
Run if else function returning: <1 rock, <2 paper, <3 scissors

2. Play the round using a function playRound:
Two parameters: playerSelection and computerSelection
playerSelection is prompt for rock, paper or scissors (case insensitive)
Send back if not correct
computerSelection is computerPlay
Run if-else function 

3. game() plays 5 in a row 
playRound 
use if-else to add to new variables computerScore and playerScore
console.log the outcome 
*/

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