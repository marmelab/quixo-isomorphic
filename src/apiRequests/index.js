import fetch from 'isomorphic-unfetch';
import { API_HOST } from '../constants/api';
import Cookies from 'universal-cookie';

const getPseudo = () => {
    const cookies = new Cookies();
    const pseudo = cookies.get('pseudo');
    return pseudo;
};

const postOptions = {
    method: 'POST',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
};

export const getNewGame = async () => {
    const response = await fetch(`${API_HOST}/new-game`);
    return await response.json();
};

export const getExistingGame = async id => {
    const response = await fetch(`${API_HOST}/get-game/${id}`);
    return await response.json();
};

export const getMovables = async id => {
    const response = await fetch(`${API_HOST}/movables/${id}`);
    return await response.json();
};

export const postSelectCube = async ({ id, x, y }) => {
    const response = await fetch(`${API_HOST}/select-cube`, {
        ...postOptions,
        body: JSON.stringify({ id, x, y }),
    });
    return await response.json();
};

export const postMoveCube = async ({ id, x, y }) => {
    const response = await fetch(`${API_HOST}/move-cube`, {
        ...postOptions,
        body: JSON.stringify({ id, x, y }),
    });
    return await response.json();
};

export const getMyTeam = async id => {
    const response = await fetch(`${API_HOST}/assign-me-team/${id}/${getPseudo()}`);
    return await response.json();
};

export const getNewGameVsAi = async () => {
    const response = await fetch(`${API_HOST}/new-game-ai`);
    return await response.json();
};

export const createAccount = async pseudo => {
    const response = await fetch(`${API_HOST}/signup`, {
        ...postOptions,
        body: JSON.stringify({ pseudo }),
    });
    return await response.json();
};

export const getAccount = async pseudo => {
    const response = await fetch(`${API_HOST}/get-player/${pseudo}`);
    return await response.json();
};

export const getLeaderboard = async () => {
    const response = await fetch(`${API_HOST}/get-leaderboard`);
    return await response.json();
};

export const getCurrentGames = async () => {
    const response = await fetch(`${API_HOST}/get-games/${getPseudo()}`);
    return await response.json();
};

export const createGameWithFriend = async pseudo2 => {
    const pseudo1 = getPseudo();
    const response = await fetch(`${API_HOST}/create-game-friends`, {
        ...postOptions,
        body: JSON.stringify({ pseudo1, pseudo2 }),
    });
    return await response.json();
};
