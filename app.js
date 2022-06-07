'use strict';

const squares = document.querySelectorAll('.square');
const mole = document.querySelector('.mole');
const timeLeft = document.querySelector('#time-left');
const score = document.querySelector('#score');
const startBtn = document.querySelector('#startBtn');
const showGameDetails = document.querySelector('.game-details');

let result = 0;
let hitPosition;
let currentTime = 60;
let timerId = null;

// startBtn.classList.remove('hidden');
// showGameDetails.classList.add('hidden');

startBtn.addEventListener('click', startGame);

// START THE GAME
function startGame() {
  startBtn.classList.add('hidden');
  showGameDetails.classList.remove('hidden');

  const randomSquare = () => {
    squares.forEach((square) => {
      square.classList.remove('mole');
    });

    let randomSquare = squares[Math.floor(Math.random() * 9)];
    randomSquare.classList.add('mole');

    hitPosition = randomSquare.id;
  };

  squares.forEach((square) => {
    square.addEventListener('mousedown', () => {
      if (square.id == hitPosition) {
        result++;
        score.textContent = result;
        hitPosition = null;
      }
    });
  });

  const moveMole = () => {
    timerId = setInterval(randomSquare, 500);
  };
  moveMole();

  const countDown = () => {
    currentTime--;
    timeLeft.textContent = `${currentTime}s`;

    if (currentTime == 0) {
      clearInterval(countDownTimerId);
      clearInterval(timerId);
      alert(`GAME OVER! Your final score is ${result} points`);
    }
  };
  let countDownTimerId = setInterval(countDown, 100);
}
