import React, { Component } from 'react';
import './App.css';
import MemoryCard from './MemoryCard';
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <title>Memory Game</title>
          <subtitle>Match cards to win</subtitle>  
        </header>
        <MemoryCard />
      </div>
    );
  }
}

export default App;
