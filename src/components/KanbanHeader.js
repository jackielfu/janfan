import React from 'react';

const KanbanHeader = ({ title, index }) => {
  return <div style={headerStyle}>{title}</div>
}

const headerStyle = {
  fontFamily: 'helvetica',
  fontSize: '1.5em',
  height: '2em',
  width: '100%',
  marginLeft: '.5em'
}

export default KanbanHeader;