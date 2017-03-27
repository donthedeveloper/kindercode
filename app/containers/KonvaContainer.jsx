import React from 'react';
import {connect} from 'react-redux';

import KonvaCanvas from '../components/KonvaCanvas';

import {setCurrentTileItem} from '../action-creators/itemCollision';
import {resetTransition} from '../action-creators/transition';
import {loadChallenge, updateCurrUserChallenge} from '../action-creators/challenges';
import {resetProcedure} from '../reducers/commands.jsx';

const mapStateToProps = (state) => {
  return {
    transition: state.transition,
    challenges: state.challenges,
    user: state.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIntersector (item = {}) {
      dispatch(setCurrentTileItem(item))
    },

    resetCanvas (id) {
      dispatch(resetTransition())
      dispatch(loadChallenge(id))
    },

    updateUserChallenge (id, user) {
      dispatch(updateCurrUserChallenge(user))
      dispatch(resetTransition())
      dispatch(loadChallenge(id + 1))
    },

    resetProcedureOnState (id) {
      dispatch(resetProcedure());
      dispatch(resetTransition())
      dispatch(loadChallenge(id))
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KonvaCanvas)
