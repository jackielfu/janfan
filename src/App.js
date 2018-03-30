import React, { Component } from 'react';
import './App.css';

import KanbanBoard from './components/KanbanBoard.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1><center>JANFAN</center></h1>
        <KanbanBoard />
      </div>
    );
  }
}

export default App;
