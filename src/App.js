import React from 'react';
import logo from './assets/playstation.png';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          This is the most popular product ever!
        </h1>
        </header>
      <body className="App-body">
        <img src={logo} className="App-logo" alt="logo" />
        <details className="App-details">
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
        </details>
        <a
          className="App-link"
          href="https://www.playstation.com/de-ch/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn More
        </a>
        </body>
    </div>

  
  );
}

export default App;
