import React from 'react';
import styled from 'styled-components';
import { getNewGame, getExistingGame, getMyTeam } from '../apiRequests';
import Instructions from '../components/Instructions';

const isMyTurn = (myTeam, currentPlayer) => myTeam === currentPlayer;

const Game = ({ game, team }) => {
    const { board, winner, currentPlayer } = game;
    const isPlaying = isMyTurn(team, currentPlayer);
    return (
        <Board>
            <Instructions team={team} isPlaying={isPlaying} winner={winner} />
            {board.map((row, x) => (
                <Row key={`row-${x}`}>
                    {row.map((value, y) => (
                        <Cube key={`cube-${x}-${y}`} title={`cube-${x}-${y}`}>
                            <CubeImage src={'/static/neutral.png'} />
                        </Cube>
                    ))}
                </Row>
            ))}
        </Board>
    );
};

Game.getInitialProps = async ({ query }) => {
    const { id } = query;

    const game = id ? await getExistingGame(id) : await getNewGame();
    const { team } = await getMyTeam(game.id);

    return { game, team };
};

const Board = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('/static/board.jpg');
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
`;

const Row = styled.div`
    flex-direction: row;
    display: flex;
`;

const Cube = styled.div`
    display: inline-block;
`;

const CubeImage = styled.img`
    width: 100px;
    height: 100px;
`;

export default Game;
