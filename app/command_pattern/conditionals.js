import Command, {Program} from 'command_class.js';

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
  constructor(left, right, operator) {
    super();
    this.left = left
    this.right = right
    this.operator = operator
  }

  executeCommand() {
    return operator(this.left, this.right)
  }
}

//EXAMPLE OF A CREATING A NEST
var statement = new Statement()
var condition = new Condition();
var if_instance = new If(condition.executeCommand())
if_instance.then(new If('9 > 8')).then(new Statement())
var commandList = new Program(if_instance)
commandList.executeProgram();
