import {FunctionInstance} from './command.js';
import {If, Condition, IfNot} from './conditionals.js';
import {Loop} from './loops.js';
import store from '../store.jsx';
import {MoveXLeft, MoveXRight, MoveYUp, MoveYDown, Speak, CollectStar, CollectStarRedTile} from './konvaUtils.js';


export function storeCmd (func, command, parent = null) {
  let commandInstance;
  if (command.commandId === 0) commandInstance = new MoveYUp(); //MoveUp
  else if (command.commandId === 1) commandInstance = new MoveYDown(); //Move Down
  else if (command.commandId === 2) commandInstance = new MoveXLeft(); //MoveLeft
  else if (command.commandId === 3) commandInstance = new MoveXRight(); //MoveRight
  else if (command.commandId === 4) commandInstance = new Speak('pig'); //Speak
  else if (command.commandId === 5) commandInstance = new CollectStar(); //Collect Star
  else if (command.commandId === 6) commandInstance = new CollectStarRedTile(); //CollectOnRedStarTile
  else if (command.commandId === 7) commandInstance = new If(new Condition('redTile')); //If
  else if (command.commandId === 8) commandInstance = new IfNot(new Condition('redTile')); //If Not
  else if (command.commandId === 9) commandInstance = new Loop(); //Loop

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
  return func;
}
