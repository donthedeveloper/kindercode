import axios from 'axios';
import {authenticated} from '../reducers/auth.jsx';

export const SET_CHALLENGE = 'SET_CHALLENGE';
export const COLLECT_STAR = 'COLLECT_STAR';
export const NUM_CHALLENGES = 'NUM_CHALLENGES';

export const collect = (star) => {
  return {
    type: COLLECT_STAR,
    star
  }
}

export const setNumChallenges = (numChallenges) => {
  return {
    type: NUM_CHALLENGES,
    numChallenges: numChallenges
  }
}

export const setChallenge = (challenge) => {
  return {
    type: SET_CHALLENGE,
    id: challenge.id,
    totalStars: challenge.total_stars,
    sprite: challenge.sprite,
    yellowStars: challenge.yellow_star,
    blueStars: challenge.blue_star,
    cactii: challenge.cactus
  }
}

export const setTotalChallengeNum = () =>
  dispatch =>
    axios.get('/api/challenges')
    .then(res => res.data)
    .then(challenges => {
      dispatch(setNumChallenges(challenges.length))
    })
    .catch(err => console.error(err))


export const loadChallenge = (id) =>
  dispatch =>
    axios.get(`/api/challenges/${id}`)
      .then(res => res.data)
      .then(challenge => dispatch(setChallenge(challenge)))
      .catch(err => console.log(err))


export const updateCurrUserChallenge = (user) =>
  dispatch => {
      user.challenge_id += 1;
      const userID = user.id;
      axios.put(`/api/users/${userID}`, user)
      .then(res => res.data)
      .then(updatedUser => dispatch(authenticated(updatedUser)))
      .catch(err => console.error(err))
}
