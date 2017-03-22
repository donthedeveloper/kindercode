import {SET_CHALLENGE} from '../action-creators/challenges';

const initialState = {
  sprite: {},
  yellowStars: [],
  blueStars: [],
  cactii: []
}

let reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_CHALLENGE:
      newState.sprite = action.sprite;
      newState.yellowStars = action.yellowStars;
      newState.blueStars = action.blueStars;
      newState.cactii = action.cactii;
      return newState;

    default:
      return state;
  }
}

export default reducer
