import checkAccaunt from '../accaunr/checkAccaunt';
import submitLogin from './submitLogin';
import submitNewAccount from './submitNewAccount';

function openLogin(e: Event) {
  const register = document.querySelector('.popup-register');
  const login = document.querySelector('.popup-login');
  if (!(e.target instanceof HTMLElement)) { return; }
  const { target } = e;

  if (target.classList.contains('login') || target.closest('div')?.classList.contains('popup__log-in')) {
    login!.classList.remove('hidden');
    register!.classList.add('hidden');
  }
  if (target.closest('div')?.classList.contains('popup__register')) {
    register!.classList.remove('hidden');
    login!.classList.add('hidden');
  }
  if (target?.classList.contains('popup__sing-in')) {
    submitLogin();
  }
  if (target?.classList.contains('popup__sing-up')) {
    submitNewAccount();
  }
  if (target?.classList.contains('signOut')) {
    localStorage.removeItem('id');
    checkAccaunt();
    location.reload();
  }
  if (target?.classList.contains('popup-login') || target?.classList.contains('popup-register')) {
    login!.classList.add('hidden');
    register!.classList.add('hidden');
  }
}
export default openLogin;
