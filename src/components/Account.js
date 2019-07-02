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
                {pseudo ? (
                    <Text>
                        {pseudo}: {won} game won / {played} game played
                    </Text>
                ) : (
                    <Link href="/newaccount" passHref>
                        <Button>Create account</Button>
                    </Link>
                )}
            </Greetings>
            <Link href="/" passHref>
                <HomeButton>Home</HomeButton>
            </Link>
        </div>
    );
};

const Greetings = styled.div`
    position: absolute;
    left: 0;
    top: 0;
`;

const Text = styled.h4`
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

    text-align: center;
`;

const HomeButton = styled(Button)`
    position: absolute;
    right: 0;
    top: 0;
`;

export default Account;
