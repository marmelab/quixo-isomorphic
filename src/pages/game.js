import React from 'react';
import styled from 'styled-components';

const Board = styled.div`
    width: 100%;
    height: 100%;
    background-image: url('/static/board.jpg');
    background-size: 100% 100%;
    display: flex;
    justify-content: center;
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

const Game = ({ board }) => (
    <Board>
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

Game.getInitialProps = async () => {
    const mockedBoard = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
    return { board: mockedBoard };
};

export default Game;
