import React, { useEffect, useReducer } from 'react';
import { initialState, reducer } from '../account/reducer';
import { getAccountFromCookies } from '../account/action';

const Account = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(getAccountFromCookies(dispatch), []);

    const { pseudo } = state;
    return <p>Hello {pseudo}</p>;
};

export default Account;
