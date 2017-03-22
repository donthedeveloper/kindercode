import {SET_SOUND} from '../action-creators/audioNotifier';

const initialState = {
  name: null,  // Isn't this a string. Maybe ""
  url: null    // same here. Reflect the type of the variable in the initial state so string methods don't fail
  //Tom's rule!!!
}

const reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_SOUND:
      newState.name = action.name;
      newState.url = action.url;
      break;

    default:
      return state;
  }

  return newState
}

export default reducer;
