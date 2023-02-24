import delLine from './delLine';

function createLineSticks() {
  const form = document.querySelector('.sticks-form-main');
  const line = document.createElement('div');
  const question = document.createElement('input');
  question.type = 'text';
  question.classList.add('input-in-form');
  question.required = true;
  const answer = document.createElement('input');
  answer.type = 'text';
  answer.required = true;
  answer.classList.add('input-in-form');
  line.classList.add('sticks-form-line');

  const delButton = document.createElement('button');
  delButton.classList.add('matchUp-form__input-delete');

  line.appendChild(question);
  line.appendChild(answer);
  line.appendChild(delButton);
  form?.prepend(line);

  delButton.addEventListener('click', delLine);
}
export default createLineSticks;
