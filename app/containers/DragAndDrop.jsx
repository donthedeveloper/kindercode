// import modules
import React from 'react';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// import components
import Block from '../components/Block';

const DragAndDrop = () => {
  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <div className="container">
        <ul className="supplies">
          <Block text="1" />
          <Block text="2" />
          <Block text="3" />
          <Block text="4" />
        </ul>
        <ul className="drop-zone">

        </ul>
      </div>
    </DragDropContextProvider>
  );
}

export default DragAndDrop;
