import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Account from '../components/Account';

import { getLeaderboard } from '../apiRequests';

const Container = styled.div`
    text-align: center;
    background-image: url('/static/board.jpg');
    background-repeat: repeat;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const LeaderboardTable = styled.table`
    width: 60%;
    height: 100%;
    padding: 10%;
`;

const Text = styled.h1`
    color: #003366;
`;

const Leaderboard = ({ leaderboard }) => {
    return (
        <Container>
            <Account />
            <LeaderboardTable>
                <tr>
                    <th>Pseudo</th>
                    <th>Played</th>
                    <th>Win</th>
                </tr>
                {leaderboard.map(({ pseudo, played, won }, index) => (
                    <tr key={`leader-${index}`}>
                        <td>
                            <Text>{pseudo}</Text>
                        </td>
                        <td>
                            <Text>{played}</Text>
                        </td>
                        <td>
                            <Text>{won}</Text>
                        </td>
                    </tr>
                ))}
            </LeaderboardTable>
        </Container>
    );
};

Leaderboard.getInitialProps = async () => {
    const leaderboard = await getLeaderboard();
    return { leaderboard };
};

Leaderboard.propTypes = {
    leaderboard: PropTypes.array.isRequired,
};

export default Leaderboard;
