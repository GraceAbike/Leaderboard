import scoresArray from './scores.js';

const recentScoresEl = document.querySelector('.recent-scores__scores');
const renderScores = () => {
  let markup = '';
  scoresArray.forEach((item) => {
    markup += `  <li><span class="recent-scores__name">${item.name}: </span><span class="recent-scores__score">${item.score}</span> </li>`;
  });

  recentScoresEl.innerHTML = markup;
};

export default renderScores;