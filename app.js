
var scores, roundScores, activePlayer, gamePlaying;

init();




//roll button
document.querySelector('.btn-roll').addEventListener('click', function(){

if(gamePlaying){
  // 1. need random number
var dice = Math.floor(Math.random() * 6) + 1;
//2. disaply result
var diceDOM = document.querySelector('.dice');
diceDOM.style.display = 'block';
diceDOM.src = 'dice-'+dice+ '.png';

//3. update the round score if the rolled number was not a 1
if (dice !== 1){
  //add score
  roundScore += dice; // this equals roundScore = roundScore + dice
  document.querySelector('#current-' + activePlayer).textContent = roundScore;
} else{
  //next player
  nextPlayer();
}

}

});

//hold button
document.querySelector('.btn-hold').addEventListener('click', function() {
  if (gamePlaying) {
    //add current score to global score
    scores[activePlayer] += roundScore;
    //update ui
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

    //check if player won Game
    if (scores[activePlayer] >= 100){
      document.querySelector('.player-' +activePlayer+ '-panel').classList.add('winner');
      document.getElementById('name-' +activePlayer).textContent = 'Winner!!';
      document.querySelector('.player-' +activePlayer+ '-panel').classList.remove('active');
      document.querySelector('.dice').style.display = 'none';
      gamePlaying = false;
    } else {
      //next player
      nextPlayer();
    }
  }


});

function nextPlayer(){
  //next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';


  document.querySelector('.player-0-panel').classList.toggle('active');
  document.querySelector('.player-1-panel').classList.toggle('active');

  document.querySelector('.dice').style.display = 'none';
}

document.querySelector('.btn-new').addEventListener('click', init);

function init(){
  scores = [0, 0];
  activePlayer = 0;
  roundScore = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';
  //resetting ui
  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';
  document.getElementById('name-0').textContent = 'Player 1';
  document.getElementById('name-1').textContent = 'Player 2';
  //removing winner class
  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  //resetting active class
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');


}
