export const SET_SOUND = 'SET_SOUND';

export const setSound = name => {
  return {
    type: SET_SOUND,
    name,
    url: `/audio/${name}.wav`
  }
}
