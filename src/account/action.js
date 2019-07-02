import Cookies from 'universal-cookie';
import { createAccount, getAccount } from '../apiRequests';
import { UPDATE_ACCOUNT } from './constants';

export const createAccountCall = async signPseudo => {
    const { pseudo } = await createAccount(signPseudo);
    const cookies = new Cookies();
    cookies.set('pseudo', pseudo, { path: '/' });
};

export const getAccountFromCookies = dispatch => () => {
    const getAccountCall = async () => {
        const account = await getAccount(pseudo);
        dispatch({ type: UPDATE_ACCOUNT, payload: account });
    };

    const cookies = new Cookies();
    const pseudo = cookies.get('pseudo');

    if (pseudo) {
        getAccountCall(pseudo);
    }
};
