function openSection(nameElement:string) {
  const matchUpGame = document.querySelector('.matchUp-game');

  const main = document.querySelector('.main');
  if (!nameElement) { nameElement = 'main__container'; }
  if (nameElement === 'main__container') { matchUpGame?.remove(); }

  const { children } = main!;
  for (let i = 0; i < children.length; i++) {
    if (!children[i].classList.contains(nameElement)) {
      children[i].classList.add('hidden');
    } else { children[i].classList.remove('hidden'); }
  }
}
export default openSection;
