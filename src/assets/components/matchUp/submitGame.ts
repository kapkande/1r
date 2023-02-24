function submitGame() {
  const definitio = document.querySelectorAll('.matchUp-game__definitio');
  const drop = document.querySelectorAll('.matchUp-game__drop');

  for (let i = 0; i < drop.length; i++) {
    console.dir(definitio[i].id);
    if (definitio[i].id.split('_')[1] === drop[i].id.split('_')[1]) {
      drop[i].classList.add('drop-true');
    }
    if (definitio[i].id.split('_')[1] !== drop[i].id.split('_')[1]) {
      drop[i].classList.add('drop-false');
    }
  }
}
export default submitGame;
