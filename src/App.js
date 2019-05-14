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
        <ul>
        <li>
          Over 1'000'000 pieces sold!
        </li>
        <li>
          Every child in the world knows the name!
        </li>
        <li>
          A lot of exclusive games!
        </li>
        <li>
          And much more!
        </li>
        </ul>
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
