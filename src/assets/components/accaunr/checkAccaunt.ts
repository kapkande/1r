function checkAccaunt() {
  const id = localStorage.getItem('id');
  if (!id) {
    const signOut = document.querySelector('.signOut');
    if (!signOut) { return; }
    signOut?.classList.add('login');
    signOut?.classList.remove('signOut');
    signOut!.textContent = 'login';
    return;
  }
  const login = document.querySelector('.login');
  login?.classList.add('signOut');
  login?.classList.remove('login');
  login!.textContent = 'Sign out';
}
export default checkAccaunt;
