import createLine from './createLine';
import submitMatchUpForm from './submitMatchUpForm';

function createBaseMathUp() {
  const blockMatchUp = document.createElement('form');
  blockMatchUp.classList.add('matchUp-form');
  blockMatchUp.setAttribute('onSubmit', 'return false');

  const titleMatchUp = document.createElement('input');
  titleMatchUp.value = 'Match Up';
  titleMatchUp.classList.add('matchUp-form__title');
  titleMatchUp.setAttribute('required', 'true');
  blockMatchUp.appendChild(titleMatchUp);

  const block = document.createElement('div');
  block.classList.add('matchUp-form__form');

  const subtitle = document.createElement('span');
  subtitle.classList.add('matchUp-form__subtitle');

  let keyword = document.createElement('div');
  keyword.textContent = 'Question';
  subtitle.appendChild(keyword);

  let definitio = document.createElement('div');
  definitio.textContent = 'Answer';
  subtitle.appendChild(definitio);

  block.appendChild(subtitle);

  blockMatchUp.appendChild(block);

  const divForButtons = document.createElement('div');
  divForButtons.classList.add('matchUp-form__div-buttons')

  const createLineBtm = document.createElement('button');
  createLineBtm.classList.add('matchUp-form__create-line');
  createLineBtm.textContent = 'Add line';
  createLineBtm.setAttribute("formnovalidate", 'true');
  createLineBtm.addEventListener('click', createLine);

  const submit = document.createElement('button');
  submit.classList.add('matchUp-form__submit');
  submit.textContent = 'Submit';
  submit.addEventListener('click', submitMatchUpForm)

  blockMatchUp.appendChild(divForButtons);
  divForButtons.appendChild(createLineBtm)
  divForButtons.appendChild(submit)

  const main = document.querySelector('.main');

  main?.appendChild(blockMatchUp);
  createLine();
  createLine();
  createLine();
}

export default createBaseMathUp;
