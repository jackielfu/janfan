import React from 'react';
import KanbanCard from './KanbanCard.js';
import KanbanHeader from './KanbanHeader.js';

class KanbanBoard extends React.Component {
  state = {
    cards: []
  };

  addCard = card => {
    this.setState({
      cards: [...this.state.cards, card]
    });
  }

  render() {
    const { title, index } = this.props;
    const { cards } = this.state;

    return (
      <div style={boardStyle}>
        <KanbanHeader title={title} key={index} />
        {cards.map((card, index) => {
          return <KanbanCard card={card} key={index} />
        })}
        <div style={cardStyle} onClick={() => this.addCard(window.prompt('What would you like to add?'))}>
          {' '} + {' '}
        </div>
      </div>
    )
  }
}

const cardStyle = {
  fontFamily: 'helvetica',
  height: '1.5em',
  backgroundColor: 'ghostwhite',
  margin: '.5em',
  padding: '.5em'
}

const boardStyle = {
  margin: '.5em',
  padding: '.5em',
  width: '25%',
  border: '1px solid gray'
}

export default KanbanBoard;