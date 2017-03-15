const initialState = {
  commands: [
    { id: 0, text: 'Move' },
    { id: 1, text: 'Jump'},
    { id: 3, text: 'Speak' },
    { id: 4, text: 'Wave'},
    { id: 5, text: 'Sit' }
  ]
}

// constants
const ADD_COMMAND = 'ADD_COMMAND';

// action creaters
export const addCommand = (text) => ({
  type: ADD_COMMAND,
  text
})

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
  }

  return newState;
}
