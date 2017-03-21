import React from 'react';

// import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

// import utilities
import itemTypes from '../utilities/itemTypes.jsx';

const blockTarget = {
  drop(props) {
    return {
      name: 'DropZoneItem',
      index: props.index,
      parentId: props.parentId,

    };
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

class DropItem extends React.Component {
  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    const styles = {};

    if (isActive) {
      styles.backgroundColor = 'darkgreen';
    } else if (canDrop) {
      styles.backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(
      <li className="drop-zone-program" style={styles}>{this.props.text}</li>
    );
  }
}

export default DropTarget(itemTypes.BLOCK, blockTarget, collect)(DropItem);
