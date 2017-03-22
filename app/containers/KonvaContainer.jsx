import React from 'react';
import {connect} from 'react-redux';

import KonvaCanvas from '../components/KonvaCanvas';

let mapStateToProps = (state) => {
  return {
    transition: state.transition,
    challenges: state.challenges
  }
}

export default connect(mapStateToProps, null)(KonvaCanvas)
