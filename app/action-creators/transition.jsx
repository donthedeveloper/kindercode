export const MOVE_X_LEFT = 'MOVE_X_LEFT';
export const MOVE_X_RIGHT = 'MOVE_X_RIGHT';
export const MOVE_Y_UP = 'MOVE_Y_UP';
export const MOVE_Y_DOWN = 'MOVE_Y_DOWN';
export const ROTATE_SPRITE = 'ROTATE_SPRITE';
export const INCREMENT_STAR_COUNT = 'INCREMENT_STAR_COUNT';

export const moveXLeft = (xCoord) => {
  return {
    type: MOVE_X_LEFT,
    xCoord
  }
}

export const moveXRight = (xCoord) => {
  return {
    type: MOVE_X_RIGHT,
    xCoord
  }
}

export const moveYUp = (yCoord) => {
  return {
    type: MOVE_Y_UP,
    yCoord
  }
}

export const moveYDown = (yCoord) => {
  return {
    type: MOVE_Y_DOWN,
    yCoord
  }
}

export const rotateSprite = (rotation) => {
  return {
    type: ROTATE_SPRITE,
    rotation
  }
}

export const incrementCollectedStars = () => {
  return {
    type: INCREMENT_STAR_COUNT,
    numStars: 1
  }
}
