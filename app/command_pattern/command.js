import {functionVariables} from './cmdVariables.js';

export class FunctionInstance {
  constructor(){
    this.list = [];
  }

  storeCommand(command){
     this.list.push(command);
  }

  executeFunction(){
    var time = 500;
    this.list.forEach(element => {
      setTimeout( () => {
        element.executeCommand();
      }, time)
      time += 1000;
    });
    return functionVariables;
  }

  clearVariables(){
    functionVariables = {};
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
    var time = 500;
    this.callbackCommands.forEach(callbackCommand => {
      setTimeout( () => {
        callbackCommand.executeCommand();
      }, time)
      time += 1000;
    });
  }

  then(callbackCommand) {
    this.callbackCommands.push(callbackCommand);
  }
}

export default Command;
