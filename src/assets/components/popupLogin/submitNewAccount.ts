import AccountData from '../data/AccountData';
import DataAccount from '../data/DataAccount';
import interactionAccounts from '../interactionAccounts';

async function submitNewAccount() {
    const email: HTMLInputElement | null = document.querySelector('#register-popup__email');
    const password: HTMLInputElement | null = document.querySelector('#register-popup__password');
    if (email?.value?.trim() === '' || password?.value?.trim() === '') { return; };
    const data: AccountData = {
        name: `${email?.value}`,
        password: `${password?.value}`,
    };
    await interactionAccounts.createAcount(data).then((date: DataAccount) => {
        if (date) {
            (async () => {
                console.log(2);
                await interactionAccounts.createGameBlock(date.id).then(() => {
                    localStorage.setItem('id', String(date.id));
                });
            })().then(() => { location.reload(); });
        }
    });
}
export default submitNewAccount;