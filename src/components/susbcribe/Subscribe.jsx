import React, { useRef } from 'react';
import '../../assets/styles/Subscribe.css';
import axios from 'axios';

const Subscribe = () => {
  const firstname = useRef();
  const lastname = useRef();
  const mail = useRef();
  const password = useRef();

  const submitForm = () => {
    axios.post('http://localhost:5000/login', {
      firstname: firstname.current.value,
      lastname: lastname.current.value,
      mail: mail.current.value,
      password: password.current.value
    });
  };

  return (
    <div className="subscribe">
      Nom : <input ref={firstname} type="text" />
      Prénom :
      <input ref={lastname} type="text" />
      Mail :
      <input ref={mail} type="mail" />
      Password :
      <input ref={password} type="password" />
      <input type="submit" value="Envoyer" onClick={() => submitForm()} />
    </div>
  );
};

export default Subscribe;
