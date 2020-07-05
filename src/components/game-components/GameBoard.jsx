import React, { useState, useEffect, useContext } from 'react';

import Row from './Row';
import Sidebar from './Sidebar';

import { PlayerContext } from '../../App';

function GameBoard() {
  const {totalGames} = useContext(PlayerContext);

  const player1 = 1;
  const player2 = 2;
  let winCordinates = [];

  const [currentPlayer, setCurrentPlayer] = useState(null);
  const [boardData, setBoardData] = useState([]);
  const [gameOver, setGameOver] = useState(false);
  const [message, setMessage] = useState('');
  const [round, setRound] = useState(0);
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);

  // Starts new game and initialize states
  const initBoard = () => {
    // Create a blank 6x7 matrix
    let board = [];

    for (let r = 0; r < 6; r++) {
      let row = [];

      for (let c = 0; c < 7; c++) {
        row.push(null)
      }

      board.push(row);
    }

    setBoardData([...board]);
    setCurrentPlayer(player1);
    setGameOver(false);
    setMessage('');

    if (totalGames > round) {
      setRound(round + 1);
    } else {
      setRound(1);
    }

    // Remove all winning marks
    [...document.querySelectorAll('.win')].forEach(el => el.classList.remove('win'))
  }

  const checkVertical = (board) => {
    // Check only if row is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c] &&
            board[r][c] === board[r - 2][c] &&
            board[r][c] === board[r - 3][c]) {
            winCordinates.push([r, c], [r - 1, c], [r - 2, c], [r - 3, c]);
            return board[r][c];
          }
        }
      }
    }
  }

  const checkHorizontal = (board) => {
    // Check only if column is 3 or less
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r][c + 1] &&
            board[r][c] === board[r][c + 2] &&
            board[r][c] === board[r][c + 3]) {
            winCordinates.push([r, c], [r, c + 1], [r, c + 2], [r, c + 3]);
            return board[r][c];
          }
        }
      }
    }
  }

  const checkDiagonalRight = (board) => {
    // Check only if row is 3 or greater AND column is 3 or less
    for (let r = 3; r < 6; r++) {
      for (let c = 0; c < 4; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c + 1] &&
            board[r][c] === board[r - 2][c + 2] &&
            board[r][c] === board[r - 3][c + 3]) {
            winCordinates.push([r, c], [r - 1, c + 1], [r - 2, c + 2], [r - 3, c + 3]);
            return board[r][c];
          }
        }
      }
    }
  }

  const checkDiagonalLeft = (board) => {
    // Check only if row is 3 or greater AND column is 3 or greater
    for (let r = 3; r < 6; r++) {
      for (let c = 3; c < 7; c++) {
        if (board[r][c]) {
          if (board[r][c] === board[r - 1][c - 1] &&
            board[r][c] === board[r - 2][c - 2] &&
            board[r][c] === board[r - 3][c - 3]) {
            winCordinates.push([r, c], [r - 1, c - 1], [r - 2, c - 2], [r - 3, c - 3]);
            return board[r][c];
          }
        }
      }
    }
  }

  const checkDraw = (board) => {
    for (let r = 0; r < 6; r++) {
      for (let c = 0; c < 7; c++) {
        if (board[r][c] === null) {
          return null;
        }
      }
    }
    return 'draw';
  }

  const markWin = (coOrdinates) => {
    const classList = [];
    const elementList = [];

    coOrdinates.forEach(arr => {
      classList.push(`.cell_${arr[0]}_${arr[1]}`);
    });

    elementList.push(...document.querySelectorAll(classList.join(',')));

    setTimeout(() => {
      elementList.forEach(element => element.classList.add('win'));
    }, 500);
  }

  const checkAll = (board) => {
    const result = checkVertical(board) || checkDiagonalRight(board) || checkDiagonalLeft(board) || checkHorizontal(board) || checkDraw(board);

    if (result) {
      markWin(winCordinates);
    }

    return result;
  }

  const play = (c) => {
    if (!gameOver) {
      // Place piece on board
      let board = boardData;

      for (let r = 5; r >= 0; r--) {
        if (!board[r][c]) {
          board[r][c] = currentPlayer;
          break;
        }
      }

      // Check status of board
      let result = checkAll(board);

      if (result === player1) {
        setBoardData([...board]);
        setGameOver(true);
        setMessage('Player 1 wins!');
        setPlayer1Score(player1Score + 1);
      } else if (result === player2) {
        setBoardData([...board]);
        setGameOver(true);
        setMessage('Player 2 wins!');
        setPlayer2Score(player2Score + 1);
      } else if (result === 'draw') {
        setBoardData([...board]);
        setGameOver(true);
        setMessage('Draw game.');
      } else {
        // Toggling player
        setBoardData([...board]);
        setCurrentPlayer((currentPlayer === player1) ? player2 : player1);
      }
    } else {
      setMessage('Game over. Please start a new game.');
    }
  }

  // initialize board only once
  useEffect(() => {
    initBoard();
  }, []);

  return (
    <div style={{
      height: "100vh",
      alignItems: "center",
      display: "flex",
      justifyContent: "center"
    }}>
      <div className="container">
        <div className="gridContainer">
          {boardData.map((row, i) => (<Row key={i} row={row} rowIndex={i} play={play} />))}
        </div>
        <Sidebar currentPlayer={currentPlayer} initBoard={initBoard} round={round} playerScore={{ 'player1': player1Score, 'player2': player2Score }} />
      </div>
      <p className="message">{message}</p>
    </div>
  )
}

export default GameBoard;