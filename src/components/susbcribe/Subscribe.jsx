import React, { useRef } from 'react';
import CircusContext from '../../routes/CircusContext';
import '../../assets/styles/Subscribe.css';

import axios from 'axios';

const Subscribe = () => {
  const data = React.useContext(CircusContext);
  const pseudo = useRef();
  const submitForm = () => {
    axios
      .post(`${process.env.REACT_APP_AXIOS_URL}/api/login`, {
        pseudo: pseudo.current.value
      })
      .then(res => {
        data.setData({
          id: res.data.insertId,
          pseudo: pseudo.current.value
        });
        pseudo.current.value = '';
      });
  };

  return (
    <div className="subscribe">
      Pseudo : <input ref={pseudo} type="text" />
      <input type="submit" value="Envoyer" onClick={() => submitForm()} />
    </div>
  );
};

export default Subscribe;
