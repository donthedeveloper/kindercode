export const SET_CURRENT_TILE_ITEM = 'SET_CURRENT_TILE_ITEM';

export const setCurrentTileItem = (item = {}) => {
  return {
    type: SET_CURRENT_TILE_ITEM,
    item
  }
}
