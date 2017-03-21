import Command, {FunctionInstance} from './command.js';
import {Assignment, Add} from './utils.js';
import {If, Condition} from './conditionals.js';
import {Loop} from './loops.js';
import store from '../store.jsx';
import {MoveX, MoveY, Speak} from './konvaUtils.js';


export function storeCmd (func, command, parent = null) {
  if (command.type === 'if') {
    let ifInstance = new If(new Condition(command.condition));
    if (parent) parent.then(ifInstance);
    else func.storeCommand(ifInstance);
    return ifInstance;
  }
  else if (command.type === 'loop') {
    let loop = new Loop(command.input);
    if (parent) parent.then(loop);
    else func.storeCommand(loop)
    return loop;
  }
  else {
    func.storeCommand(new MoveX(300));
    func.storeCommand(new Speak('panda'));
    func.storeCommand(new MoveY(300));
  }
}

export function mapStateToCmdObj(func = new FunctionInstance(), program = store.getState().commands.procedure, parent = null) {
  if (!parent && !program.length){
    console.log("hit base case and func is: ", func);
    return func;
  }
  else {
    program.forEach(command => {
      storeCmd(func, command, parent)
      let nested = command.children;
      if (nested) mapStateToCmdObj(func, nested, command);
      else mapStateToCmdObj(func, program.slice(1));
    });
  }
}

//non recursive version for test on 3/20/17
// export function mapStateToCmdObj(func = new FunctionInstance(), program = store.getState().commands.procedure) {
//   program.forEach(command => {
//     func.storeCommand(new MoveX(300));
//     func.storeCommand(new Speak('panda'));
//     func.storeCommand(new MoveY(300));
//   })
//   console.log("func before returning it is: ", func);
//   return func;
// }
