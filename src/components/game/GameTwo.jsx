import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import CircusContext from '../../routes/CircusContext';
import it from '../../assets/img/take.png';
import balloon1 from '../../assets/img/ballon1.png';
import balloon2 from '../../assets/img/ballon2.png';
import balloon3 from '../../assets/img/ballon3.png';
import balloon4 from '../../assets/img/ballon1.png';
import balloon5 from '../../assets/img/ballon2.png';
import balloon6 from '../../assets/img/ballon3.png';
import '../../assets/styles/GameTwo.css';
import axios from 'axios';

const GameTwo = () => {
  const arrayImg = [balloon1, balloon2, balloon3, balloon4, balloon5, balloon6];
  const data = React.useContext(CircusContext);
  const [startTimer, setStartTimer] = useState();
  const [count, setCount] = useState(10);
  const [start, setStart] = useState(true);
  const [ballon, setBallon] = useState(0);
  const [final, setFinal] = useState(false);
  const [countTwo, setCountTwo] = useState(0);
  const [scoring, setScoring] = useState(0);

  const startBalloon = () => {
    setStartTimer(
      setInterval(() => {
        setCount(count => count - 1);
      }, 1000)
    );
    setStart(false);
    setBallon(1);
  };

  const getBalloon = () => {
    setBallon(ballon => ballon + 1);
    setCountTwo(countTwo => countTwo + 1);
    setScoring(scoring => scoring + 1);
  };

  const postGameTwoScore = () => {
    axios.put(`http://localhost:5000/score/${data.data.id}`, {
      score: scoring * 10
    });
  };

  useEffect(() => {
    if (count === 0) {
      setCount(0);
      clearInterval(startTimer);
      setCountTwo(0);
      setBallon(0);
      setFinal(true);
      setTimeout(() => {
        setFinal(false);
        setStart(true);
        setCount(10);
        setScoring(0);
        postGameTwoScore();
      }, 3000);
    }
  }, [count]);

  useEffect(() => {
    if (countTwo >= arrayImg.length) {
      setCountTwo(0);
      setBallon(1);
    }
  });

  const styleImg = {
    width: '50%',
    height: '100vh',
    position: 'absolute'
  };

  const styleImgBalloon = {
    width: '19%',
    height: '30vh',
    position: 'absolute',
    zIndex: '4',
    top: '50px'
  };

  return (
    <div className="bckg-gametwo">
      <div className="timer-top-gametwo">Timer: {count}</div>
      {start && (
        <div
          className="mybutton-gametwo"
          onClick={() => {
            startBalloon();
          }}
        >
          Play
        </div>
      )}
      {final && (
        <Animated
          animationIn="tada"
          animationOut="fadeOutDown"
          animationInDuration={4000}
          animationOutDuration={4000}
          isVisible={true}
        >
          <div className="myFinal-gametwo">
            Votre score est de {scoring * 10}
          </div>
        </Animated>
      )}

      {ballon === countTwo + 1 && (
        <img
          id="balloon-gametwo"
          src={arrayImg[countTwo]}
          alt="balloon-gametwo"
          style={styleImgBalloon}
          onClick={() => getBalloon()}
        />
      )}

      <img id="it-gametwo" src={it} alt="it-gametwo" style={styleImg} />
    </div>
  );
};

export default GameTwo;
