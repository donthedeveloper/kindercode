// import modules
import React, { PropTypes, Component } from 'react';
import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

// import components
import ProgramItem from './ProgramItem';

// import utilities
import itemTypes from '../utilities/itemTypes.jsx';

const style = {
  // height: '12rem',
  // width: '12rem',
  // marginRight: '1.5rem',
  // marginBottom: '1.5rem',
  // color: 'white',
  // padding: '1rem',
  // textAlign: 'center',
  // fontSize: '1rem',
  // lineHeight: 'normal',
  // float: 'left',
};

const blockTarget = {
  drop() {
    return { name: 'Dustbin' };
  },
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

// @DropTarget(ItemTypes.BLOCK, blockTarget, (connect, monitor) => ({
//   connectDropTarget: connect.dropTarget(),
//   isOver: monitor.isOver(),
//   canDrop: monitor.canDrop(),
// }))

class DropZone extends Component {
  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  };

  render() {
    // i think its the line below replacing props, screwing things up
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    let backgroundColor = '#fff';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(
      <ul className="drop-zone" style={{ ...style, backgroundColor }}>
        {/*isActive ?
          'Release to drop' :
          'Drag a box here'
        */}
        { this.props.procedure.map((node) =>
            <ProgramItem key={node.id} text={this.props.commands[node.commandId].text} />
        ) }
      </ul>
    );
  }
}

// Export the wrapped component:
const TargetDropZone = DropTarget(itemTypes.BLOCK, blockTarget, collect)(DropZone);
export default TargetDropZone;

// const mapStateToProps = (state) => {
//   return {
//     commands: state.commands.commands,
//     procedure: state.commands.procedure
//   }
// }
//
// // const mapDispatchToProps = (dispatch) => {
// //   return {
// //     insertIntoProcedure: (commandId) => {
// //       dispatch( insertIntoProcedure(commandId) )
// //     }
// //   }
// // }
//
// export default connect(mapStateToProps)(TargetDropZone);
