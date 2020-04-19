import React, { Component } from 'react';
import './Navbar.css';
class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a href="#" className="nav-link">
              <div className="nav-svg">
                <img
                  height="50"
                  width="50"
                  src={require('./Navbar-icons/identification1.svg')}
                  alt=""
                />
              </div>
              <span className="link-text">About</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <div className="nav-svg">
                <img
                  height="50"
                  width="50"
                  src={require('./Navbar-icons/github1.svg')}
                  alt=""
                />
              </div>
              <span className="link-text">Github</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <div className="nav-svg">
                <img
                  height="50"
                  width="50"
                  src={require('./Navbar-icons/project1.svg')}
                  alt=""
                />
              </div>
              <span className="link-text">Projects</span>
            </a>
          </li>

          <li className="nav-item">
            <a href="#" className="nav-link">
              <div className="nav-svg">
                <img
                  height="50"
                  width="50"
                  src={require('./Navbar-icons/contact1.svg')}
                  alt=""
                />
              </div>
              <span className="link-text">Contact</span>
            </a>
          </li>
        </ul>
      </div>
    );
  }
}

export default Navbar;
