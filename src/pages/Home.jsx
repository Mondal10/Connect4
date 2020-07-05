import React from 'react';

import customGame from '../assets/images/icons/one.png';
import twoPlayers from '../assets/images/icons/two.png';
import gameOnline from '../assets/images/icons/online.png';
import trainingGame from '../assets/images/icons/training.png';
import homeImage from '../assets/images/4inarow.png';

function Home({ setHomepage }) {

  const buttons = [
    {
      'label': 'Custom Game *',
      'icon': customGame,
      'color': '#4BABFF',
    },
    {
      'label': 'Two Players',
      'icon': twoPlayers,
      'color': '#4B7BFF',
      'method': () => setHomepage(false)
    },
    {
      'label': 'Game Online *',
      'icon': gameOnline,
      'color': '#4B4BFF',
    },
    {
      'label': 'Training Game *',
      'icon': trainingGame,
      'color': '#6E4BFF',
    }
  ];
  return (
    <div className="parentContainer">
      <div className="homepageContainer">
        <div style={{
          textAlign: "center",
          height: "160px"
        }}>
          <p style={{
            position: "relative",
            fontSize: "22px",
            fontWeight: "bold",
            left: "-100px",
            top: "50px",
            color: "#3D4276"
          }}>
            CONNECT FOUR!
          </p>
          <img src={homeImage} alt="homeImage" style={{
            position: "relative",
            top: "-130px",
            left: "140px",
            width: "260px"
          }}/>
        </div>
        <hr style={{width:"80%"}}/>
        <div className="btnContainer">
          {
            buttons.map((data) => (
              <button key={data.label}
                className="gameBtn"
                onClick={data.method ? data.method : null}
                style={{
                  background: data.color,
                  fontSize: "14px"
                }}
              >
                <img src={data.icon} alt={data.label} style={{
                  height: "20px",
                  width: "22px",
                  marginRight: "10px"
                }}/>
                {data.label}
              </button>
            ))
          }
        </div>
      </div>
    </div>
  )
}

export default Home;
