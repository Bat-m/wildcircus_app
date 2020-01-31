import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { stack as Menu } from 'react-burger-menu';
import '../../assets/styles/MenuBurger.css';

const MenuBurger = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleStateChange = () => {
    setIsOpen(false);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div>
      <Menu
        right
        pageWrapId={'page-wrap'}
        outerContainerId={'outer-container'}
        isOpen={isOpen}
        onStateChange={() => handleStateChange()}
      >
        <main id="page-wrap">
          <NavLink exact to="/" onClick={() => closeMenu()}>
            <p>Home</p>
          </NavLink>
          <NavLink to="/GameOne" onClick={() => closeMenu()}>
            <p>Dompte le lion</p>
          </NavLink>
          <NavLink to="/GameTwo" onClick={() => closeMenu()}>
            <p>Chope the balloon</p>
          </NavLink>
          {/* <NavLink to="/GameThree" onClick={() => closeMenu()}>
            <p>Jeu 3</p>
          </NavLink> */}

          <NavLink to="/Ranking" onClick={() => closeMenu()}>
            <p>Classement</p>
          </NavLink>
          <NavLink to="/Subscribe" onClick={() => closeMenu()}>
            <p>Inscription/login</p>
          </NavLink>
        </main>
      </Menu>
    </div>
  );
};

export default MenuBurger;
