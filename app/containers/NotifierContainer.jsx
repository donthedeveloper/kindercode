import React from 'react';
import {connect} from 'react-redux';
// import store from '../store';
// import {setSound} from '../action-creators/audioNotifier';

function playSound (url) {
  const audio = new Audio(url)
  audio.play()
}

// WHy is this a component if it render's nothing?
class Notifier extends React.Component {

  componentDidUpdate () {
    if (this.props.sound.name) {
      playSound(this.props.sound.url)
    }
  }

  render () {
    return null;
  }
}

let mapStateToProps = state => {
  return {
    sound: state.audioNotifier
  }
}

export default connect(mapStateToProps, null)(Notifier)

