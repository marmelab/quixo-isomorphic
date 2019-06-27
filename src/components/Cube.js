import React from 'react';
import styled from 'styled-components';

import { CIRCLE_VALUE, CROSS_VALUE } from '../constants/game';

const CIRCLE_SRC = '/static/circle.png';
const CROSS_SRC = '/static/cross.png';
const NEUTRAL_SRC = 'static/neutral.png';

const getLogo = value => {
    if (value === CIRCLE_VALUE) {
        return CIRCLE_SRC;
    }
    if (value === CROSS_VALUE) {
        return CROSS_SRC;
    }
    return NEUTRAL_SRC;
};

const Cube = ({ isMovable, handlePressCube, isSelected, isWinning, value }) => {
    const logo = getLogo(value);
    const image = !isSelected ? <CubeImage src={logo} /> : null;

    const handlePress = isMovable ? handlePressCube : () => {};
    return (
        <StyledCube isMovable={isMovable} isWinning={isWinning} onClick={handlePress}>
            {image}
        </StyledCube>
    );
};

const getBorder = ({ isMovable, isWinning }) => {
    if (isMovable) {
        return '2px solid black';
    }
    if (isWinning) {
        return '5px solid green';
    }
    return '1px solid #cdcdcd';
};

const StyledCube = styled.div`
    display: flex;
    width: 100px;
    height: 100px;
    border-radius: 15px;
    border: ${getBorder};
    justify-content: center;
    align-items: center;
    cursor: ${props => (props.isMovable ? 'pointer' : 'default')};
    box-sizing: border-box;
`;

const CubeImage = styled.img`
    width: 100%;
    height: 100%;
`;

export default Cube;
