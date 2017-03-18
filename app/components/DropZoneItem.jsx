// import modules
import React, { PropTypes, Component } from 'react';
// import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

// import utilities
import itemTypes from '../utilities/itemTypes.jsx';


const blockTarget = {
  drop() {
    return { name: 'Dustbin' };
  },
};


function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
  };
}

class DropZoneItem extends React.Component {

  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  };

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    console.log('DropZone props:', this.props);

    let backgroundColor = 'rgba(38, 12, 12, .10)';
    if (isActive) {
      backgroundColor = 'darkgreen';
    } else if (canDrop) {
      backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(
      <li className="drop-zone-item" style={{ backgroundColor }} />
    );
  }

}

const TargetDropZoneItem = DropTarget(itemTypes.BLOCK, blockTarget, collect)(DropZoneItem);

export default TargetDropZoneItem;
