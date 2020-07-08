import React, { useState, createContext } from 'react';

import Home from './pages/Home';
import Game from './pages/Game';
import TwoPlayerConfig from './pages/TwoPlayerConfig'
import './App.css';

import avatar1 from './assets/images/avatars/avatar01.png';
import avatar2 from './assets/images/avatars/avatar02.png';

const PlayerContext = createContext();
const PlayerProvider = PlayerContext.Provider;

function App() {
  const [homePage, setHomepage] = useState(true);
  const [configPage, setConfigPage] = useState(true);
  const [gameOver, setGameOver] = useState(false);
  const [roundOver, setRoundOver] = useState(false);
  const [playerNames, setPlayerNames] = useState({
    player1: '',
    player2: ''
  });
  const [player1Score, setPlayer1Score] = useState(0);
  const [player2Score, setPlayer2Score] = useState(0);
  const [totalGames, setTotalGames] = useState(2);
  const [message, setMessage] = useState('');
  const [player1Image, setPlayer1Image] = useState(avatar1);
  const [player2Image, setPlayer2Image] = useState(avatar2);

  const value = {
    totalGames,
    setTotalGames,
    setConfigPage,
    playerNames,
    setPlayerNames,
    gameOver,
    setGameOver,
    roundOver,
    setRoundOver,
    message,
    setMessage,
    player1Score,
    setPlayer1Score,
    player2Score,
    setPlayer2Score,
    player1Image,
    setPlayer1Image,
    player2Image,
    setPlayer2Image
  };

  return (
    <PlayerProvider value={value}>
      <div className="App">
        {
          (homePage) ? (
            <Home setHomepage={setHomepage} />
          ) : (
              (configPage) ? (
                <TwoPlayerConfig />
              ) : null
            )
        }
        {
          (!homePage && !configPage) ? (
            <Game />
          ) : (
              null
            )
        }
      </div>
    </PlayerProvider>
  );
}

export { PlayerContext };
export default App;
