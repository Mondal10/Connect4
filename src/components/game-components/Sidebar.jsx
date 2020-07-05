import React, { useContext } from 'react';

import ScoreCard from '../game-components/ScoreCard';

import { PlayerContext } from '../../App';

function Sidebar({ currentPlayer, initBoard, round, playerScore }) {
    const { totalGames } = useContext(PlayerContext);

    return (
        <div className="sidebar">
            <div style={{
                fontSize: "25px",
                letterSpacing: "0px",
                color: "#424242",
                marginBottom: "5px"
            }}>
                {totalGames} Games Tournament
            </div>
            <div style={{
                letterSpacing: "0px",
                color: "#424242",
                marginBottom: "5px"
            }}>
                Playing Round {round}
            </div>
            <div style={{
                letterSpacing: "0px",
                color: "#424242",
                marginBottom: "5px"
            }}>
                {
                    (true) ? 'Congratulations' : ''
                }
            </div>
            <div>
                <ScoreCard player={'player1'} current={currentPlayer} playerScore={playerScore} />
                <ScoreCard player={'player2'} current={currentPlayer} playerScore={playerScore} />
            </div>
            <hr></hr>
            <div style={{
                marginBottom: "5px"
            }}>
                <button className="primaryBtn" onClick={initBoard}>
                    Next Game
                </button>
            </div>
            <div style={{
                marginBottom: "5px"
            }}>
                <button className="endBtn" onClick={() => window.location.reload()}>
                    End Tournament
                </button>
            </div>
        </div>
    )
}

export default Sidebar;
