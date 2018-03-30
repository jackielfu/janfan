import React, { Component } from 'react';
import './App.css';

import KanbanBoard from './components/KanbanBoard.js';

const titles = ['one', 'two', 'three', 'four'];

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1><center>JANFAN</center></h1>
        {titles.map((title, index) => {
          return <KanbanBoard title={title} key={index} />
        })}
      </div>
    );
  }
}

export default App;
