import { Sticks } from './paper';

function openSticks() {
  const str = window.location.hash.split('/')[1];
  console.log(str);
  const arrStr = str.split('&')[2].split('=')[1];
  const array: string[][] = [];
  const splitted = arrStr.split('@');
  splitted.forEach((el) => {
    const innerArray = el.split('|');
    innerArray[0] = decodeURI(innerArray[0]);
    innerArray[1] = decodeURI(innerArray[1]);
    array.push(innerArray);
  });
  const title = window.location.hash.split('/')[1].split('&')[1].split('=')[1];

  const newSticks = new Sticks(array, title);
  newSticks.create();
  newSticks.check();
  newSticks.randomizer();
}

export default openSticks;
