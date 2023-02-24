import openGameSettings from './openGameSettings';

function createGameSelectionBlock() {
  const main = document.querySelector('.main');
  const selectionBlock = document.createElement('div');
  selectionBlock.classList.add('selectionBlock');
  selectionBlock.innerHTML = `
    <div class="selectionBlock__title">Choose a game</div>
    <div class="selectionBlock__block">
        <div class="selectionBlock__item maatchUp-button">
            <div class="selectionBlock__subtitle">Maatch Up</div>
        </div>
        <div class="selectionBlock__item wordMagnets-button">
            <div class="selectionBlock__subtitle">Word Magnets</div>
        </div>
        <div class="selectionBlock__item sticks-button">
            <div class="selectionBlock__subtitle">Sticks</div>
        </div>
    </div>`;
  selectionBlock.addEventListener('click', openGameSettings);
  main?.appendChild(selectionBlock);
}
export default createGameSelectionBlock;
