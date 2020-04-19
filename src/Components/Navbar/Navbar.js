import React from 'react';
import './Navbar.css';
import { Route, Switch } from 'react-router-dom';

import { navItemList } from '../../constants/navItemList';
import NavbarItem from './NavbarItem/NavbarItem';

const Navbar = () => (
  <div className="navbar">
    <ul className="navbar-nav">
      {navItemList.map((navItem) => {
        return (
          <NavbarItem
            href={navItem.href}
            icon={navItem.icon}
            text={navItem.text}
            key={navItem.key}
          />
        );
      })}
    </ul>
  </div>
);

export default Navbar;
