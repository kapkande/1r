import openLogin from './openLogin';

function createPopupLogin() {
  const main = document.querySelector('.main');
  const popup = document.createElement('div');
  popup.classList.add('popup-login');
  popup.innerHTML = `
    <div class="popup__wrap">
        <div class="popup__content">
            <h3 class="popup__title">Log in to your account</h3>
            <div class="popup__orLine">
                <div class="popup__or">
                <span class="popup__span"></span>
                </div>
            </div>
            <form class="popup__login" onsubmit="return false">
                <div class="popup__email">
                    <label for="login-popup__email">Login</label>
                    <input required="true" id="login-popup__email" type="text">
                </div>
                <div class="popup__password">
                    <label for="login-popup__password">Password</label>
                    <input required="true" type="password" id="login-popup__password">
                </div>
                <input value="Sing In" class="popup__sing-in" type="submit">
                <div class="popup__forgot">Forgot Your Password?</div>
            </form>
            <span class="popup__span"></span>
            <div class="popup__footer">
            <div class="popup__register">
                <p>Don’t have an account?</p>
                <p>Register</p>
            </div>
            </div>
        </div>
    </div>
    `;
  main?.appendChild(popup);
  popup?.addEventListener('click', openLogin);
}
export default createPopupLogin;
