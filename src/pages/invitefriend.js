import React, { useState } from 'react';
import styled from 'styled-components';
import { createGameWithFriendCall } from '../account/action';
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

const createGame = async pseudo => {
    const id = await createGameWithFriendCall(pseudo);
    Router.push(`/game?id=${id}`);
};

const Account = () => {
    const [pseudo, setPseudo] = useState('');

    return (
        <Container>
            <Title>Enter the pseudo of your friend !</Title>
            <PseudoInput type="text" value={pseudo} onChange={({ target }) => setPseudo(target.value)} />
            <Button onClick={() => createGame(pseudo)}>Create !</Button>
        </Container>
    );
};

export default Account;
