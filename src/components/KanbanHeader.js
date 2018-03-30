import React from 'react';

const KanbanHeader = ({ title, i }) => {
  return (
    <div style={headerStyle(i)}>
      {title}
    </div>
  )
}

const colors = ["#8e6e95", "#39a59c", "#344759", "#e8741e"];

const headerStyle = i => ({
  height: '2em',
  backgroundColor: colors[i],
  width: '100%', 
})

export default KanbanHeader;