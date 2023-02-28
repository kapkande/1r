function shareGame(url:string, element:HTMLElement) {
  element?.addEventListener('click', (e:Event) => {
    if (!(e.target instanceof HTMLElement)) { return; }
    const main = document.querySelector('.main');
    const popup = document.createElement('div');
    popup.textContent = 'text copied';
    popup.style.top = `${e.target.offsetTop + 20}px`;
    popup.classList.add('popup-copy');
    main?.appendChild(popup);
    setTimeout(() => {
      popup.remove();
    }, 1000);
    navigator.clipboard.writeText(`${new URL(window.location.href).origin}/#/${url}`);
  });
}
export default shareGame;
