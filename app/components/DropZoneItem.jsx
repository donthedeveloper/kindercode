// import modules
import React, { PropTypes, Component } from 'react';
// import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

// import utilities
import itemTypes from '../utilities/itemTypes.jsx';

const blockTarget = {
  drop(props) {
    return {
      name: 'DropZoneItem',
      index: props.index,
      parentId: null
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

class DropZoneItem extends React.Component {
  constructor(props) {
    super(props);
  }


  static propTypes = {
    connectDropTarget: PropTypes.func.isRequired,
    isOver: PropTypes.bool.isRequired,
    canDrop: PropTypes.bool.isRequired,
  };

  render() {
    const { canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;
    const procedureIsNotEmpty = this.props.procedure.length;

    const styles = {
      // display: 'none',
      backgroundColor: 'rgba(38, 12, 12, .10)'
    };

    if (procedureIsNotEmpty) {
      styles.display = 'none';
    } else {
      styles.display = 'block';
    }

    if (isActive || canDrop) {
      styles.display = 'block';
    }

    if (isActive) {
      styles.backgroundColor = 'darkgreen';
    } else if (canDrop) {
      styles.backgroundColor = 'darkkhaki';
    }

    return connectDropTarget(
      <li className="drop-zone-item" style={ styles } />
    );
  }

}

const TargetDropZoneItem = DropTarget(itemTypes.BLOCK, blockTarget, collect)(DropZoneItem);

export default TargetDropZoneItem;
