import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import CircusContext from '../../routes/CircusContext';
import simba from '../../assets/img/Simba.png';
import '../../assets/styles/GameOne.css';
import axios from 'axios';

const GameOne = () => {
  const data = React.useContext(CircusContext);
  const [top, setTop] = useState();
  const [left, setLeft] = useState();
  const [startTimer, setStartTimer] = useState();
  const [count, setCount] = useState(0);
  const [start, setStart] = useState(true);
  const [final, setFinal] = useState(false);

  const [size, setSize] = useState([0, 0]);

  useEffect(() => {
    document.getElementById('simba').style.visibility = 'hidden';
    setSize([window.innerWidth, window.innerHeight]);
  }, []);

  const randomizeTopSimba = toper => {
    setTop(
      setInterval(() => {
        document.getElementById('simba').style.top = `${Math.floor(
          Math.random() * Math.floor(1000)
        )}px`;
      }, 800)
    );
  };

  const randomizeLeftSimba = lefter => {
    setLeft(
      setInterval(() => {
        document.getElementById('simba').style.left = `${Math.floor(
          Math.random() * Math.floor(1000)
        )}px`;
      }, 800)
    );
  };

  const startSimba = () => {
    document.getElementById('simba').style.visibility = 'visible';
    setStartTimer(
      setInterval(() => {
        setCount(count => count + 1);
      }, 1000)
    );
    setStart(false);
    console.log(size);
    randomizeLeftSimba();
    randomizeTopSimba();
  };

  const getSimba = () => {
    document.getElementById('simba').style.visibility = 'hidden';
    clearInterval(startTimer);
    clearInterval(top);
    clearInterval(left);
    setFinal(true);

    setTimeout(() => {
      setFinal(false);
      setStart(true);
      setCount(0);
      temp();
    }, 3000);
  };

  const temp = () => {
    axios.put(`http://localhost:5000/score/${data.data.id}`, {
      score: count * 10
    });
  };

  const styleImg = {
    width: '80px',
    height: '80px',
    position: 'absolute'
  };

  return (
    <div className="bckg-gameone">
      <div className="timer-top">Timer: {count}</div>
      <div className="other"></div>
      {start && (
        <div
          className="mybutton"
          onClick={() => {
            startSimba();
          }}
        >
          Play
        </div>
      )}
      {final && (
        <Animated
          animationIn="tada"
          animationOut="fadeOutDown"
          animationInDuration={400}
          animationOutDuration={400}
          isVisible={true}
        >
          <div className="myFinal">Votre score est de {count * 10}</div>
        </Animated>
      )}
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
