import { UPDATE_ACCOUNT } from './constants';

export const initialState = {
    pseudo: '',
    won: 0,
    played: 0,
};

export const reducer = (state, action) => {
    switch (action.type) {
        case UPDATE_ACCOUNT:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
