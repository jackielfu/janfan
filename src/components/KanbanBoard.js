import React from 'react';
import KanbanCard from './KanbanCard.js';
import KanbanHeader from './KanbanHeader.js';

class KanbanBoard extends React.Component {
  // state = {

  // }

  // add card function

  render() {
    return (
      <div style={boardStyle}>
        <KanbanHeader />
        <KanbanCard />
      </div>
    )
  }
}

const boardStyle = {
  padding: '.5em',
  width: '25%',
  border: '1px solid red'
}

export default KanbanBoard;