import apiEndPoint from './configuration.js';

const recentScoresEl = document.querySelector('.scores-scores');
const renderScores = async () => {
  let markup = '';

  try {
    const res = await fetch(apiEndPoint);
    const data = await res.json();
    if (!res.ok) {
      recentScoresEl.innerHTML = 'Server Down';
    }
    data.result.forEach((item) => {
      markup += `  <li><span class="name">${item.user}: </span><span class="scores-score">${item.score}</span> </li>`;
    });
    recentScoresEl.innerHTML = markup;
  } catch (err) {
    recentScoresEl.innerHTML = 'Server Down';
  }
};

export default renderScores;