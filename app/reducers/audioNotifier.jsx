import {SET_SOUND} from '../action-creators/audioNotifier';

const initialState = {
  name: '',
  url: ''
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
