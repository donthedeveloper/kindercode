// import modules
import React from 'react';
import { connect } from 'react-redux';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// import components
import Block from '../components/Block';
import DropZone from '../components/DropZone';

const DragAndDrop = (props) => {
  return (
    <DragDropContextProvider backend={HTML5Backend}>
      <div className="container">
        <ul className="supplies">
          {
            props.commands.map((command) =>
              <Block key={command.id} text={command.text} />
            )
          }
        </ul>
        <DropZone />
        {/*<ul className="drop-zone">

        </ul>*/}
      </div>
    </DragDropContextProvider>
  );
}

const mapStateToProps = (state) => {
  return {
    commands: state.commands.commands
  }
}

export default connect(mapStateToProps)(DragAndDrop);
