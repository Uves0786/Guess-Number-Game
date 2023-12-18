'use strict';

let target = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
const displaymessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);
  if (!guess) {
    displaymessage('⛔please enter the number first');
  } else if (guess == target) {
    displaymessage('🎉correct number!');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '200px';
    document.querySelector('.number').textContent = target;
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    // document.querySelector('.check').addEventListener('click', function () {
    //   displaymessage('🙏 start the game again!');
    // });
  } else if (guess != target) {
    document.querySelector('body').style.backgroundColor = 'RED';
    if (score > 0) {
      document.querySelector('.message').textContent =
        guess > target ? '📈Too High' : '📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displaymessage('💥You lost the game');
      document.querySelector('.check').addEventListener('click', function () {
        displaymessage('🙏 start the game again!');
      });
    }
  }
});
document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  target = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.message').textContent = ' Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '200px';
});
