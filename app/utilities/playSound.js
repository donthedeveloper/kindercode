const playSound = (url) => {
  const audio = new Audio(url)
  audio.play()
}

export default playSound
