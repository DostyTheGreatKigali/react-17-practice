import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import React from 'react';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>S
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
        {/* <h1>Hello</h1> */}
        <Home />
      </div> 
    );
  }

}

export default App;
