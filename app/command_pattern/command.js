import {functionVariables} from './cmdVariables.js';

export class FunctionInstance {
  constructor(){
    this.list = [];
    this.asyncActions = [];
  }

  addAsync(asyncFunc){
    this.asyncActions.push(asyncFunc)
  }

  storeCommand(command){
     this.list.push(command);
     command.program = this;
  }

  executeFunction(){
    this.list.forEach(element => {
      element.executeCommand();
    })
    this.executeAsyncActions();
  }

  executeAsyncActions() {
    let time = 500;
    this.asyncActions.forEach( (action) => {
      setTimeout(function () {
        action();
      }, time)
      time += 1000;
    })
  }

  clearVariables(){
    return this.variables;
  }
}

class Command {
  constructor(type, nested = false){
    this.type = type;
    this.callbackCommands = [];
    this.nested = nested;
  }

  executeCallbacks(){
    this.callbackCommands.forEach(callbackCommand => {
      callbackCommand.executeCommand()
    });
  }

  then(callbackCommand) {
    this.callbackCommands.push(callbackCommand);
    callbackCommand.program = this.program;
  }
}

export default Command;
