import React from 'react';
import './App.css';
import Navbar from '../Navbar/Navbar';
import Roots from '../../roots/Roots';

const App = () => (
  <div className="App">
    <nav>
      <Navbar />
    </nav>
    <main>
      <Roots />
    </main>
  </div>
);

export default App;
