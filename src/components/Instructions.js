import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';
import { CIRCLE_VALUE, NEUTRAL_VALUE } from '../constants/game';

const CIRCLE_SRC = '/static/circle.png';
const CROSS_SRC = '/static/cross.png';

const Instructions = ({ team, isPlaying, winner }) => {
    const isSpectator = team === NEUTRAL_VALUE;
    if (winner) {
        return (
            <InstructionContainer>
                <InstructionText>{`${winner === 1 ? 'Player 1' : 'Player 2'} has won the game !`}</InstructionText>
            </InstructionContainer>
        );
    }

    if (isSpectator) {
        return (
            <InstructionContainer>
                <InstructionText>{"You're"} a spectator </InstructionText>
            </InstructionContainer>
        );
    }

    const logoSrc = team === CIRCLE_VALUE ? CIRCLE_SRC : CROSS_SRC;
    return (
        <InstructionContainer>
            <TeamInscrution>
                <InstructionText>{"You're"} playing with </InstructionText>
                <Logo src={logoSrc} />
            </TeamInscrution>
            <InstructionText>{isPlaying ? 'Your turn !' : 'Waiting for the opponent...'}</InstructionText>
        </InstructionContainer>
    );
};

Instructions.propTypes = {
    team: PropTypes.number.isRequired,
    isPlaying: PropTypes.bool.isRequired,
    winner: PropTypes.number,
};

const InstructionContainer = styled.div`
    height: 25%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    padding: 30;
`;

const InstructionText = styled.p`
    color: black;
    text-align: center;
    font-weight: 700;
    font-size: 18;
`;

const TeamInscrution = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
`;

const Logo = styled.img`
    height: 30px;
    width: 30px;
    margin: 10;
`;

export default Instructions;
