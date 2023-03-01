import createObgectFromString from './createObgectFromString';
import openMatchUpGame from './matchUp/openMatchUpGame';
import openSection from './openSection';
import shareGame from './shareGame';
import openSticks from './sticks/openSticks';

function createCellListener(url: string, element: HTMLElement) {
  element.addEventListener('click', (e) => {
    const { currentTarget } = e;
    const { target } = e;
    if (!(target instanceof HTMLElement)) { return; }
    if (target.classList.contains('game-container__share')) { return; }
    const path = new URL(window.location.href).href;

    const gameToOpen = url.split('=')[1].split('&')[0];
    if (!(currentTarget instanceof HTMLElement)) { return; }
    if (gameToOpen === 'machUp') {
      openSection('matchUp-game');
      openMatchUpGame(url);
    }
    window.history.pushState({ path }, path, `${path}${url}`);
    if (gameToOpen === 'sticks') {
      openSticks();
      openSection('sticks-place');
    }
  });
}

function createCell(URL: string) {
  const obj = createObgectFromString(URL);
  const main = document.querySelector('.main__container');
  const root = document.createElement('div');

  createCellListener(URL, root);
  root.classList.add('game-container');
  root.classList.add(obj.title.replace(/ /g, '%20'));
  root.innerHTML = `
    <div class="game-container__image"></div>
    <div class="game-container__block">
      <div class="game-container__title">${obj.title.replace(/%20/g, ' ')}</div>
      <div class="game-container__description">${obj.nameGame.replace(/%20/g, ' ')}</div>
    </div>
    `;
  const share = document.createElement('div');
  share.classList.add('game-container__share');
  root?.appendChild(share);
  main?.appendChild(root);
  shareGame(URL, share);
}
export default createCell;

