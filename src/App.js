import React, { Component } from 'react';
import './App.css';

import KanbanBoard from './components/KanbanBoard.js';

const titles = ['one', 'two', 'three', 'four'];

class App extends Component {
  render() {
    return (
      <div style={appStyle}>
        <h1 style={headerStyle}><center>JANFAN BOARD</center></h1>
        {titles.map((title, index) => {
          return <KanbanBoard title={title} key={index} />
        })}
      </div>
    );
  }
}

const appStyle = {
  display: 'flex',
  padding: '1em'
}

const headerStyle = {
  fontFamily: 'helvetica',
  letterSpacing: '3px'
}

export default App;
