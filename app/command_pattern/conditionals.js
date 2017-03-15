import Command, {Program} from 'command_class.js';
import {operator, Statement} from 'utils.js';

export class If extends Command {
  constructor(condition, callbackCommand) {
    super('conditional', callbackCommand)
  }

  toExecute() {
    if (this.condition.executeCommand()) {
      this.callbackCommand.executeCommand()
    }
  }

}

export class Condition extends Command {
  constructor(left, right, comparison) {
    super();
    this.left = left
    this.right = right
    this.comparison = comparison
  }

  executeCommand() {
    return operator(this.left, this.right, this.comparison)
  }
}

//EXAMPLE OF A CREATING A NEST
var statement = new Statement();
var condition = new Condition( 2, 0, 'greaterThan');
var if_instance = new If(condition, statement)

var finalCommand = if_instance.then((condition)).then(statement)

var commandList = new Program();
commandList.storeCommand(finalCommand);

commandList.executeProgram();
