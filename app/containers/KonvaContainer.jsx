import React from 'react';
import {connect} from 'react-redux';

import KonvaCanvas from '../components/KonvaCanvas';

import {setCurrentTileItem} from '../action-creators/itemCollision';

let mapStateToProps = (state) => {
  return {
    transition: state.transition,
    challenges: state.challenges
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    setIntersector (item = {}) {
      dispatch(setCurrentTileItem(item))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KonvaCanvas)
