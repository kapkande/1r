import getError from '../account/getError';
import AccountData from '../data/AccountData';
import DataAccount from '../data/DataAccount';
import interactionAccounts from '../interactionAccounts';

async function submitNewAccount() {
    const email: HTMLInputElement | null = document.querySelector('#register-popup__email');
    const popuWrap: NodeListOf<HTMLElement> = document.querySelectorAll('.popup__wrap')
    const password: HTMLInputElement | null = document.querySelector('#register-popup__password');
    if (email?.value?.trim() === '' || password?.value?.trim() === '') { return; };
    const data: AccountData = {
        name: `${email?.value}`,
        password: `${password?.value}`,
    };
    await interactionAccounts.createAcount(data).then((data: DataAccount) => {
        console.log(data);
        if (data) {
            (async () => {
                await interactionAccounts.createGameBlock(data.id).then(() => {
                    localStorage.setItem('id', String(data.id));
                });
            })().then(() => { location.reload(); });
        } else {
            getError(popuWrap[1])
        }
    });
}
export default submitNewAccount;