function dragDrop() {
  let item: HTMLElement;
  function dragstart(e: Event) {
    if (!container?.classList.contains('matchUp-active')) { return; }
    const { target } = e;

    if (!(target instanceof HTMLElement)) { return; }
    if (!target.classList.contains('matchUp-game__drop')) { return; }

    item = target;
    item.classList.add('item--hold');
    setTimeout(() => item.classList.add('item--hide'), 0);
  }

  function dragend(e: Event) {
    if (!container?.classList.contains('matchUp-active')) { return; }

    if (!item) { return; }
    if (!item.classList.contains('matchUp-game__drop')) { return; }
    item.classList.remove('item--hold');

    console.log(e.target);
    item.classList.remove('item--hide');
  }

  function dragover(e: Event) {
    e.preventDefault();
  }

  function drop(e: Event) {
    if (!(e.target instanceof HTMLElement)) { return; }
    if (e.target.closest('.matchUp-game__drop') || !item) { return; }

    e.target.append(item);
    e.target.classList.remove('box--hovered');
  }

  function dragenter(e: Event) {
    if (!container?.classList.contains('matchUp-active')) { return; }
    if (!(e.target instanceof HTMLElement)) { return; }
    e.target.classList.add('box--hovered');
  }

  function dragleave(e: Event) {
    if (!(e.target instanceof HTMLElement)) { return; }
    e.target.classList.remove('box--hovered');
  }

  const container = document.querySelector('.matchUp-game__form');
  container?.addEventListener('dragstart', dragstart);
  container?.addEventListener('dragend', dragend);
  const boxes = Array.from(document.querySelectorAll('.matchUp-game__box'));

  boxes.forEach((box) => {
    box.addEventListener('dragover', dragover);
    box.addEventListener('drop', drop);
    box.addEventListener('dragenter', dragenter);
    box.addEventListener('dragleave', dragleave);
  });
}

export default dragDrop;
