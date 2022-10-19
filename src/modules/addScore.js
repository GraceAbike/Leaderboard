import scoresArray from './scores.js';
import renderScores from './renderScores.js';

const nameEl = document.querySelector('.name');
const scoreEl = document.querySelector('.score');
const formEl = document.querySelector('form');

const addScore = () => {
  const name = nameEl.value;
  const score = scoreEl.value;
  const scoreOBJ = { name, score };
  scoresArray.push(scoreOBJ);
  renderScores();
  formEl.reset();
};

export default addScore;