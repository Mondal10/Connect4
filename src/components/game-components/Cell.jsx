import React, { useContext } from 'react';

import { PlayerContext } from '../../App';

function Cell({ value, columnIndex, rowIndex, play }) {
    let player = 'white';
    let imgUrl;

    const {player1Image, player2Image} = useContext(PlayerContext);

    if (value) {
        if (value === 1) {
            player = 'player1 animatePiece avatar';
            imgUrl = player1Image;
        } else {
            player = 'player2 animatePiece avatar';
            imgUrl = player2Image;
        }
    }

    return (
        <div className={`cell cell_${rowIndex}_${columnIndex}`} onClick={() => { play(columnIndex) }}>
            <div className={player} style={{
                backgroundImage: `url(${imgUrl})`
            }}>
            </div>
        </div>
    );
}

export default Cell;