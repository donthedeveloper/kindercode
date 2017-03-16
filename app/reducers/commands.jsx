const initialState = {
  commands: [],
  procedure: [],
  procedureIdCount = 0;
}

class Node {
  constructor(id, layerId, commandId, children=[]) {
    this.id = id;
    this.layerId = layerId;
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

export const insertIntoProcedure = (layerId, orderInArr commandId) => ({
  type: INSERT_INTO_PROCEDURE,
  layerId,
  orderInArr,
  commandId
})

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
      const node = new Node(state.procedureIdCount, action.layerId, action.orderInArr, action.commandId, []);
      state.procedureIdCount++;

      state.procedure.forEach((procedure) => {
        if (procedure.layerId ===)
      });

      break;
    default:
      return state;
  }

  return newState;
}
