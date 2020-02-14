import React from 'react';
import '../../assets/styles/Home.css';
import logo from '../../assets/img/mycircus2.png';

const Home = () => {
  return (
    <div className="bckg-home">
      <img src={logo} alt="logo-home" className="responsive"></img>
      <div className="title-home">Welcomus !</div>
      <div className="subtitle-home">Les jeux du cirque</div>
    </div>
  );
};

export default Home;
