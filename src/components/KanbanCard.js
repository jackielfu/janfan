import React from 'react';

const KanbanCard = ({ card }) => {
  return <div style={cardStyle}>{card}</div>;
}

const cardStyle = {
  fontFamily: 'helvetica',
  height: '1.5em',
  backgroundColor: 'ghostwhite',
  margin: '.5em',
  padding: '.5em'
}

export default KanbanCard;