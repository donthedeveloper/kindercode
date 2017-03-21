import {MOVE_X_LEFT, MOVE_X_RIGHT, MOVE_Y_UP, MOVE_Y_DOWN, ROTATE_SPRITE} from '../action-creators/transition';
import {spriteWidth, spriteHeight} from '../constants/constants';

let initialState = {
  xCoord: 150,
  yCoord: 150,
  prevX: 150,
  prevY: 150,
  width: spriteWidth,
  height: spriteHeight,
  prevWidth: 150,
  prevHeight: 100,
  rotation: 0,
  prevRotation: 0,
}

let reducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case MOVE_X_LEFT:
    case MOVE_X_RIGHT:
      newState.prevX = state.xCoord;
      newState.xCoord = action.xCoord;
      break;

    case MOVE_Y_UP:
    case MOVE_Y_DOWN:
      newState.prevY = state.yCoord;
      newState.yCoord = action.yCoord;
      break;

      case ROTATE_SPRITE:
        newState.prevRotation = state.prevRotation;
        newState.rotation = action.rotation;
        break;

    default:
      return state;
  }

  return newState;
}

export default reducer;
