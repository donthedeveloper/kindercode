// import modules
import React from 'react';
import { connect } from 'react-redux';
import { DragDropContextProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// import components
import Block from '../components/Block';
import DropZone from '../components/DropZone';

// redux action creaters
import { insertIntoProcedure } from '../reducers/commands';

class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);
    this.insertIntoProcedure = props.insertIntoProcedure.bind(this);
  }

  render() {
    console.log('DragAndDrop Props:', this.props);
    return (
      <DragDropContextProvider backend={HTML5Backend}>
        <div className="container">
          <ul className="supplies">
            {
              this.props.commands.map((command) =>
                <Block
                  key={command.id}
                  commandId={command.id}
                  text={command.text}
                  insertIntoProcedure={this.insertIntoProcedure}
                />
              )
            }
          </ul>
          <DropZone procedure={ this.props.procedure } commands={this.props.commands} />
          {/*<ul className="drop-zone">

          </ul>*/}
        </div>
      </DragDropContextProvider>
    );
  }

}

const mapStateToProps = (state) => {
  return {
    commands: state.commands.commands,
    procedure: state.commands.procedure
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    insertIntoProcedure: (commandId) => {
      dispatch( insertIntoProcedure(commandId) )
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(DragAndDrop);
