const initialState = {
  commands: [],
  procedure: [],
  procedureIdCount: 0
}

// utility functions
class Node {
  constructor(id, commandId, children=[]) {
    this.id = id;
    this.commandId = commandId;
    this.children = children;
  }
}

const traverse = (currentNode, parentId, newNode) => {
  if (parentId === currentNode.id) {
    const duplicateCurrentNode = Object.assign({}, currentNode);
    duplicateCurrentNode.children = [...duplicateCurrentNode.children, newNode];
    return duplicateCurrentNode;
  }
  return currentNode;
};

// constants
const ADD_COMMAND = 'ADD_COMMAND';

const INSERT_INTO_PROCEDURE = 'INSERT_INTO_PROCEDURE';
const INSERT_INTO_PARENT_PROCEDURE = 'INSERT_INTO_PARENT_PROCEDURE';

// action creaters
export const addCommand = (text) => ({
  type: ADD_COMMAND,
  text
});

export const insertIntoProcedure = (index, commandId) => ({
  type: INSERT_INTO_PROCEDURE,
  index,
  commandId
});

export const insertIntoParentProcedure = (parentId, commandId, index) => ({
  type: INSERT_INTO_PARENT_PROCEDURE,
  parentId,
  commandId,
  index
});

// reducer
export default (state=initialState, action) => {
  const newState = Object.assign({}, state);
  const newNode = new Node(newState.procedureIdCount, action.commandId, []);

  switch (action.type) {
    case ADD_COMMAND:
      const command = {};
      // this id builder is faulty for when commands are deleted, but useful for testing front-end
      command.id = newState.commands.length;
      command.text = action.text;
      newState.commands.push(command);
      break;
    case INSERT_INTO_PROCEDURE:
      newState.procedureIdCount++;
      newState.procedure = [...state.procedure];
      newState.procedure.splice(action.index, 0, newNode);
      break;
    case INSERT_INTO_PARENT_PROCEDURE:
    // console.log('index:', action.index);
      newState.procedureIdCount++;
      newState.procedure = newState.procedure.map((currentNode) => {
        return traverse(currentNode, action.parentId, newNode);
      });
      break;
    default:
      return state;
  }

  return newState;
}
