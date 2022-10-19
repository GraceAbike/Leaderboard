import './styles.css';
import addScore from './modules/addScore.js';
import renderScores from './modules/renderScores.js';

const submitBtnEl = document.querySelector('input[type="submit"]');

submitBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
});

renderScores();