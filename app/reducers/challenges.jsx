import {SET_CHALLENGE, COLLECT_STAR, NUM_CHALLENGES, TOGGLE_RED_TILE, COLLECT_RED_TILE_STAR} from '../action-creators/challenges';

const initialState = {
  id: 0,
  totalStars: 100,
  sprite: {},
  yellowStars: [],
  blueStars: [],
  cactii: [],
  numChallenges: 100,
  redTile: {
    xgrid: 0,
    ygrid: 0,
    draw: false,
    collected: false
  }
}

let reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);

  switch (action.type) {
    case SET_CHALLENGE:
      newState.id = action.id;
      newState.totalStars = action.totalStars;
      newState.sprite = action.sprite;
      newState.yellowStars = action.yellowStars;
      newState.blueStars = action.blueStars;
      newState.cactii = action.cactii;
      newState.redTile = action.redTile;
      return newState;

    case TOGGLE_RED_TILE:
      newState.redTile.draw = action.draw;
      return newState;

    case COLLECT_STAR:
      let starId = action.star.id;
      let starType = action.star.type;
      let starArray = newState[starType].map(star => {
      if (starId === star.id) {
        star.collected = true;
        return star;
      }
      else {
          return star;
        }
      });
      newState[starType] = starArray;
      return newState;

    case NUM_CHALLENGES:
      newState.numChallenges = action.numChallenges;
      return newState;

    case COLLECT_RED_TILE_STAR:
      let collectedRedTile = Object.assign({}, action.redTile);
      collectedRedTile.collected = true;
      collectedRedTile.draw = false;
      newState.redTile = collectedRedTile;
      return newState;

    default:
      return state;
  }
}

export default reducer
