import React from 'react';
import {connect} from 'react-redux';
import store from '../store';
import {setSound} from '../action-creators/audioNotifier';

function playSound (url) {
  const audio = new Audio(url)
  audio.play()
}

class Notifier extends React.Component {

  componentDidUpdate () {
    if (this.props.sound.name) {
      playSound(this.props.sound.url)
    }
  }

  queueSound(name) {
    store.dispatch(setSound(name))
  }

  render () {
    return (
      <button onClick={() => this.queueSound('penguin')}>Temporary Play Button</button>
    )
  }
}

let mapStateToProps = state => {
  return {
    sound: state.audioNotifier
  }
}

export default connect(mapStateToProps, null)(Notifier)

