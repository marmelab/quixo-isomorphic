import React, { useEffect, useReducer } from 'react';
import styled from 'styled-components';
import Router from 'next/router';
import PropTypes from 'prop-types';

import Instructions from '../components/Instructions';
import Cube from '../components/Cube';
import Account from '../components/Account';

import { getNewGame, getExistingGame, getMyTeam, getNewGameVsAi } from '../apiRequests';
import { reducer, initialState } from '../game/reducer';
import { refreshGame, fetchMovables, moveCube, selectCube } from '../game/actions';
import Cookies from 'universal-cookie';

const getPseudo = () => {
    const cookies = new Cookies();
    const pseudo = cookies.get('pseudo');
    return pseudo;
};

const isMyTurn = (myTeam, currentPlayer) => myTeam === currentPlayer;

const isSelectedCube = selectedCube => (x, y) => selectedCube && selectedCube.x === x && selectedCube.y === y;

const isInMovables = movables => (x, y) => movables.some(cube => cube.x === x && cube.y === y);

const isWinningCube = winningLine => (x, y) => (winningLine || []).some(line => line.x === x && line.y === y);

const registerHooks = (game, dispatch) => {
    const { id, myTeam, currentPlayer } = game;
    const isPlaying = isMyTurn(myTeam, currentPlayer);

    useEffect(refreshGame(id, isPlaying, dispatch), null);
    useEffect(fetchMovables(id, dispatch), [currentPlayer]);
};

const getTeam = ({ player1, player2 }) => {
    const pseudo = getPseudo();
    if (player1.pseudo === pseudo) {
        return player1.team;
    }
    if (player2.pseudo === pseudo) {
        return player2.team;
    }
    return 0;
};

const Game = ({ initGame, myTeam }) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const { game: stateGame, movables } = state;
    const game = (stateGame.id && stateGame) || initGame;
    const team = myTeam === 0 ? getTeam(game) : myTeam;

    const { id, board, currentPlayer, winner, selectedCube, winningLine } = game;

    const handlePressCube = selectedCube
        ? (x, y) => () => moveCube(id, dispatch)({ x, y })
        : (x, y) => () => selectCube(id, dispatch)({ x, y });

    const isPlaying = isMyTurn(team, currentPlayer);
    const isSelected = isSelectedCube(selectedCube);
    const isMovable = isPlaying && !winner ? isInMovables(movables) : () => false;
    const isWinning = isWinningCube(winningLine);

    registerHooks(game, dispatch);

    return (
        <Board>
            <Account />
            <Instructions team={team} isPlaying={isPlaying} winner={winner} />
            {board.map((row, x) => (
                <Row key={`row-${x}`}>
                    {row.map((value, y) => (
                        <Cube
                            key={`cube-${x}-${y}`}
                            isMovable={isMovable(x, y)}
                            isSelected={isSelected(x, y)}
                            isWinning={isWinning(x, y)}
                            handlePressCube={handlePressCube(x, y)}
                            value={value}
                            x={x}
                            y={y}
                        />
                    ))}
                </Row>
            ))}
        </Board>
    );
};

const createGameAndRedirect = async (res, solo) => {
    const game = solo ? await getNewGameVsAi() : await getNewGame();
    const href = `/game?id=${game.id}`;
    if (res) {
        res.writeHead(302, {
            Location: href,
        });
        res.end();
    } else {
        Router.push(href);
    }
    return game;
};

Game.getInitialProps = async ({ query, res }) => {
    const { id, solo } = query;
    if (!id) {
        return createGameAndRedirect(res, solo);
    }
    const game = await getExistingGame(id);
    const { team } = await getMyTeam(game.id);
    return { initGame: game, myTeam: team };
};

Game.propTypes = {
    initGame: PropTypes.object.isRequired,
    myTeam: PropTypes.number.isRequired,
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

export default Game;
