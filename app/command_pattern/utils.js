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
  }
}

export class Add extends Command {
  constructor(left, right){
    super('STATEMENT');
    this.left = left;
    this.right = right;
  }

  executeCommand() {
  }
}
