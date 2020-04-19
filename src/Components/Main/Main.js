import React from 'react';
import './Main.css';
class Main extends React.Component {
  render() {
    return (
      <div className="main-content">
        <div className="svg-container">
          <img src={require('./final3svg.svg')} alt="" />
        </div>
      </div>
    );
  }
}

export default Main;
