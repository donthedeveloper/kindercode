import {SET_CHALLENGE, COLLECT_STAR} from '../action-creators/challenges';

const initialState = {
  sprite: {},
  yellowStars: [],
  blueStars: [],
  cactii: []
}

let reducer = (state = initialState, action) => {
  const newState = Object.assign({}, state);
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

  switch (action.type) {
    case SET_CHALLENGE:
      newState.sprite = action.sprite;
      newState.yellowStars = action.yellowStars;
      newState.blueStars = action.blueStars;
      newState.cactii = action.cactii;
      return newState;

    case COLLECT_STAR:
      newState[starType] = starArray;
      return newState;

    default:
      return state;
  }
}

export default reducer
