import axios from 'axios';

export const SET_CHALLENGE = 'SET_CHALLENGE';

export const setChallenge = (challenge) => {
  return {
    type: SET_CHALLENGE,
    sprite: challenge.sprite,
    yellowStars: challenge.yellow_star,
    blueStars: challenge.blue_star,
    cactii: challenge.cactus
  }
}

export const loadChallenge = (id) =>
  dispatch =>
    axios.get(`/api/challenges/${id}`)
      .then(res => res.data)
      .then(challenge => dispatch(setChallenge(challenge)))
      .catch(err => console.log(err))
