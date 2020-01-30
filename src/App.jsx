import React, { useState } from 'react';

import './App.css';

import Routes from './routes/Routes';
import MenuBurger from './components/menu_burger/MenuBurger';

const App = () => {
  return (
    <div className="App">
      <Routes />
      <MenuBurger />
    </div>
  );
};

export default App;
