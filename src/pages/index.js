import React from 'react';
import Link from 'next/link';
import styled from 'styled-components';

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
`;

const Title = styled.h1`
    color: #003366;
`;

const Home = () => (
    <Container>
        <Title>Quixo game with React & NextJS !</Title>
        <Link href="/game" passHref>
            <Button>New Game !</Button>
        </Link>
    </Container>
);

export default Home;
