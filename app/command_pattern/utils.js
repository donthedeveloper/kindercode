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
    super('ASSIGNMENT');
    this.left = left;
    this.right = right;
  }

  executeCommand() {
    console.log("assignment instance has nested?: ", this.nested);
    if (typeof global !== 'undefined') global.functionVariables[this.left] = this.right; //copy paste bug?
    else if (typeof window !== 'undefined') window.functionVariables[this.left] = this.right;
    console.log('variable values: ', this.left, ' = ', this.left);
  }
}

export class Add extends Command {
  constructor(left, right){
    super('STATEMENT');
    this.left = left;
    this.right = right;
  }

  executeCommand() {
    if (typeof global !== 'undefined') global.functionVariables[this.left] += this.right; // copy past bug?
    else if (typeof window !== 'undefined') window.functionVariables[this.left] += this.right;
    console.log('variable values: ', this.left, ' = ', this.left);
  }
}
