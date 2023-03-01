import checkAccaunt from '../account/checkAccount';
import getError from '../account/getError';
import interactionAccounts from '../interactionAccounts';

async function submitLogin() {
  const popupWrap: HTMLElement | null = document.querySelector('.popup__wrap');
  const email: HTMLInputElement | null = document.querySelector('#login-popup__email');
  const password: HTMLInputElement | null = document.querySelector('#login-popup__password');
  if (email?.value?.trim() === '' || password?.value?.trim() === '') { return; }
  await interactionAccounts.getAcount(String(email!.value), String(password!.value))
  .then((data: number) => {
    if (data === 0) {
      getError(popupWrap);
      return;
    }
    localStorage.setItem('id', String(data));
    checkAccaunt();
    location.reload();
  })
}
export default submitLogin;
