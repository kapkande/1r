import { Sticks } from './paper';
import openSection from '../openSection';
import createUrlSticks from './addUrlSticks';
import createCell from '../createCell';
import interactionAccounts from '../interactionAccounts';

function createSticksFromForm() {
  const arr: string[][] = [];
  const lines = document.querySelectorAll('.sticks-form-line');
  lines.forEach((el) => {
    const insideArr: string[] = [];
    const first = el.firstElementChild as HTMLInputElement;
    const fir = first.value;
    const second = el.firstElementChild?.nextElementSibling as HTMLInputElement;
    const sec = second.value;
    insideArr.push(fir);
    insideArr.push(sec);
    arr.push(insideArr);
  });

  const title = document.querySelector('.input-name-sticks') as HTMLInputElement;

  const newSticks = new Sticks(arr, title.value);
  newSticks.create();
  newSticks.check();
  newSticks.randomizer();

  createUrlSticks(arr, title.value);
  openSection('sticks-place');

  createCell(window.location.hash.split('/')[1]);
  const id = localStorage.getItem('id');

  if (id) {
    interactionAccounts.addGameBlock(`${window.location.hash.split('/')[1]}`, +id);
  }
}

export default createSticksFromForm;
