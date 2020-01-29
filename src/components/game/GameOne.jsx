import React, { useEffect } from 'react';
import simba from '../../assets/img/Simba.png';
import '../../assets/styles/GameOne.css';
const GameOne = () => {
  const randomizeTopSimba = () => {
    setInterval(() => {
      document.getElementById('simba').style.top = `${Math.floor(
        Math.random() * Math.floor(1000)
      )}px`;
    }, 800);
  };

  const randomizeLeftSimba = () => {
    setInterval(() => {
      document.getElementById('simba').style.left = `${Math.floor(
        Math.random() * Math.floor(1000)
      )}px`;
    }, 800);
  };

  const startSimba = () => {
    document.getElementById('simba').style.visibility = 'visible';
  };

  const getSimba = () => {
    document.getElementById('simba').style.visibility = 'hidden';
  };

  const styleImg = {
    width: '80px',
    height: '80px',
    position: 'relative'
  };

  useEffect(() => {
    document.getElementById('simba').style.visibility = 'hidden';

    const intervalOne = randomizeLeftSimba();
    const intervalTwo = randomizeTopSimba();

    return () => {
      clearInterval(intervalOne);
      clearInterval(intervalTwo);
    };
  }, []);

  return (
    <div className="bckg-gameone">
      GameONe
      <div
        className="mybutton"
        onClick={() => {
          startSimba();
        }}
      >
        Play
      </div>
      <img
        id="simba"
        src={simba}
        alt="logo-home"
        style={styleImg}
        onClick={() => getSimba()}
      ></img>
    </div>
  );
};

export default GameOne;
