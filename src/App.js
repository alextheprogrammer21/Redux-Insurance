import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import { Insurance } from './features/insurance/Insurance'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src='insu.jpg' className="App-logo" alt="logo" />
        <Insurance />
        <p>
          Simple Insurance Company to learn Redux
        </p>
      </header>
    </div>
  );
}

export default App;
