import { combineReducers } from 'redux';
import commands from './commands';
import transition from './transition';
import audioNotifier from './audioNotifier';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  commands,
  transition,
  audioNotifier
})

export default rootReducer;
