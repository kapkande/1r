import setOrder from './setOrder';
import deleteInputLine from './deleteInputLine';

function createLine() {
  const arrayNumbers: NodeListOf<Element> = document.querySelectorAll('.matchUp-form__number');

  if (arrayNumbers.length > 15) { return; }
  const form:Element | null = document.querySelector('.matchUp-form__form');

  const formItem = document.createElement('div');
  formItem.classList.add('matchUp-form__item');

  const number = document.createElement('div');
  number.classList.add('matchUp-form__number');
  formItem.appendChild(number);

  const inmutKeyword = document.createElement('input');
  inmutKeyword.classList.add('matchUp-form__input-keyword');
  inmutKeyword.setAttribute('required', 'true');
  formItem.appendChild(inmutKeyword);

  const inmutDefinition = document.createElement('input');
  inmutDefinition.classList.add('matchUp-form__input-definitio');
  inmutDefinition.setAttribute('required', 'true');
  formItem.appendChild(inmutDefinition);

  const matchUpButtonDelete = document.createElement('button');
  matchUpButtonDelete.classList.add('matchUp-form__input-delete');
  matchUpButtonDelete.setAttribute('formnovalidate', 'true');

  formItem.appendChild(matchUpButtonDelete);

  form?.appendChild(formItem);
  deleteInputLine(matchUpButtonDelete, formItem);
  setOrder('.matchUp-form__number');
}

export default createLine;
