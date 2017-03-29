// import modules
import React, { PropTypes } from 'React';
import { DragSource } from 'react-dnd';

// import utilities
import itemTypes from '../utilities/itemTypes.jsx';

/**
 * Implements the drag source contract.
 */
const blockSource = {
  beginDrag(props, monitor, component) {
    let input = component.state.input;
    if (input === '') {
      input = 0;
    } else if (input) {
      input = +input;
    }

    return {
      commandId: props.commandId,
      input: input
    };
  },

  endDrag(props, monitor) {
    const item = monitor.getItem();
    const dropResult = monitor.getDropResult();

    if (dropResult) {

      if (dropResult.parentId === null) {
        props.insertIntoProcedure(dropResult.index, item.commandId, item.input);
      }
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
  constructor(props) {
    super(props);

    this.isLoop = (props.text === 'Repeat');
    this.inputDefaultValue = (this.isLoop) ? 3 : null;

    this.state = {
      input: this.inputDefaultValue
    }
  }

  onInputChange(e) {
    const inputValue = e.target.value;
    this.setState({
      input: e.target.value
    })
  }

  render() {
    const { isDragging, connectDragSource, text } = this.props;
    return connectDragSource(
      <li style={{ opacity: isDragging ? 0.5 : 1 }}>
        {text}
        {text === 'Repeat' &&
          <span>
            <input className="loop-input" type='text' defaultValue={this.state.input} onChange={this.onInputChange.bind(this)} />
            times
          </span>
        }
      </li>
    );
  }
}

Block.propTypes = propTypes;

// Export the wrapped component:
export default DragSource(itemTypes.BLOCK, blockSource, collect)(Block);
