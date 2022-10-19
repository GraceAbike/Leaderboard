import './styles.css';
import addScore from './modules/addScore.js';
import renderScores from './modules/renderScores.js';

const submitBtnEl = document.querySelector('input[type="submit"]');
const refreshBtnEl = document.querySelector('.scores-refresh');

submitBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  addScore();
});

refreshBtnEl.addEventListener('click', (e) => {
  e.preventDefault();
  renderScores();
});

renderScores();