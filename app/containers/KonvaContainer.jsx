import React from 'react';
import {connect} from 'react-redux';

import KonvaCanvas from '../components/KonvaCanvas';

import {setCurrentTileItem} from '../action-creators/itemCollision';
import {resetTransition} from '../action-creators/transition';
import {loadChallenge, updateCurrUserChallenge} from '../action-creators/challenges';
import {toggleExecution, resetProcedure} from '../reducers/commands.jsx';

const mapStateToProps = (state) => {
  return {
    transition: state.transition,
    challenges: state.challenges,
    user: state.auth,
    commands: state.commands
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setIntersector (item = {}) {
      dispatch(setCurrentTileItem(item))
    },

    resetCanvas (id) {
      dispatch(toggleExecution(false))
      dispatch(resetTransition())
      setTimeout(() => dispatch(loadChallenge(id)), 3000)
    },

    updateUserChallenge (id, user) {
      dispatch(toggleExecution(false))
      dispatch(updateCurrUserChallenge(user))
      dispatch(resetTransition())
      dispatch(loadChallenge(id + 1))
    },

    startExecution() {
      dispatch(toggleExecution(true))
    },

    stopExecution() {
      dispatch(toggleExecution(false))
    },

    resetProcedureOnState (id) {
      dispatch(resetProcedure())
      dispatch(resetTransition())
      setTimeout(() => {dispatch(loadChallenge(id))}, 5000)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(KonvaCanvas)
