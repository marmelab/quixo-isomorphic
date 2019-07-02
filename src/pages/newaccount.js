import React, { useState } from 'react';
import styled from 'styled-components';
import { createAccountCall } from '../account/action';
import Router from 'next/router';

const Container = styled.div`
    text-align: center;
    background-image: url('/static/board.jpg');
    background-repeat: repeat;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
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
`;

const Title = styled.h1`
    color: #003366;
`;

const PseudoInput = styled.input``;

const createAccount = async pseudo => {
    await createAccountCall(pseudo);
    Router.push('/');
};

const Account = () => {
    const [pseudo, setPseudo] = useState('');

    return (
        <Container>
            <Title>Create an account and track your wins !</Title>
            <PseudoInput type="text" value={pseudo} onChange={({ target }) => setPseudo(target.value)} />
            <Button onClick={() => createAccount(pseudo)}>Create !</Button>
        </Container>
    );
};

export default Account;
