import React from 'react';
import logo from './assets/playstation.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          This is the most popular product ever!
        </p>
        <a
          className="App-link"
          href="https://www.playstation.com/de-ch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
      </header>
    </div>

  
  );
}

export default App;
