import openLogin from './openLogin';

function createPopupRegister() {
  const main = document.querySelector('.main');
  const popup = document.createElement('div');
  popup.classList.add('popup-register');
  popup.innerHTML = `
    <div class="popup__wrap">
        <div class="popup__content">
        <h3 class="popup__title">Create account</h3>
        <div class="popup__orLine">
            <div class="popup__or">
            <span class="popup__span"></span>
            </div>
        </div>
        <form class="popup__login" onsubmit="return false">
            <div class="popup__email">
                <label for="register-popup__email">Login</label>
                <input required="true" type="text" id="register-popup__email">
            </div>
            <div class="popup__password">
                <label for="register-popup__password">Password</label>
                <input required="true" type="password" id="register-popup__password">
            </div>
            <input value="Sing Up" class="popup__sing-up" type="submit">
        </form>
        <span class="popup__span"></span>
        <div class="popup__footer">
        <div class="popup__log-in">
            <p>Already have an account?</p>
            <p>Log in</p>
        </div>
        </div>
    </div>
</div>
    `;

  main?.appendChild(popup);
  popup?.addEventListener('click', openLogin);
}
export default createPopupRegister;
