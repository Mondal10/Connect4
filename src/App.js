import React, { useState, createContext } from 'react';

import Home from './pages/Home';
import Game from './pages/Game';
import TwoPlayerConfig from './pages/TwoPlayerConfig'
import './App.css';

const PlayerContext = createContext();
const PlayerProvider = PlayerContext.Provider;

function App() {
  const [homePage, setHomepage] = useState(true);
  const [configPage, setConfigPage] = useState(true);
  const [playerNames, setPlayerNames] = useState({
    player1: '',
    player2: ''
  });
  const [totalGames, setTotalGames] = useState(2);

  // Put other states also here (player name, etc)
  const value = {
    totalGames,
    setTotalGames,
    setConfigPage,
    playerNames,
    setPlayerNames,
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
