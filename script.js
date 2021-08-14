const playValues = ["Rock", "Paper", "Scissors"];
let roundWinner = ''

let playerScore = 0
let computerScore = 0
let Winner = ''
let computerSelection = computerPlay(playValues);
let player_selection = playerSelection();
//////////////// random Selection from array to computer
function computerPlay(array) {
    let randomNumber = Math.floor(Math.random() * playValues.length);
    return array[randomNumber];

}
//////////User Select 
function playerSelection() {
    let player = prompt("choose Rock or Paper or Scissors");
    return player;
}

//////////////// one Round Game
function playRound(playerselection, computerselection) {
    if (computerselection == playerselection) {
        roundWinner = "tie Game" ;
    }
    if (

        (playerselection === 'Rock' && computerselection === 'Scissors') ||
        (playerselection === 'Scissors' && computerselection === 'Paper') ||
        (playerselection === 'Paper' && computerselection === 'Rock')

    ){
        playerScore++
        roundWinner ="player";
    }
    if (

        (computerselection === 'Rock' && playerselection === 'Scissors') ||
        (computerselection === 'Scissors' && playerselection === 'Paper') ||
        (computerselection === 'Paper' && playerselection === 'Rock')

    ){
        computerScore++
        roundWinner = "computer";
    }
    printResult(roundWinner , playerScore , computerScore);

}
// Five Rounds and Print the Winner
function playFiveRounds (){
    for(i=0 ;i<5 ;i++){
        computerSelection = computerPlay(playValues);
        player_selection = playerSelection();
        console.log(player_selection ,computerSelection);
        playRound(player_selection,computerSelection);
    }
    if (playerScore == computerScore){
        Winner = "Tie Game"
    }
    if (playerScore > computerScore){
        Winner ="Player"
    }
    if (playerScore < computerScore){
        Winner ="Computer"
    }
    console.log(Winner , playerScore , computerScore)
}

function printResult(roundwinner , playerScore , computerScore)  {
    console.log(roundwinner , playerScore,computerScore);
}

console.log(player_selection ,computerSelection);

//playRound(player_selection,computerSelection);
playFiveRounds();
