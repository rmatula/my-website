import React, { Component } from 'react';
import './Navbar.css';
import { navItem } from '../../constants/navItemList';

import NavbarItem from './NavbarItem/NavbarItem';

export default function Navbar() {
  return (
    <div className="navbar">
      <ul className="navbar-nav">
        {this.state.navItems.map((navItem) => {
          return (
            <NavbarItem
              svgSource={navItem.svgSource}
              svgText={navItem.svgText}
              key={navItem.key}
            />
          );
        })}
      </ul>
    </div>
  );
}
