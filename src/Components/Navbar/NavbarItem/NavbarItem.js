import React from 'react';
import './NavbarItem.css';
import { Link } from 'react-router-dom';

const NavbarItem = ({ icon, text, href }) => (
  <li className="nav-item">
    <Link to={href} className="nav-link">
      <div className="nav-svg">
        <img height="50" width="50" src={icon} alt="" />
      </div>
      <span className="link-text">{text}</span>
    </Link>
  </li>
);

export default NavbarItem;
