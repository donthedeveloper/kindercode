import {SET_CURRENT_TILE_ITEM} from '../action-creators/itemCollision';

const initialState = {
  item: {}
};

let reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_CURRENT_TILE_ITEM:
      newState.item = action.item;
      break;

    default:
      return state;
  }

  return newState;
};

export default reducer
