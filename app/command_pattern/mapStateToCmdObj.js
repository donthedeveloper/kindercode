import Command, {FunctionInstance} from './command.js';
import {Assignment, Add} from './utils.js';
import {If, Condition} from './conditionals.js';
import {Loop} from './loops.js';
import store from '../store.jsx';


//program equals {.children}
export function mapStateToCmdObj(program) {
  let func = new FunctionInstance();



  return func;
}

export default function executeProgram () {

}


//example of how it would/could looks when executed
// mapStateToCmdObj(store.getState().commands.procedure).executeProgram()
