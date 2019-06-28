import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Game from '../../pages/game';
import { CROSS_VALUE, NEUTRAL_VALUE } from '../../constants/game';

afterEach(cleanup);

const getTitle = ({ x, y, value, isMovable, isWinning }) =>
    `cube-${x}-${y}-${value}-${isMovable || false}-${isWinning || false}`;

const emptyBoard = [[0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];

const mockGame = ({ id, board, currentPlayer, winner, selectedCube, winningLine } = {}) => ({
    id: id || 1,
    board: board || emptyBoard,
    currentPlayer: currentPlayer || 0,
    winner,
    selectedCube,
    winningLine,
});

describe('GamePage tests', () => {
    it('should display 25 cubes', () => {
        const game = mockGame();
        const { getAllByTitle } = render(<Game initGame={game} myTeam={NEUTRAL_VALUE} />);
        const cubes = getAllByTitle(/cube*/i);

        expect(cubes.length).toBe(25);
    });
    it('should display cross cube at the right coords', () => {
        const board = [[CROSS_VALUE, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0], [0, 0, 0, 0, 0]];
        const game = mockGame({ board });
        const { getByTitle } = render(<Game initGame={game} myTeam={NEUTRAL_VALUE} />);
        const crossCube = getByTitle(getTitle({ x: 0, y: 0, value: CROSS_VALUE }));

        expect(crossCube).toBeTruthy();
    });
});
