import {FunctionInstance} from './command.js';
import {If, Condition} from './conditionals.js';
import {Loop} from './loops.js';
import store from '../store.jsx';
import {MoveX, MoveY, Speak} from './konvaUtils.js';


export function storeCmd (func, command, parent = null) {
  let commandInstance;
  if (command.id === 0) commandInstance = new MoveUp(); //MoveUp
  else if (command.id === 1) commandInstance = new MoveDown(); //Move Down
  else if (command.id === 2) commandInstance = new MoveLeft(); //MoveLeft
  else if (command.id === 3) commandInstance = new MoveRight(); //MoveRight
  else if (command.id === 4) commandInstance = new Speak(); //Speak
  else if (command.id === 5) commandInstance = new If(new Condition(command.condition)); //If
  else if (command.id === 6) commandInstance = new Loop(command.input); //Loop
  else {
    func.storeCommand(new MoveX(300));
    func.storeCommand(new Speak('panda'));
    func.storeCommand(new MoveY(300));
  }
  if (parent) parent.then(commandInstance);
  // else func.storeCommand(commandInstance)
  return commandInstance;
}

export function mapStateToCmdObj(func = new FunctionInstance(), program = store.getState().commands.procedure, parent = null) {
  if (parent || program.length){
    program.forEach(command => {
      storeCmd(func, command, parent)
      let nested = command.children;
      if (nested) return mapStateToCmdObj(func, nested, command);
      else return mapStateToCmdObj(func, program.slice(1));
    });
  }
  console.log("func is: ", func);
  return func;
}
