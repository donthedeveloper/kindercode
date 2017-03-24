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
      parentId: props.parentId
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
    // console.log('drop item props:', this.props);
    const { greedy, isOverCurrent, canDrop, isOver, connectDropTarget } = this.props;
    const isActive = canDrop && isOver;

    const styles = {};

    if (isActive) {
      styles.backgroundColor = '#3dff46';
    } else if (canDrop) {
      styles.backgroundColor = '#a6fcaa';
    }

    // console.log('props.childNodes:', this.props.childNodes);

    return connectDropTarget(
      <li className="drop-zone-program" style={styles}>
        {this.props.text}
        {/*this.props.childNodes.length > 0 && this.props.children*/}
        {this.props.childNodes.length ? this.props.children: null}
        {/*
          this.props.childNodes &&
          this.props.childNodes.map((childNode) =>
            (
              <ul className="drop-zone-list" key={index}>
                <ProgramItem
                  text={this.props.commands[node.commandId].text}
                  index={index+1}
                  parentId={node.id}
                  childNodes={node.children}
                />
            </ul>
            )
          )
        */}
      </li>
    );
  }
}

export default DropTarget(itemTypes.BLOCK, blockTarget, collect)(DropItem);
