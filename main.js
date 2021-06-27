function computerPlay()
{
    let variable = Math.floor((Math.random()*10)%3);
    
    switch(variable)
    {
        case(0):
            return "rock";
        case(1):
            return "Paper";
        case(2):
            return "Scissors";
        default:
            console.log("Error");
    }
}

function playRound(computerSelection, playerSelection)
{
    let result = 0;
    let win = 1;
    let loss = -1;
    let draw = 0;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    
    if (playerSelection === computerSelection)
    {
        result = draw;
    }
    else if (playerSelection === "rock")
    {
        result = (computerSelection === "paper") ? loss : win;
    }
    else if (playerSelection === "paper")
    {
        result = (computerSelection === "scissors") ? loss: win;
    }
    else if (playerSelection === "scissors")
    {
        result = (computerSelection === "rock") ? loss: win;
    }
    else
    {
        result = -2;
    }

    return result;
}

function game()
{
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++)
    {
        let userInput = prompt("Rock, paper, or scissors?");
        let result = playRound(computerPlay(), userInput);

        switch(result)
        {
            case(1):
                playerScore++;
                console.log("Round won!");
                break;
            case(0):
                console.log("Round draw!");
                break;
            case(-1):
                computerScore++;
                console.log("Round lost!");
                break;
            default:
                console.log("Incorrect input");
        }

        console.log(`Player: ${playerScore} vs Computer: ${computerScore}`);
    }

    if (playerScore > computerScore)
    {
        console.log("Congrats you won the match!");
    }
    else if (playerScore < computerScore)
    {
        console.log("You lost the match!");
    }
    else
    {
        console.log("The match was a draw!");
    }
}

const playerSelection = "rock";
const computerSelection = "rock";
console.log(playRound(computerSelection, playerSelection));
