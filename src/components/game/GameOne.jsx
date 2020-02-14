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
  const [count, setCount] = useState(15);
  const [start, setStart] = useState(true);
  const [final, setFinal] = useState(false);
  const [secondFinal, setSecondFinal] = useState(false);

  const [size, setSize] = useState([0, 0]);
  useEffect(() => {
    document.getElementById('simba').style.visibility = 'hidden';
    setSize([window.innerWidth, window.innerHeight]);
  }, []);

  const randomizeTopSimba = () => {
    setTop(
      setInterval(() => {
        let tempTop = Math.floor(Math.random() * Math.floor(1000));

        if (tempTop < size[1]) {
          document.getElementById('simba').style.top = `${tempTop}px`;
        }
      }, 650)
    );
  };

  const randomizeLeftSimba = () => {
    setLeft(
      setInterval(() => {
        let tempLeft = Math.floor(Math.random() * Math.floor(1000));
        if (tempLeft < size[0]) {
          document.getElementById('simba').style.left = `${tempLeft}px`;
        }
      }, 650)
    );
  };

  const startSimba = () => {
    document.getElementById('simba').style.visibility = 'visible';
    setStartTimer(
      setInterval(() => {
        setCount(count => count - 1);
      }, 1000)
    );
    setStart(false);
    randomizeLeftSimba();
    randomizeTopSimba();
  };

  const getSimba = () => {
    document.getElementById('simba').style.visibility = 'hidden';
    clearInterval(startTimer);
    clearInterval(top);
    clearInterval(left);
    setFinal(true);
    setSecondFinal(true);
    setTimeout(() => {
      setFinal(false);
      setStart(true);
      setSecondFinal(false);
      setCount(15);
      temp();
    }, 3000);
  };

  useEffect(() => {
    console.log('left: ', document.getElementById('simba').style.left);
    console.log('top: ', document.getElementById('simba').style.top);
  });

  useEffect(() => {
    console.log(size);

    if (count === 0 && !secondFinal) {
      document.getElementById('simba').style.visibility = 'hidden';
      clearInterval(startTimer);
      clearInterval(top);
      clearInterval(left);
      setFinal(true);

      setTimeout(() => {
        setFinal(false);
        setStart(true);
        setCount(15);
        temp();
      }, 3000);
    }
  }, [count]);

  const temp = () => {
    data.data.id &&
      axios.put(
        `${process.env.REACT_APP_AXIOS_URL}/api/score/${data.data.id}`,
        {
          score: count * 10
        }
      );
  };

  const styleImg = {
    width: '80px',
    height: '80px',
    bottom: '50px',
    position: 'absolute'
  };

  return (
    <div className="bckg-gameone">
      {!start && <div className="timer-top">Timer: {count}</div>}
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
      {start && (
        <div className="text-gameone">
          Salut{` ` + data.data.pseudo + ` !`} Attrape le lion en cliquant
          dessus, dans le temps imparti.
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
          <div className="myFinal">
            {count === 0
              ? 'Oups raté... Réessaye !'
              : `Ton score est de ${count * 10}`}
          </div>
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
