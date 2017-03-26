import {SET_CHALLENGE, COLLECT_STAR, NUM_CHALLENGES} from '../action-creators/challenges';

const initialState = {
  id: 0,
  totalStars: 100,
  sprite: {},
  yellowStars: [],
  blueStars: [],
  cactii: [],
  numChallenges: 100
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

    default:
      return state;
  }
}

export default reducer
