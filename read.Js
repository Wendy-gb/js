let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function computerPlay() {
    const choices = ['rock', 'paper', 'scissors'];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === 'rock' && computerSelection === 'scissors') ||
        (playerSelection === 'scissors' && computerSelection === 'paper') ||
        (playerSelection === 'paper' && computerSelection === 'rock')
    ) {
        playerScore++;
        return `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        return `You lose! ${computerSelection} beats ${playerSelection}`;
    }
}

function updateScore() {
    document.getElementById('score').textContent = `Player: ${playerScore} - Computer: ${computerScore}`;
}

function game(playerSelection) {
    if (roundsPlayed >= 5) return;

    const computerSelection = computerPlay();
    const result = playRound(playerSelection, computerSelection);
    document.getElementById('result').textContent = result;
    updateScore();
    roundsPlayed++;

    if (roundsPlayed === 5) {
        let finalResult = playerScore > computerScore ? "You won the game!" :
                          playerScore < computerScore ? "You lost the game!" :
                          "The game is a tie!";
        document.getElementById('result').textContent += ` Game over. ${finalResult}`;
    }
}

document.getElementById('rock').addEventListener('click', () => game('rock'));
document.getElementById('paper').addEventListener('click', () => game('paper'));
document.getElementById('scissors').addEventListener('click', () => game('scissors'));

updateScore();