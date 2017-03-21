export class FunctionInstance {
  constructor(){
    this.list = [];
  }

  storeCommand(command){
    if (typeof global !== 'undefined' && !global.functionVariables) {
      global.functionVariables = {}
    }
    else if (typeof window !== 'undefined' && !window.functionVariables) {
      window.functionVariables = {}
    }
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
    if (typeof global !== 'undefined') return global.functionVariables;
    else if (typeof window !== 'undefined') return window.functionVariables;
  }

  clearVariables(){
    if (typeof global !== 'undefined') {
      global.functionVariables = {};
      this.variables = global.functionVariables;
    }
    else if (typeof window !== 'undefined') {
      window.functionVariables = {};
      this.variables = window.functionVariables;
    }
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
