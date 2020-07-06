import React, { useContext, useEffect } from 'react';

import ScoreCard from '../game-components/ScoreCard';

import { PlayerContext } from '../../App';

function Sidebar({ currentPlayer, initBoard, round, playerScore }) {
    const { totalGames, roundOver, message, gameOver, setMessage, playerNames, player1Score, player2Score } = useContext(PlayerContext);

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const declareWinner = () => {
        if (player1Score === player2Score) {
            return '';
        } else if (player1Score > player2Score) {
            return playerNames['player1'];
        } else {
            return playerNames['player2'];
        }
    };

    useEffect(() => {
        if (gameOver) {
            const winnerName = declareWinner();
            if (winnerName) {
                setMessage(`${winnerName} won the tournament`);
            } else {
                setMessage('Draw! Play Again');
            }
        }
    }, [gameOver, setMessage, declareWinner]);

    const nextBtnState = () => {
        return roundOver && round < totalGames;
    }

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
            <div style={{ color: '#505351' }}>
                {
                    (message && player1Score !== player2Score) ? (
                        <p style={{
                            margin: "5px 0",
                            color: "#FF6600",
                            fontSize: "20px"
                        }}>Congratulation!</p>
                    ) : null
                }
                {message}
            </div>
            <div>
                <ScoreCard player={'player1'} current={currentPlayer} playerScore={playerScore} />
                <ScoreCard player={'player2'} current={currentPlayer} playerScore={playerScore} />
            </div>
            <hr></hr>
            <div style={{
                marginBottom: "5px"
            }}>
                <button className={`primaryBtn ${(nextBtnState()) ? '' : 'disabled'}`} onClick={initBoard}>
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
