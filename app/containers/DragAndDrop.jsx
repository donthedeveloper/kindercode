// import modules
import React from 'react';
import { connect } from 'react-redux';
// import { DragDropContextProvider } from 'react-dnd';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// import components
import Block from '../components/Block';
import DropZone from '../components/DropZone';
import DropZoneContainer from './DropZoneContainer';
import DropZoneItem from '../components/DropZoneItem';
import ProgramItem from '../components/ProgramItem';

// redux action creaters
import { insertIntoProcedure } from '../reducers/commands';

class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);
    this.insertIntoProcedure = props.insertIntoProcedure.bind(this);
  }

  render() {
    // console.log('DragAndDrop Props:', this.props);
    return (

        <div className="drag-container">
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
          {/*<DropZoneContainer commands={this.props.commands} procedure={this.props.procedure} />*/}
            <ul className="drop-zone-list">
              {/*<DropZoneItem commands={props.commands} procedure={props.precedure} />
              <ProgramItem commands={props.commands} procedure={props.precedure} />
              <DropZoneItem commands={props.commands} procedure={props.precedure} />
              <ProgramItem commands={props.commands} procedure={props.precedure} />*/}
              {/*program.map((node) =>
                node
              )*/}
              <DropZoneItem commands={this.props.commands} procedure={this.props.procedure} index={0} />
              {this.props.procedure.map((node, index) =>
                (
                  <div key={index}>
                    <ProgramItem
                      text={this.props.commands[node.commandId].text}
                      index={index*2+1}
                    />
                  <DropZoneItem commands={this.props.commands} procedure={this.props.procedure} index={index*2+2} />
                  </div>
                )
              )}
            </ul>
        </div>

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
    insertIntoProcedure: (index, commandId) => {
      console.log(index);
      dispatch( insertIntoProcedure(index, commandId) )
    }
  }
}

const connectedDragAndDrop = connect(mapStateToProps, mapDispatchToProps)(DragAndDrop);
export default DragDropContext(HTML5Backend)(connectedDragAndDrop);
