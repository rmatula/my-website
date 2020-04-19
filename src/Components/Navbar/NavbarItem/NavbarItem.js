import React from './node_modules/react';
import './NavbarItem.css';

class NavbarItem extends React.Component {
  render() {
    return (
      <li className="nav-item">
        <a href="#" className="nav-link">
          <div className="nav-svg">
            <img height="50" width="50" src={this.props.svgSource} alt="" />
          </div>
          <span className="link-text">{this.props.svgText}</span>
        </a>
      </li>
    );
  }
}

export default NavbarItem;
