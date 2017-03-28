import React from 'react';
import {connect} from 'react-redux';
import playSound from '../utilities/playSound';

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

