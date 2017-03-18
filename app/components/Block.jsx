// import modules
import React, { PropTypes } from 'React';
import { DragSource } from 'react-dnd';

// import utilities
import itemTypes from '../utilities/itemTypes.jsx';

/**
 * Implements the drag source contract.
 */
const blockSource = {
  beginDrag(props) {
    return {
      commandId: props.commandId,
      // text: props.text
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {
      console.log('item:', item);
      console.log('drop result:', dropResult);

      props.insertIntoProcedure(item.commandId);

      // window.alert( // eslint-disable-line no-alert
      //   `You dropped ${item.text} into ${dropResult.name}!`,
      // );
    }
  }
};

/**
 * Specifies the props to inject into your component.
 */
function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
}

const propTypes = {
  text: PropTypes.string.isRequired,

  // Injected by React DnD:
  isDragging: PropTypes.bool.isRequired,
  connectDragSource: PropTypes.func.isRequired
};

class Block extends React.Component {
  render() {
    const { isDragging, connectDragSource, text } = this.props;
    return connectDragSource(
      <li style={{ opacity: isDragging ? 0.5 : 1 }}>
        {text}
      </li>
    );
  }
}

Block.propTypes = propTypes;

// Export the wrapped component:
export default DragSource(itemTypes.BLOCK, blockSource, collect)(Block);
