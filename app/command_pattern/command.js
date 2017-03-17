export class FunctionInstance {
  constructor(list = null){
    this.list = list;
  }

  //instead of storing variables on window property, create class "variable", an instance of which contains all the variables for the relevant program. The instance of this class could be instantiated in the FunctionInstance constructor and a reference to it would be held there
  storeCommand(command){
    if (!global.functionVariables) global.functionVariables = {};
    if (!this.list) this.list = [command];
    else this.list.push(command);
  }

  executeFunction(){
    this.list.forEach(element => {
      element.executeCommand();
    });
    return global.functionVariables;
  }

  clearVariables(){
    global.functionVariables = {};
    this.variables = global.functionVariables;
    return this.variables;
  }
}

class Command {
  constructor(type){
    this.type = type;
    this.callbackCommands = [];
  }

  executeCallbacks(){
    this.callbackCommands.forEach(callbackCommand => {
      callbackCommand.executeCommand();
    });
  }

  then(callbackCommand) {
    this.callbackCommands.push(callbackCommand);
    //Do we need this??
    return callbackCommand;
    // maybe we do "return this;" (allows us to .then off of .then)
  }
}

export default Command;
