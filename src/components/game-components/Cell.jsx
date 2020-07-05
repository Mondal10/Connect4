import React from 'react';

import avatar1 from '../../assets/images/avatars/avatar01.png';
import avatar2 from '../../assets/images/avatars/avatar02.png';

function Cell({ value, columnIndex, rowIndex, play }) {
    let player = 'white';
    let avatar = '';

    if (value) {
        if (value === 1) {
            player = 'player1 animatePiece';
            avatar = avatar1;
        } else {
            player = 'player2 animatePiece';
            avatar = avatar2;
        }
    }

    return (
        <div className={`cell cell_${rowIndex}_${columnIndex}`} onClick={() => { play(columnIndex) }}>
            <div className={player} style={{
                backgroundImage: `url(${avatar})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
            }}>
            </div>
        </div>
    );
}

export default Cell;