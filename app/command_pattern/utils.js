import Command from './command.js';

export const greaterThan = function(left, right) {
  return left > right;
}

export const lessThan = function(left, right) {
  return left < right;
}

export const equalTo = function(left, right) {
  return left === right;
}

export function operator (left, right, type) {
  if (type === '>') {
    return greaterThan(left, right);
  }
  else if (type === '<') {
    return lessThan(left, right);
  }
  else if (type === '='){
    return equalTo(left, right);
  }
}

export class Assignment extends Command {
  constructor(left, right) {
    super();
    this.left = left;
    this.right = right;
  }

  executeCommand() {
    let left = this.left
    global.functionVariables[left] = this.right;
    this.left = global.functionVariables[left];
    console.log('variable values: ', left, ' = ', this.left);
    console.log('global obj function variables are: ', global.functionVariables);
    return this.left;
  }
}

export class Statement extends Command {
  constructor(){
    super();
  }
}
