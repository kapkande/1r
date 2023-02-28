import createCell from '../createCell';
import criateURL from '../criateURL';
import dataGame from '../data/dataGame';
import interactionAccounts from '../interactionAccounts';
import openMatchUpGame from './openMatchUpGame';

function submitMatchUpForm() {
  const matchUpTitle: NodeListOf<HTMLInputElement> = document.querySelectorAll('.matchUp-form__title');
  const inputKeyword: NodeListOf<HTMLInputElement> = document.querySelectorAll('.matchUp-form__input-keyword');
  const inputDefinitio: NodeListOf<HTMLInputElement> = document.querySelectorAll('.matchUp-form__input-definitio');
  const matchUp = document.querySelector('.matchUp-form');

  const allInputs: Element[] = [...matchUpTitle, ...inputKeyword, ...inputDefinitio];
  let flag = false;

  allInputs.forEach((element) => {
    if (!(element instanceof HTMLInputElement)) { return; }
    if (!element.value) { flag = true; }
  });
  if (flag) { return; }

  const data: dataGame = {
    nameGame: 'machUp',
    title: matchUpTitle[0].value,
    arr: setArray(),
  };

  function setArray() {
    const array: string[][] = [];
    inputKeyword.forEach((element, index) => {
      if (!(element instanceof HTMLInputElement)) { return; }
      array.push([element.value, inputDefinitio[index].value]);
    });
    return array;
  }

  const URL = criateURL(data);

  openMatchUpGame(URL);
  matchUp?.remove();
  createCell(URL);
  const id = localStorage.getItem('id');
  console.log(id);
  if (id) {
    interactionAccounts.addGameBlock(URL, +id);
    interactionAccounts.getGameBlock(+id).then((d) => console.log(d));
  }
}
export default submitMatchUpForm;
