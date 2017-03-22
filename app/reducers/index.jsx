import { combineReducers } from 'redux';
import commands from './commands';
import transition from './transition';
import audioNotifier from './audioNotifier';
import challenges from './challenges';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  commands,
  transition,
  audioNotifier,
  challenges
})

export default rootReducer;
