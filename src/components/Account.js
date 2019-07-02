import React, { useEffect, useReducer } from 'react';
import Link from 'next/link';

import { initialState, reducer } from '../account/reducer';
import { getAccountFromCookies } from '../account/action';
import styled from 'styled-components';

const Account = () => {
    const [state, dispatch] = useReducer(reducer, initialState);
    useEffect(getAccountFromCookies(dispatch), []);

    const { pseudo, won, played } = state;

    return (
        <div>
            <Greetings>
                {pseudo}: {won} game won / {played} game played
            </Greetings>
            <Link href="/" passHref>
                <Button>Home</Button>
            </Link>
        </div>
    );
};

const Greetings = styled.h4`
    position: absolute;
    left: 0;
    top: 0;
    margin: 10px;
    color: #003366;
`;

const Button = styled.a`
    width: 150px;
    height: 50px;
    line-height: 50px;
    vertical-align: middle;
    background-color: #003366;
    border-radius: 5px;
    display: inline-block;
    color: white;
    cursor: pointer;
    text-decoration-line: none;
    margin: 10px;
    position: absolute;
    right: 0;
    top: 0;
    text-align: center;
`;

export default Account;
