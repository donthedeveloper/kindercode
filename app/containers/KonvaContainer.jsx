import React from 'react';
import {connect} from 'react-redux';

import KonvaCanvas from '../components/KonvaCanvas';

let mapStateToProps = (state) => {
  return {
    transition: state.transition,
  }
}

export default connect(mapStateToProps, null)(KonvaCanvas)
