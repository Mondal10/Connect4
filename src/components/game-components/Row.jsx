import React from 'react';

import Cell from './Cell';

function Row({ row, rowIndex, play }) {
    return (
        <div className="row">
            {
                row.map((cell, j) => <Cell key={j} value={cell} rowIndex={rowIndex} columnIndex={j} play={play} />)
            }
        </div>
    )
}

export default Row;