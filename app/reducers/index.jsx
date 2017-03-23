import { combineReducers } from 'redux';
import commands from './commands';
import transition from './transition';
import audioNotifier from './audioNotifier';
import challenges from './challenges';
import itemCollision from './itemCollision'

const rootReducer = combineReducers({
  auth: require('./auth').default,
  commands,
  transition,
  audioNotifier,
  challenges,
  itemCollision
})

export default rootReducer;
