import Command from 'command.js';

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
  if (type === 'greaterThan') {
    return greaterThan(left, right);
  }
  else if (type === 'lessThan') {
    return lessThan(left, right);
  }
  else if (type === 'equalTo'){
    return equalTo(left, right);
  }
}

export class Statement extends Command {
  constructor(statement) {
    super();
    this.statement = statement;
  }

  toExecute() {
    this.statement();
    //console.log('this works!');
  }
}
