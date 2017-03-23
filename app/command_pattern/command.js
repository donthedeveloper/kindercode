import {functionVariables} from './cmdVariables.js';

export class FunctionInstance {
  constructor(){
    this.list = [];
    this.asyncActions = [];
  }

  storeCommand(command){
     this.list.push(command);
     command.addAsync = (asyncFunc) => {
       this.asyncActions.push(asyncFunc)
     }
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
      callbackCommand.executeCommand.call(this);
    });
  }

  then(callbackCommand) {
    this.callbackCommands.push(callbackCommand);
  }
}

export default Command;
