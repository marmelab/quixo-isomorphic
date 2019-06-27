import fetch from 'isomorphic-unfetch';
import { SERVER_API_HOST, CLIENT_API_HOST } from '../constants/api';

const getHost = () => (process.browser ? CLIENT_API_HOST : SERVER_API_HOST);

const postOptions = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};

export const getNewGame = async () => {
    const response = await fetch(`${getHost()}/new-game`);
    return await response.json();
};

export const getExistingGame = async id => {
    const response = await fetch(`${getHost()}/get-game/${id}`);
    return await response.json();
};

export const getMovables = async id => {
    const response = await fetch(`${getHost()}/movables/${id}`);
    return await response.json();
};

export const postSelectCube = async ({ id, x, y }) => {
    const response = await fetch(`${getHost()}/select-cube`, {
        ...postOptions,
        body: JSON.stringify({ id, x, y }),
    });
    return await response.json();
};

export const postMoveCube = async ({ id, x, y }) => {
    const response = await fetch(`${getHost()}/move-cube`, {
        ...postOptions,
        body: JSON.stringify({ id, x, y }),
    });
    return await response.json();
};

export const getMyTeam = async id => {
    const response = await fetch(`${getHost()}/assign-me-team/${id}`);
    return await response.json();
};

export const getNewGameVsAi = async () => {
    const response = await fetch(`${getHost()}/new-game-ai`);
    return await response.json();
};
