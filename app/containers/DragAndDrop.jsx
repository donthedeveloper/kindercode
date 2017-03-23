// import modules
import React from 'react';
import { connect } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

// import components
import Block from '../components/Block';
import DropZoneItem from '../components/DropZoneItem';
import ProgramItem from '../components/ProgramItem';
import DragAndDropList from '../components/DragAndDropList';

// redux action creaters
import { insertIntoProcedure, insertIntoParentProcedure } from '../reducers/commands';

class DragAndDrop extends React.Component {
  constructor(props) {
    super(props);
    this.insertIntoProcedure = props.insertIntoProcedure.bind(this);
    this.insertIntoParentProcedure = props.insertIntoParentProcedure.bind(this);
  }

  render() {
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
                  insertIntoParentProcedure={this.insertIntoParentProcedure}
                />
              )
            }
          </ul>
          {/* same structure as child */}
            <DragAndDropList commands={this.props.commands} procedure={this.props.procedure} />
            {/*<ul className="drop-zone-list">
              <DropZoneItem commands={this.props.commands} procedure={this.props.procedure} index={0} />
              {this.props.procedure.map((node, index) =>
                (
                  <div key={index}>
                    <ProgramItem
                      text={this.props.commands[node.commandId].text}
                      index={index+1}
                      parentId={node.id}
                      childNodes={node.children}
                    >

                    </ProgramItem>
                  <DropZoneItem commands={this.props.commands} procedure={this.props.procedure} index={index+1} />
                  </div>
                )
              )}
            </ul>*/}
          {/* end same structure as child */}
        </div>

    );
  }

}

const mapStateToProps = (state) => {
  return {
    commands: state.commands.commands,
    procedure: state.commands.procedure
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    insertIntoProcedure: (index, commandId) => {
      dispatch( insertIntoProcedure(index, commandId) );
    },
    insertIntoParentProcedure: (parentId, commandId, index) => {
      // console.log('recent parent id:', parentId);
      dispatch( insertIntoParentProcedure(parentId, commandId, index) );
    }
  }
};

const connectedDragAndDrop = connect(mapStateToProps, mapDispatchToProps)(DragAndDrop);
export default DragDropContext(HTML5Backend)(connectedDragAndDrop);
