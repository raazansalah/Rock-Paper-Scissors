const playValues = ["Rock", "Paper", "Scissors"];
let roundWinner = ''

let playerScore = 0
let computerScore = 0
let Winner = ''
let computerSelection = '';
let player_selection = ''
//DOM//
const Winer = document.getElementById('winner');
const score = document.getElementById('scoretag');
const userButtons = document.querySelectorAll('.playerbtn')

restartGame = () => location.reload();
// random Selection from array to computer
function computerPlay(array) {
    let randomNumber = Math.floor(Math.random() * playValues.length);
    return array[randomNumber];

}
//User Select 
function getPlayerSelection(btnId) {
    player_selection = playValues[btnId]
    computerSelection = computerPlay(playValues);
    console.log(player_selection, computerSelection)
    playRound(player_selection, computerSelection);
    //playFiveRounds();

}

//one Round Game
function playRound(playerselection, computerselection) {

    if (computerselection == playerselection) {
        roundWinner = "Tie Game";
    }
    if (

        (playerselection === 'Rock' && computerselection === 'Scissors') ||
        (playerselection === 'Scissors' && computerselection === 'Paper') ||
        (playerselection === 'Paper' && computerselection === 'Rock')

    ) {
        playerScore++
        roundWinner = "You Win WOHOOO";
    }
    if (

        (computerselection === 'Rock' && playerselection === 'Scissors') ||
        (computerselection === 'Scissors' && playerselection === 'Paper') ||
        (computerselection === 'Paper' && playerselection === 'Rock')

    ) {
        computerScore++
        roundWinner = "You Lost !";
    }
    printResult(roundWinner, playerScore, computerScore);
}

// Five Rounds and Print the Winner
/* function playFiveRounds (){
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
} */


function printResult(roundwinner, playerScore, computerScore) {
    score.innerHTML = 'Player'+ ':'+ playerScore + '        ' + 'Computer'+ ':'+ computerScore;
    Winer.innerHTML = roundWinner;
    if (playerScore == 5 || computerScore == 5) {
        for (let i = 0; i < userButtons.length; i++) {
            userButtons[i].disabled = true;
        }
    }
}






