import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import Account from '../components/Account';

import { getCurrentGames } from '../apiRequests';

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

const GameTable = styled.table`
    width: 60%;
    height: 100%;
    padding: 10%;
`;

const Text = styled.h1`
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
`;

const Leaderboard = () => {
    const [games, setGames] = useState([]);
    useEffect(() => {
        const getCurrentGamesCall = async () => {
            const currentGames = await getCurrentGames();
            setGames(currentGames);
        };
        getCurrentGamesCall();
    }, []);
    return (
        <Container>
            <Account />
            <GameTable>
                <thead>
                    <tr>
                        <th></th>
                        <th>Player 1</th>
                        <th>Player 2</th>
                    </tr>
                </thead>
                <tbody>
                    {games.map(({ id, player1, player2, solo }, index) => (
                        <tr key={`leader-${index}`}>
                            <td>
                                <Link href={`/game?id=${id}&solo=${solo}`} passHref>
                                    <Button>Join</Button>
                                </Link>
                            </td>
                            <td>
                                <Text>{player1 && player1.pseudo}</Text>
                            </td>
                            <td>
                                <Text>{player2 && player2.pseudo}</Text>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </GameTable>
        </Container>
    );
};

export default Leaderboard;
