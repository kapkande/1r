import createBaseMathUp from './matchUp/createBaseMathUp';
import formForSticks from './sticks/formForSticks';
import openSection from './openSection';

function openGameSettings(e:Event) {
  const { target } = e;

  if (!(target instanceof HTMLElement)) { return; }
  const path = new URL(window.location.href).href;
  if (target.classList.contains('maatchUp-button')) {
    if (!document.querySelector('.matchUp-form')) {
      createBaseMathUp();
    }
    openSection('matchUp-form');
    console.log(path);
    window.history.pushState({ path }, path, `${path}/matchUp-form`);
  }
  if (target.classList.contains('wordMagnets')) {
    window.history.pushState({ path }, path, `${path}/wordMagnets-form`);
  }
  if (target.classList.contains('sticks-button')) {
    document.querySelector('.sticks-place')?.remove();
    formForSticks();
    openSection('sticks-form');
    window.history.pushState({ path }, path, `${path}/sticks-form`);
  }
}
export default openGameSettings;
