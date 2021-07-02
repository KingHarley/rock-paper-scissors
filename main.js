const outputText = document.querySelector("#text");
const playerScoreText = document.querySelector("#player-score");
const computerScoreText = document.querySelector("#computer-score");
const btns = document.querySelectorAll("button");

let playerScore = 0;
let computerScore = 0;



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

function resetGame()
{
    playerScore = 0;
    computerScore = 0;

    outputText.textContent = "New Game!";
    playerScoreText.textContent = `Player: ${0}`;
    computerScoreText.textContent = `Computer: ${0}`;
    btns.forEach((button) => {
        button.removeAttribute("disabled");
    })
}

function game(userInput)
{
    let result = playRound(computerPlay(), userInput);

    switch(result)
    {
        case(1):
            playerScoreText.textContent = `Player: ${++playerScore}`;
            outputText.textContent = "Round won!";
            break;
        case(0):
            outputText.textContent ="Round draw!";
            break;
        case(-1):
            computerScoreText.textContent = `Computer: ${++computerScore}`;    
            outputText.textContent = "Round lost!";
            break;
        default:
            outputText.textContent = "Incorrect input";
    }
    
    console.log(`Player: ${playerScore} vs Computer: ${computerScore}`);

    if (playerScore >= 5 || computerScore >= 5)
    {
        if(playerScore >= 5)
        {
            outputText.textContent = "Congrats you won the match!";
        }
        else
        {
            outputText.textContent = "You lost the match!";
        }
        gameOver();
    }
}

function gameOver()
{
    btns.forEach((button) => {
        button.setAttribute("disabled", "true");
    })
    const divButtons = document.querySelector("#buttons");
    const resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.addEventListener("click", (event) => {
        divButtons.removeChild(resetButton);
        resetGame();  
    })

    divButtons.appendChild(resetButton);
    console.log(divButtons);
    console.log(resetButton);
}

btns.forEach((button) => {
    button.addEventListener("click", (event) => {
        game(event.target.id);
    })
})

resetGame();
