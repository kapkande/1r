import interactionAccounts from "../interactionAccounts";

async function checkAccaunt() {
  const loginName = document.querySelector('.login-name')
  const login = document.querySelector('.login')

  const id = localStorage.getItem('id');
  const LoginText = document.querySelector('.Login-text');
  if (!id) {
    login?.classList.add('login');
    login?.classList.remove('signOut');
    LoginText!.textContent = 'login';
    loginName!.textContent = 'login';
    return;
  }
  interactionAccounts.getName(id).then((d)=>{loginName!.textContent = `${d}`})
  login?.classList.add('signOut');
  login?.classList.remove('login');
  LoginText!.textContent = 'Sign out';
  ;
}
export default checkAccaunt;
