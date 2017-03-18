export class FunctionInstance {
  constructor(list = null){
    this.list = list;
  }

  //instead of storing variables on window property, create class "variable", an instance of which contains all the variables for the relevant program. The instance of this class could be instantiated in the FunctionInstance constructor and a reference to it would be held there. Possible solution?
  storeCommand(command){
    if (typeof global !== 'undefined' && !global.functionVariables) {
      global.functionVariables = {}
    }
    else if (typeof window !== 'undefined' && !window.functionVariables) {
      window.functionVariables = {}
    }

    if (!this.list) this.list = [command];
    else this.list.push(command);
  }

  executeFunction(){
    this.list.forEach(element => {
      element.executeCommand();
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
    this.callbackCommands.forEach(callbackCommand => {
      callbackCommand.executeCommand();
    });
  }

  then(callbackCommand) {
    this.callbackCommands.push(callbackCommand);
  }
}

export default Command;
