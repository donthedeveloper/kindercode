import axios from 'axios';

export const SET_CHALLENGE = 'SET_CHALLENGE';
export const COLLECT_STAR = 'COLLECT_STAR';

export const collect = (star) => {
  return {
    type: COLLECT_STAR,
    star
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

export const loadChallenge = (id) =>
  dispatch =>
    axios.get(`/api/challenges/${id}`)
      .then(res => res.data)
      .then(challenge => dispatch(setChallenge(challenge)))
      .catch(err => console.log(err))
