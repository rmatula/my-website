import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Main from '../Main/Main';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <nav>
          <Navbar />
        </nav>
        <main>
          <Main />
        </main>
      </div>
    );
  }
}

export default App;
