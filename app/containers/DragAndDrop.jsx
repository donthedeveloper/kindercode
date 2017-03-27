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

  filterByTypeAction(arr) {
    return arr.filter((elem) =>
      elem.commandType === 'action'
    );
  }

  filterByTypeProgramming(arr) {
    return arr.filter((elem) =>
      elem.commandType === 'programming'
    );
  }

  render() {
    return (


      <div className='drag-container'>
        <div className='draggable-items'>
          <div className='action-container'>
            <h3 className='action-header'>Actions</h3>
            <ul className='action-list'>
              {
                this.filterByTypeAction(this.props.commands)
                .map((command) =>
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
          </div>
          <div className='programming-container'>
            <h3 className='programming-header'>Programming</h3>
            <ul className='programming-list'>
              {
                this.filterByTypeProgramming(this.props.commands)
                .map((command) =>
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
          </div>
        </div>
          <div className="drop-zone-container">
            <h3 className='drop-zone-header'>Execute</h3>
            <DragAndDropList
              commands={this.props.commands}
              procedure={this.props.procedure}
              parentId={null}
              insertIntoProcedure={this.props.insertIntoProcedure}
              insertIntoParentProcedure={this.props.insertIntoParentProcedure}
            />
          </div>
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
