function computerPlay() {
    let num = Math.floor(Math.random() * 3);
    let rockPaperScissors;

    if(num === 0) {
        rockPaperScissors = "Rock";
    }
    else if(num === 1) {
        rockPaperScissors = "Paper";
    }
    else if(num === 2) {
        rockPaperScissors = "Scissors";
    }
    return rockPaperScissors;
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    // If a player and a computer have the same selections
    if ((playerSelection === "rock" && computerSelection === "rock") ||
        (playerSelection === "paper" && computerSelection === "paper") ||
        (playerSelection === "scissors" && computerSelection === "scissors")) {
        return "draw";
    }

    // if player wins
    else if ((playerSelection === "rock" && computerSelection === "scissors") || 
            (playerSelection === "paper" && computerSelection === "rock") ||
            (playerSelection === "scissors" && computerSelection === "paper"))  {
            console.log(`You Win! ${playerSelection} beats ${computerSelection}`);
            return "playerWins"
    }

    // if computer wins
    else if ((computerSelection === "rock" && playerSelection === "scissors") || 
            (computerSelection === "paper" && playerSelection === "rock") ||
            (computerSelection === "scissors" && playerSelection === "paper"))  {
            console.log(`You Lose! ${computerSelection} beats ${playerSelection}`);
            return "computerWins"
    }

    return 
}

function game() {    
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        let playersChoice = prompt("Rock, Paper, Scissors?")
        let computer = computerPlay()
        let round = playRound(playersChoice, computer);
        
        if (round === "playerWins") {
            playerScore++;
        }
        else if (round === "draw") {
            console.log("It's a draw")
        }
        else if(round == "computerWins") {
            computerScore++;
        }
    }

    if(playerScore > computerScore) {
        console.log("Congratulations, you won!")
    }
    else if(playerScore < computerScore) {
        console.log("Too bad, you lost!")
    }
    else {
        console.log("Hmm...it seems that nobody won. It's a draw!")
    }

    console.log(`Players score: ${playerScore}`)
    console.log(`Computers score: ${computerScore}`)
}
