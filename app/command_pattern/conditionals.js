import Command from './command.js';
import {operator} from './utils.js';
import {functionVariables} from './cmdVariables.js';

export class If extends Command {
  constructor(condition) {
    super('IF', true)
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
    return operator(functionVariables[this.left], this.right, this.comparison);
  }
}
