import submitGame from './submitGame';

let flag = true;
function startStopGame(e: Event) {
  const { target } = e;
  if (!(target instanceof HTMLButtonElement)) { return; }

  if (target.classList.contains('matchUp-game__submit')) {
    submitGame();
    toggleBoxes();
    setTimer();
    flag = true;
    disabledButtons();
  }
  if (target.classList.contains('matchUp-game__start')) {
    toggleBoxes();
    setTimer();
    flag = false;
    swopItemsMatchUp();
    disabledButtons();
  }
  if (target.classList.contains('matchUp-game__stop')) {
    toggleBoxes();
    setTimer();
    flag = true;
    disabledButtons();
  }
}
export default startStopGame;

function disabledButtons() {
  const start: HTMLInputElement | null = document.querySelector('.matchUp-game__start');
  const stop: HTMLInputElement | null = document.querySelector('.matchUp-game__stop');
  const submit: HTMLInputElement | null = document.querySelector('.matchUp-game__submit');
  start!.disabled = Boolean(!flag);
  submit!.disabled = Boolean(flag);
  stop!.disabled = Boolean(flag);
}

function setTimer() {
  const matchUpTime: Element | null = document.querySelector('.matchUp-game__time');
  if (flag) {
    let sec = 0;
    matchUpTime!.textContent = '0:00';
    setInterval(() => {
      if (!flag) {
        matchUpTime!.textContent = `${Math.floor(sec / 60)}:${sec % 60}`;
        sec++;
      } else {
        sec = 0;
      }
    }, 1000);
  }
}

function swopItemsMatchUp() {
  const randomList: number[] = [];
  const gameDrops = document.querySelectorAll('.matchUp-game__drop');
  const boxes = document.querySelectorAll('.box');
  for (let i = 0; i < gameDrops.length;) {
    const random = Math.floor(Math.random() * (gameDrops.length)) + 0;
    if (!(randomList.includes(random))) {
      randomList.push(random);
      const item = gameDrops[random];
      item.classList.remove('drop-false');
      item.classList.remove('drop-true');
      gameDrops[random].remove();
      boxes[i].appendChild(item);
      ++i;
    }
  }
}

function toggleBoxes() {
  const container = document.querySelector('.matchUp-game__form');
  container?.classList.toggle('matchUp-active');
}
