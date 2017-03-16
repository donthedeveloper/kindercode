import Command, {FunctionInstance} from './command.js';
import {operator, Assignment} from './utils.js';

export class If extends Command {
  constructor(condition) {
    super('conditional')
    this.condition = condition;
  }

  executeCommand() {
    console.log("if statement boolean ", this.condition.executeCommand());
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
    console.log("var name: ", this.left, ' var value: ', this.right, ' comparison type: ', this.comparison);
    // return operator(this.left, this.right, this.comparison)
    return operator(global.functionVariables[this.left], this.right, this.comparison)
  }
}
