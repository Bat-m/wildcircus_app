import React, { useRef } from 'react';
import CircusContext from '../../routes/CircusContext';
import '../../assets/styles/Subscribe.css';

import axios from 'axios';

const Subscribe = () => {
  const data = React.useContext(CircusContext);
  const firstname = useRef();
  const lastname = useRef();

  const submitForm = () => {
    axios
      .post('http://localhost:5000/login', {
        firstname: firstname.current.value,
        lastname: lastname.current.value
      })
      .then(res =>
        data.setData({
          id: res.data.insertId,
          firstname: firstname.current.value,
          lastname: firstname.current.value
        })
      );
  };

  return (
    <div className="subscribe">
      Nom : <input ref={firstname} type="text" />
      Prénom :
      <input ref={lastname} type="text" />
      <input type="submit" value="Envoyer" onClick={() => submitForm()} />
    </div>
  );
};

export default Subscribe;
