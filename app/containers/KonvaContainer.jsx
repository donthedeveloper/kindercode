import React from 'react';
import {connect} from 'react-redux';

import KonvaCanvas from '../components/KonvaCanvas';

import {setCurrentTileItem} from '../action-creators/itemCollision';
import {resetTransition} from '../action-creators/transition';
import {loadChallenge} from '../action-creators/challenges';

const mapStateToProps = (state) => {
  return {
    transition: state.transition,
    challenges: state.challenges
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIntersector (item = {}) {
      dispatch(setCurrentTileItem(item))
    },

    resetCanvas (id) {
      dispatch(loadChallenge(id))
        .then(() => dispatch(resetTransition()))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KonvaCanvas)
