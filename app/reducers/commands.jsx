const initialState = {
  commands: [],
  procedure: [],
  procedureIdCount: 0
}

class Node {
  constructor(id, commandId, children=[]) {
    this.id = id;
    this.commandId = commandId;
    this.subProcedures = children;
  }
}

// constants
const ADD_COMMAND = 'ADD_COMMAND';

const INSERT_INTO_PROCEDURE = 'INSERT_INTO_PROCEDURE';

// action creaters
export const addCommand = (text) => ({
  type: ADD_COMMAND,
  text
});

export const insertIntoProcedure = (commandId) => ({
  type: INSERT_INTO_PROCEDURE,
  commandId
});

// [procedure, procedure, procedure]
// procedure ->
//   id: 2
//   commandId: 5
//   subProcedures: [procedure, procedure, procedure]


// reducer
export default (state=initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case ADD_COMMAND:
      const command = {};
      // this id builder is faulty for when commands are deleted, but useful for testing front-end
      command.id = newState.commands.length;
      command.text = action.text;
      newState.commands.push(command);
      break;
    case INSERT_INTO_PROCEDURE:
      const node = new Node(newState.procedureIdCount, action.commandId, []);
      newState.procedureIdCount++;

      newState.procedure.push(node);

      // state.procedure.forEach((procedure) => {
      //
      // });

      break;
    default:
      return state;
  }

  return newState;
}
