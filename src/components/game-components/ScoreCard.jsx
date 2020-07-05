import React, { useContext } from 'react';

import avatar1 from '../../assets/images/avatars/avatar01.png';
import avatar2 from '../../assets/images/avatars/avatar02.png';

import { PlayerContext } from '../../App';

function ScoreCard({ player, current, playerScore }) {
    let avatar;
    let bgColor;
    let playerClass;
    let currentPlayer;

    const {playerNames} = useContext(PlayerContext);

    if (player === 'player1') {
        playerClass = 'player1';
        currentPlayer = `${(current === 1) ? 'active' : ''} cardHolder`;
        avatar = avatar1;
        bgColor = '#DCF6E4';
    } else {
        playerClass = 'player2';
        currentPlayer = `${(current === 2) ? 'active' : ''} cardHolder`;
        avatar = avatar2;
        bgColor = '#F6EFD5';
    }

    return (
        <div className={currentPlayer} style={{
            background: `${bgColor}`
        }}>
            <div className={playerClass} style={{
                backgroundImage: `url(${avatar})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
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
