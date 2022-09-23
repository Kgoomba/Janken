
const compArray = ["ROCK","PAPER","SCISSORS"];

function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * compArray.length);
    
    const item = compArray[randomIndex];
    
    return item;
}


    function playRound() {    
        let userInput = prompt("Choose Rock, Paper, or Scissors");
        var playerSelection = userInput.toUpperCase();
    
    if (playerSelection === computerSelection){
         winner = "Tie"
    } 
    else if (
        (playerSelection === "ROCK" && computerSelection === "SCISSORS") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSORS" && computerSelection === "PAPER")
    ){
         winner = "Player"
    } 
    else if (
        (playerSelection === "ROCK" && computerSelection === "PAPER") ||
        (playerSelection === "PAPER" && computerSelection === "SCISSORS") ||
        (playerSelection === "SCISSORS" && computerSelection === "ROCK")
    ){  
         winner = "Computer"
    } else {
        winner = "Invalid"
    }
    
    return winner
}

        let playerScore = 0; 
        let computerScore = 0;

    function game() {
        for (let i = 0; i < 5; i++){
            computerSelection = getComputerChoice(Array);
        playRound()
            if (winner === "Player"){
                playerScore++;
                console.log("Player Score: " + playerScore + " Computer Score " + computerScore)
            } else if (winner === "Computer"){
                computerScore++;
                console.log("Player Score: " + playerScore + " Computer Score " + computerScore)
            } else if (winner === "Tie"){
                console.log("Player Score: " + playerScore + " Computer Score " + computerScore)
            } else if (winner === "Invalid") {
                i--
                console.log("Please Try Again")
            } 
        }
    }
    game()
        


        

   