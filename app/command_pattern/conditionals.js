import Command from './command.js';
import {operator} from './utils.js';

export class If extends Command {
  constructor(condition) {
    super('IF', true)
    this.condition = condition;
  }

  executeCommand() {
    console.log('if statement boolean ', this.condition.executeCommand());
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
    console.log('var name: ', this.left, ' var value: ', this.right, ' comparison type: ', this.comparison);
    //eeek
    if (typeof global !== 'undefined') return operator(global.functionVariables[this.left], this.right, this.comparison);
    else if (typeof window !== 'undefined') return operator(window.functionVariables[this.left], this.right, this.comparison);
  }
}
