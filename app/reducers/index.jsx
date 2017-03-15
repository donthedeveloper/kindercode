import { combineReducers } from 'redux';
import commands from './commands';

const rootReducer = combineReducers({
  auth: require('./auth').default,
  commands
})

export default rootReducer;
