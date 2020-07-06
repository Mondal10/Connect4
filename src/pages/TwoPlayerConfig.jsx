import React, { useContext } from 'react';

// import avatar1 from '../../assets/images/avatars/avatar01.png';
// import avatar2 from '../../assets/images/avatars/avatar02.png';

import { PlayerContext } from '../App';

function TwoPlayerConfig() {
  const {
    setConfigPage,
    playerNames,
    setPlayerNames,
    setTotalGames
  } = useContext(PlayerContext);

  const { player1, player2 } = playerNames;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'player1') {
      setPlayerNames({ ...playerNames, player1: value });
    } else {
      setPlayerNames({ ...playerNames, player2: value });
    }
  };

  const handleSelectChange = (event) => {
    setTotalGames(Number(event.target.value));
  };

  return (
    <div style={{
      height: "100vh",
      alignItems: "center",
      display: "flex",
      justifyContent: "center"
    }}>
      <div className="configContainer">
        <div className="optinsContainer">
          <label>
            Player 01:
              <input type="text" name="player1" value={player1} onChange={handleInputChange} />
          </label>
          <label>
            Player 02:
              <input type="text" name="player2" value={player2} onChange={handleInputChange} />
          </label>
          <label>
            Number of Games:
            <select onChange={handleSelectChange}>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </label>
        </div>

        <hr style={{ width: "80%" }} />
        <button className={`primaryBtn ${(player1 && player2) ? '' : 'disabled'}`} onClick={() => setConfigPage(false)}>Start Game</button>
      </div>
    </div>
  )
}

export default TwoPlayerConfig;
