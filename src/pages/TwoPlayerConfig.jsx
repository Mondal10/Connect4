import React, { useContext } from 'react';

import numberOfGameIcon from '../assets/images/icons/winner.png';
import playerTurnOptions from '../assets/images/icons/run.png';

import { PlayerContext } from '../App';

function TwoPlayerConfig() {
  const {
    setConfigPage,
    playerNames,
    setPlayerNames,
    setTotalGames,
    setPlayerTurn,
    player1Image,
    setPlayer1Image,
    player2Image,
    setPlayer2Image
  } = useContext(PlayerContext);

  let imgUrl;

  const { player1, player2 } = playerNames;

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    if (name === 'player1') {
      setPlayerNames({ ...playerNames, player1: value });
    } else {
      setPlayerNames({ ...playerNames, player2: value });
    }
  };

  const handleNumberOfGames = (event) => {
    setTotalGames(Number(event.target.value));
  };

  const handlePlayerTurn = (event) => {
    setPlayerTurn(event.target.value);
  };

  const handleImageUrl = (event) => {
    const { name } = event.target;

    if (name === 'player1') {
      imgUrl = URL.createObjectURL(event.target.files[0])
      setPlayer1Image(imgUrl)
    } else {
      imgUrl = URL.createObjectURL(event.target.files[0])
      setPlayer2Image(imgUrl)
    }
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
          <div className="config" style={{
            background: "#DCF6E4"
          }}>
            <div className="player1 avatar" style={{
              backgroundImage: `url(${player1Image})`,
              marginRight: "10px"
            }}>
              <input type="file" name="player1" onChange={handleImageUrl} />
            </div>
            <label>
              Player 01:
              <input type="text" placeholder="Player 1 name" name="player1" value={player1} onChange={handleInputChange} />
            </label>
          </div>
          <div className="config" style={{
            background: "#F6EFD5"
          }}>
            <div className="player2 avatar" style={{
              backgroundImage: `url(${player2Image})`,
              marginRight: "10px"
            }}>
              <input type="file" name="player2" onChange={handleImageUrl} />
            </div>
            <label>
              Player 02:
              <input type="text" placeholder="Player 2 name" name="player2" value={player2} onChange={handleInputChange} />
            </label>
          </div>
          <div className="config" style={{
            background: "#EFF3FF"
          }}>
            <div className="otherConfig avatar" style={{
              backgroundImage: `url(${numberOfGameIcon})`,
              marginRight: "10px"
            }}></div>
            <label>
              Number of Games:
              <select onChange={handleNumberOfGames}>
                <option value="2">2 Games</option>
                <option value="3">3 Games</option>
                <option value="5">5 Games</option>
                <option value="10">10 Games</option>
              </select>
            </label>
          </div>
          <div className="config" style={{
            background: "#EFF3FF"
          }}>
            <div className="otherConfig avatar" style={{
              backgroundImage: `url(${playerTurnOptions})`,
              marginRight: "10px"
            }}></div>
            <label>
              Who starts:
              <select onChange={handlePlayerTurn}>
                <option value="alternate">Alternative turn</option>
                <option value="looserfirst">Looser first</option>
                <option value="winnerfirst">Winner first</option>
                <option value="player1">Always player 01</option>
                <option value="player2">Always player 02</option>
              </select>
            </label>
          </div>
        </div>

        <hr style={{ width: "80%" }} />
        <button className={`primaryBtn ${(player1 && player2) ? '' : 'disabled'}`} onClick={() => setConfigPage(false)}>Start Game</button>
      </div>
    </div>
  )
}

export default TwoPlayerConfig;
