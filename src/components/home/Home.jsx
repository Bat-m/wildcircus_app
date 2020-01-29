import React from 'react';
import '../../assets/styles/Home.css';
import logo from '../../assets/img/mycircus.png';

const Home = () => {
  return (
    <div className="bckg-home">
      {/* <div className="logo-home" /> */}
      <img src={logo} alt="logo-home" className="responsive"></img>
      <div className="title-home">Welcomus !</div>
    </div>
  );
};

export default Home;
