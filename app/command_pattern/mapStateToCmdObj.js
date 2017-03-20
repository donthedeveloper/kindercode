import Command, {FunctionInstance} from './command.js';
import {Assignment, Add} from './utils.js';
import {If, Condition} from './conditionals.js';
import {Loop} from './loops.js';
import store from '../store.jsx';
import {moveX} from './konvaUtils.js';


//program equals [command1, command2, command3]
//command2.children equals [nestedCommand1, nestedCommand2]

export function mapStateToCmdObj(func = new FunctionInstance(), program = store.getState().commands.procedure) {
  if (!program.length) {
    return func;
  }
  else {
    let nested = program.children;
    mapStateToCmdObj(func, program.slice(1));
  }
}

// function storeCommand (command) {

// }


//non recursive version for test on 3/20/17
export function mapStateToCmdObj(func = new FunctionInstance(), program = store.getState().commands.procedure) {
  program.forEach(command => {
    func.storeCommand(new moveX(5));
  })
  return func;
}


//example of how it would/could looks when executed
// mapStateToCmdObj().executeFunction()
