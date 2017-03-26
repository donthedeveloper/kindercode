import React from 'react';

// import { connect } from 'react-redux';
import { DropTarget } from 'react-dnd';

// import utilities
import itemTypes from '../utilities/itemTypes.jsx';

const blockTarget = {
  drop(props, monitor) {
    // console.log(props);
    const hasDroppedOnChild = monitor.didDrop();
    const item = monitor.getItem();

    if (!hasDroppedOnChild && !props.greedy) {
      props.insertIntoParentProcedure(props.nodeId, item.commandId, props.index);
    }

    return {
      name: 'DropZoneItem',
      index: props.index,
      parentId: props.nodeId
    };
  },
};

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    isOver: monitor.isOver(),
    canDrop: monitor.canDrop(),
    isOverCurrent: monitor.isOver({ shallow: true })
  };
}

class DropItem extends React.Component {
  render() {
    // console.log('NEW--------------------------------');
    // console.log('dropzoneitem index:', this.props.index);
    // console.log('node id:', this.props.nodeId);
    // console.log('parent id:', this.props.parentId);
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
        text: {this.props.text} <br />
        nodeId: {this.props.nodeId} <br />
        parentId: {this.props.parentId}
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
