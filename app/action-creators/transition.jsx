export const MOVE_SPRITE_X = 'MOVE_SPRITE_X';
export const MOVE_SPRITE_Y = 'MOVE_SPRITE_Y';
export const ROTATE_SPRITE = 'ROTATE_SPRITE';

export const moveSpriteX = (xCoord) => {
  return {
    type: MOVE_SPRITE_X,
    xCoord
  }
}

export const moveSpriteY = (yCoord) => {
  return {
    type: MOVE_SPRITE_Y,
    yCoord
  }
}

export const rotateSprite = (rotation) => {
  return {
    type: ROTATE_SPRITE,
    rotation
  }
}
