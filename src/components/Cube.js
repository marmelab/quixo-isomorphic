import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import { CIRCLE_VALUE, CROSS_VALUE } from '../constants/game';

const CIRCLE_SRC = '/static/circle.png';
const CROSS_SRC = '/static/cross.png';
const NEUTRAL_SRC = 'static/neutral.png';

// for tests purposes
const getTestId = ({ x, y, value, isMovable, isWinning }) => `cube-${x}-${y}-${value}-${isMovable}-${isWinning}`;

const getLogo = value =>
    ({
        [CIRCLE_VALUE]: CIRCLE_SRC,
        [CROSS_VALUE]: CROSS_SRC,
    }[value] || NEUTRAL_SRC);

const Cube = props => {
    const testId = getTestId(props);
    const { isMovable, handlePressCube, isSelected, isWinning, value } = props;
    const logo = getLogo(value);
    const image = !isSelected ? <CubeImage src={logo} /> : null;

    const handlePress = isMovable ? handlePressCube : () => {};
    return (
        <StyledCube isMovable={isMovable} isWinning={isWinning} onClick={handlePress} data-testid={testId}>
            {image}
        </StyledCube>
    );
};

Cube.propTypes = {
    isMovable: PropTypes.bool,
    handlePressCube: PropTypes.func,
    isWinning: PropTypes.bool,
    value: PropTypes.number.isRequired,
    isSelected: PropTypes.bool,
};

Cube.defaultProps = {
    isMovable: false,
    handlePressCube: () => {},
    isWinning: false,
    isSelected: false,
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
