import {MOVE_X_LEFT, MOVE_X_RIGHT, MOVE_Y_UP, MOVE_Y_DOWN, ROTATE_SPRITE, INCREMENT_STAR_COUNT, RESET_TRANSITION} from '../action-creators/transition';
import {canvasHeight, canvasWidth, spriteWidth, spriteHeight} from '../constants/constants';

let initialState = {
  xCoord: canvasWidth / 16,
  yCoord: canvasHeight / 16,
  prevX: canvasWidth / 16,
  prevY: canvasWidth / 16,
  xGrid: 0,
  yGrid: 0,
  width: spriteWidth,
  height: spriteHeight,
  prevWidth: 150,
  prevHeight: 100,
  rotation: 0,
  prevRotation: 0,
  collectedStars: 0
}

let reducer = (state = initialState, action) => {

  const newState = Object.assign({}, state);

  switch (action.type) {
    case MOVE_X_LEFT:
      newState.xGrid -= 1
      newState.prevX = state.xCoord;
      newState.xCoord = action.xCoord;
      break;

    case MOVE_X_RIGHT:
      newState.xGrid += 1
      newState.prevX = state.xCoord;
      newState.xCoord = action.xCoord;
      break;

    case MOVE_Y_UP:
      newState.yGrid -= 1;
      newState.prevY = state.yCoord;
      newState.yCoord = action.yCoord;
      break;

    case MOVE_Y_DOWN:
      newState.yGrid += 1;
      newState.prevY = state.yCoord;
      newState.yCoord = action.yCoord;
      break;

    case ROTATE_SPRITE:
      newState.prevRotation = state.prevRotation;
      newState.rotation = action.rotation;
      break;

    case RESET_TRANSITION:
      return initialState;

    case INCREMENT_STAR_COUNT:
      newState.collectedStars += 1;
      break;

    default:
      return state;
  }

  return newState;
}

export default reducer;
