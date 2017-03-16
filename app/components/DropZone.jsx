// import modules
import React, { PropTypes, Component } from 'react';
import { DropTarget } from 'react-dnd';

// import components
import DropItem from './DropItem';

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
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    console.log('DropZone props:', this.props);

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
            <DropItem key={node.id} text={this.props.commands[node.commandId].text} />
        ) }
      </ul>
    );
  }
}

// Export the wrapped component:
export default DropTarget(itemTypes.BLOCK, blockTarget, collect)(DropZone);
