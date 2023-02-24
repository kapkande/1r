import createBaseMathUp from './matchUp/createBaseMathUp';
import openMatchUpGame from './matchUp/openMatchUpGame';
import openSection from './openSection';
import formForSticks from './sticks/formForSticks';
import openSticks from './sticks/openSticks';

const render = (path: string) => {
  if (path === '#/' || path === '') {
    openSection('');
  } else if (path === '#/addGame') {
    openSection('selectionBlock');
  } else if (path.split('=')[0] === '#/nameGame') {
    if (path.split('=')[1].split('&')[0] === 'machUp') {
      openMatchUpGame(path);
      openSection('matchUp-game');
    } else if (path.split('=')[1].split('&')[0] === 'sticks') {
      openSticks();
      openSection('sticks-place');
    }
  } else if (path === '#/addGame/matchUp-form') {
    if (!document.querySelector('.matchUp-form')) {
      createBaseMathUp();
    }
    openSection('matchUp-form');
  } else if (path === '#/addGame/sticks-form') {
    if (!document.querySelector('.sticks-form')) {
      formForSticks();
    }
    openSection('sticks-form');
  } else {
    openSection('erore-block');
  }
};
export default render;
