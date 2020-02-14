import React, { useEffect, useState } from 'react';
import { Animated } from 'react-animated-css';
import CircusContext from '../../routes/CircusContext';
import it from '../../assets/img/take.png';
import balloon1 from '../../assets/img/ballon1.png';
import balloon2 from '../../assets/img/ballon2.png';
import balloon3 from '../../assets/img/ballon3.png';
import balloon4 from '../../assets/img/ballon4.png';
import balloon5 from '../../assets/img/ballon5.png';
import balloon6 from '../../assets/img/ballon6.png';
import '../../assets/styles/GameTwo.css';
import axios from 'axios';

const GameTwo = () => {
  const arrayColor = [
    'rgba(182, 15, 97, 0.9)',
    'rgba(242, 112, 45, 0.9)',
    'rgba(45, 181, 167, 0.9)',
    'rgba(190, 61, 244, 0.9)',
    'rgba(180, 224, 67, 0.9)',
    'rgba(242, 194, 58, 0.9)'
  ];
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
    data.data.id &&
      axios.put(
        `${process.env.REACT_APP_AXIOS_URL}/api/score/${data.data.id}`,
        {
          score: scoring
        }
      );
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
    if (countTwo >= arrayColor.length) {
      setCountTwo(0);
      setBallon(1);
    }
  });

  const styleImg = {
    height: '100vh',
    position: 'absolute',
    maxWidth: '100%'
  };

  return (
    <div className="bckg-gametwo">
      {!start && <div className="timer-top-gametwo">Timer: {count}</div>}

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
      {start && (
        <div className="text-gametwo">
          Salut{` ` + data.data.pseudo + ` !`} Attrape autant de ballons que
          possible, en cliquant dessus, dans le temps imparti.
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
            {' '}
            {scoring === 0
              ? "Oups t'as eu aucun ballon !"
              : `Ton score est de ${scoring} !`}
          </div>
        </Animated>
      )}

      {ballon === countTwo + 1 && (
        <div className="container-balloon">
          <div className="balloon">
            <div
              id="balloon-gametwo"
              className="color-balloon"
              style={{
                height: '15vh',
                position: 'relative',
                zIndex: '4',
                background: arrayColor[countTwo],
                color: arrayColor[countTwo],
                boxShadow: 'inset 10px 10px 10px  #f5f5f570'
              }}
              onClick={() => getBalloon()}
            ></div>
          </div>
        </div>
      )}

      <img id="it-gametwo" src={it} alt="it-gametwo" style={styleImg} />
    </div>
  );
};

export default GameTwo;
