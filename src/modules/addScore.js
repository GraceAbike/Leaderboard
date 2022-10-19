import apiEndPoint from './configuration.js';

const nameEl = document.querySelector('.name');
const scoreEl = document.querySelector('.score');
const formEl = document.querySelector('form');
const addMsgEl = document.querySelector('.add-msg');

const addScore = async () => {
  const user = nameEl.value;
  const score = scoreEl.value;
  const scoreOBJ = { user, score };
  if (!user || !score) {
    addMsgEl.innerHTML = 'Please enter a name and score';
    return;
  }

  try {
    const res = await fetch(apiEndPoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(scoreOBJ),
    });
    const data = await res.json();
    if (!res.ok) {
      addMsgEl.innerHTML = 'Not Successful';
    }
    addMsgEl.innerHTML = data.result;
    formEl.reset();
  } catch (err) {
    addMsgEl.innerHTML = 'Not Successful';
  }

  setTimeout(() => {
    addMsgEl.innerHTML = '';
  }, 2000);
};
export default addScore;
