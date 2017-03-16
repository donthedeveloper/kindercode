import Command, {FunctionInstance} from 'command_class.js';
import {operator, Assignment} from 'utils.js';

export class If extends Command {
  constructor(condition) {
    super('conditional')
    this.condition = condition;
  }

  executeCommand() {
    if (this.condition.executeCommand()) {
      this.executeCallbacks()
    }
  }
}

export class Condition {
  constructor(left, right, comparison) {
    this.left = left
    this.right = right
    this.comparison = comparison
  }

  executeCommand() {
    return operator(this.left, this.right, this.comparison)
  }
}


//Example function creation/execution steps as of 3-15-17
let func = new FunctionInstance();

func.storeCommand(new Assignment('x', 5));
func.storeCommand(new Assignment('y', 10));

let if_instance = new If(new Condition('x', 5, '>'));
if_instance.then(new Assignment('x', 11));
if_instance.then(new Assignment('y', 2));

func.storeCommand(if_instance);
func.storeCommand(new Assignment('z', 15));

func.executeFunction();
