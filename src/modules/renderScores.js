import apiEndPoint from './configuration.js';

const recentScoresEl = document.querySelector('.scores-scores');
const addMsgEl = document.querySelector('.add-msg');
const renderScores = async () => {
  let markup = '';

  try {
    const res = await fetch(apiEndPoint);
    const data = await res.json();
    if (!res.ok) {
      recentScoresEl.innerHTML = 'Server Down';
    }
    data.result.sort((a, b) => b.score - a.score).forEach((item, index) => {
      markup += `<li class="player-scores flex-row"><span class="player-index flex-row">${index + 1}</span><span class="name">${item.user} </span><span class="scores-score">${item.score}</span></li>`;
    });
    recentScoresEl.innerHTML = markup;
    addMsgEl.innerHTML = 'Scores Updated Successfully';
    setTimeout(() => {
      addMsgEl.innerHTML = '';
    }, 2000);
  } catch (err) {
    recentScoresEl.innerHTML = 'Server Down';
  }
};
export default renderScores;