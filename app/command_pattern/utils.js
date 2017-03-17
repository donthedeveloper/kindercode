import Command from './command.js';

export function operator (left, right, type) {
  if (type === '>') {
    return left > right;
  }
  else if (type === '<') {
    return left < right;
  }
  else if (type === '='){
    return left === right;
  }
}

export class Assignment extends Command {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  executeCommand() {
    if (typeof global !== 'undefined') global.functionVariables[this.left] = this.right;
    else if (typeof window !== 'undefined') window.functionVariables[this.left] = this.right;
    console.log('variable values: ', this.left, ' = ', this.left);
  }
}

export class Statement extends Command {
  constructor(){
    super();
  }
}
