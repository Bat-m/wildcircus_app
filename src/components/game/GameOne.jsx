import React, { useEffect, useState } from 'react';
import simba from '../../assets/img/Simba.png';
import '../../assets/styles/GameOne.css';
import axios from 'axios';

const GameOne = () => {
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const [startTimer, setStartTimer] = useState();
  const [count, setCount] = useState(0);
  const [score, setScore] = useState(0);

  useEffect(() => {
    document.getElementById('simba').style.visibility = 'hidden';
  }, []);

  const randomizeTopSimba = toper => {
    setTop(
      setInterval(() => {
        document.getElementById('simba').style.top = `${Math.floor(
          Math.random() * Math.floor(1000)
        )}px`;
      }, 600)
    );
  };

  const randomizeLeftSimba = lefter => {
    setLeft(
      setInterval(() => {
        document.getElementById('simba').style.left = `${Math.floor(
          Math.random() * Math.floor(1000)
        )}px`;
      }, 600)
    );
  };

  const startSimba = () => {
    document.getElementById('simba').style.visibility = 'visible';
    setStartTimer(
      setInterval(() => {
        setCount(count => count + 1);
      }, 1000)
    );
    randomizeLeftSimba();
    randomizeTopSimba();
  };

  const getSimba = () => {
    document.getElementById('simba').style.visibility = 'hidden';
    clearInterval(startTimer);
    setTimeout(() => {
      setCount(0);
    }, 300);

    clearInterval(top);
    clearInterval(left);
    setScore(count * 10);
  };

  const styleImg = {
    width: '80px',
    height: '80px',
    position: 'relative'
  };

  return (
    <div className="bckg-gameone">
      counter: {count}
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
