import React, { useContext } from 'react';

import { PlayerContext } from '../../App';

function ScoreCard({ player, current, playerScore }) {
    let imgUrl;
    let bgColor;
    let playerClass;
    let currentPlayer;

    const {playerNames, player1Image, player2Image} = useContext(PlayerContext);

    if (player === 'player1') {
        playerClass = 'player1 avatar';
        currentPlayer = `${(current === 1) ? 'active' : ''} cardHolder`;
        imgUrl = player1Image;
        bgColor = '#DCF6E4';
    } else {
        playerClass = 'player2 avatar';
        currentPlayer = `${(current === 2) ? 'active' : ''} cardHolder`;
        imgUrl = player2Image;
        bgColor = '#F6EFD5';
    }

    return (
        <div className={currentPlayer} style={{
            background: `${bgColor}`
        }}>
            <div className={playerClass} style={{
                backgroundImage: `url(${imgUrl})`
            }}>
            </div>
            <div style={{
                margin: "10px"
            }}>
                <div style={{
                    marginBottom: "5px",
                    color: "#424242",
                    fontSize: "12px"
                }}>
                    {`Player ${(player === 'player1') ? '01' : '02'}`}
                </div>
                <div>
                    {playerNames[player]}
                </div>
            </div>
            <div style={{
                margin: "10px",
                marginLeft: "20px"
            }}>
                <div style={{
                    marginBottom: "5px",
                    color: "#424242",
                    fontSize: "12px"
                }}>
                    Score
                </div>
                <div>
                    <b>
                        {
                            playerScore[player]
                        }
                    </b>
                </div>
            </div>
        </div>
    )
}

export default ScoreCard;
