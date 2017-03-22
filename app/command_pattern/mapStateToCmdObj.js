import {FunctionInstance} from './command.js';
import {If, Condition} from './conditionals.js';
import {Loop} from './loops.js';
import store from '../store.jsx';
import {MoveXLeft, MoveXRight, MoveYUp, MoveYDown, Speak} from './konvaUtils.js';


export function storeCmd (func, command, parent = null) {
  let commandInstance;
  //Maybe these commandIDs could be wellnamed strings or better yet symbols?
  if (command.commandId === 0) commandInstance = new MoveYUp(); //MoveUp
  else if (command.commandId === 1) commandInstance = new MoveYDown(); //Move Down
  else if (command.commandId === 2) commandInstance = new MoveXLeft(); //MoveLeft
  else if (command.commandId === 3) commandInstance = new MoveXRight(); //MoveRight
  else if (command.commandId === 4) commandInstance = new Speak('pig'); //Speak
  else if (command.commandId === 5) commandInstance = new If(new Condition(command.condition)); //If
  else if (command.commandId === 6) commandInstance = new Loop(); //Loop

  if (parent) parent.then(commandInstance)
  else func.storeCommand(commandInstance)
  return commandInstance;
}

export function mapStateToCmdObj(func = new FunctionInstance(), program = store.getState().commands.procedure, parent = null) {
  if (parent || program.length){
    program.forEach(command => {
      let parentCmd = storeCmd(func, command, parent)
      let nested = command.children;
      if (nested) return mapStateToCmdObj(func, nested, parentCmd);
      else return mapStateToCmdObj(func, program.slice(1));
    });
  }
  console.log("func is: ", func);
  return func;
}
