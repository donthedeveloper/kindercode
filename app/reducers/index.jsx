import { combineReducers } from 'redux';
import commands from './commands';
import transition from './transition';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  commands,
  transition
})

export default rootReducer;
