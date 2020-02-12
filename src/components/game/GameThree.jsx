import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import CircusContext from '../../routes/CircusContext';
import acrobat from '../../assets/img/acrobat.png';
import circle from '../../assets/img/circle.png';
import '../../assets/styles/GameThree.css';
import axios from 'axios';

const GameThree = () => {
  const [left, setLeft] = useState();
  const [start, setStart] = useState(true);
  const [final, setFinal] = useState(false);
  const [anim, setAnim] = useState();

  const [startTimer, setStartTimer] = useState();
  const [count, setCount] = useState(0);

  const randomizeLeftCircle = () => {
    // setLeft(
    //   setInterval(() => {
    //     document.getElementById('circle').style.left = `${Math.floor(
    //       Math.random() * Math.floor(1000)
    //     )}px`;
    //   }, 1000)
    // );
  };

  const styleImgAcrobat = {
    width: '150px',
    height: '200px',
    position: 'absolute',
    bottom: 0
  };

  const styleImgCircle = {
    width: '150px',
    height: '200px',
    position: 'absolute',
    top: 0
  };

  const clickTheAcrobat = () => {
    document.getElementById('acrobat').style.bottom = '40em';
    console.log(document.getElementById('acrobat').y);
  };

  const startGameThree = () => {
    setStartTimer(
      setInterval(() => {
        setCount(count => count + 1);
      }, 1000)
    );

    setStart(false);
    if (document.getElementById('circle')) {
      setLeft(
        setInterval(() => {
          document.getElementById('circle').style.left = `${Math.floor(
            Math.random() * Math.floor(1000)
          )}px`;
        }, 1000)
      );
    }

    if (
      document.getElementById('circle') &&
      document.getElementById('acrobat')
    ) {
      setAnim(
        setInterval(() => {
          let circle = document.getElementById('circle').x;
          let acrobat = document.getElementById('acrobat').y;
          if (circle > 300 && circle < 500) {
            if (acrobat < 90) {
              clearInterval(left);
              plop();
            }
          }
          if (acrobat < 90) {
            document.getElementById('acrobat').style.bottom = '0';
          }
        }, 500)
      );
    }
  };

  const plop = () => {
    clearInterval(startTimer);
    setTimeout(() => {
      setStart(true);
      console.log('acrobat ok');
      setCount(0);
      clearInterval(anim);
    }, 300);
  };

  return (
    <div className="bckg-gamethree">
      <div className="timer-top">Timer: {count}</div>
      <div className="other"></div>
      {start && (
        <div
          className="mybutton"
          onClick={() => {
            setTimeout(() => {
              startGameThree();
            }, 300);
          }}
        >
          Play
        </div>
      )}
      {/* {final && (
    <Animated
      animationIn="tada"
      animationOut="fadeOutDown"
      animationInDuration={400}
      animationOutDuration={400}
      isVisible={true}
    >
      <div className="myFinal">Votre score est de {count * 10}</div>
    </Animated>
  )} */}
      {!start && (
        <img
          id="circle"
          src={circle}
          alt="circle-is-not-here"
          style={styleImgCircle}
        />
      )}
      {!start && (
        <img
          id="acrobat"
          src={acrobat}
          alt="acrobat-is-not-here"
          style={styleImgAcrobat}
          onClick={() => clickTheAcrobat()}
        />
      )}
    </div>
  );
};

export default GameThree;
