export class FunctionInstance {
  constructor(list = null){
    this.list = list;
    this.variables = {};
  }

  storeCommand(command){
    if (!this.list) this.list = [command];
    else this.list.push(command);
  }

  executeFunction(){
    this.list.forEach(element => {
      if (element.callbackCommands) element.executeCallbacks();
      else element.executeCommand();
    });
  }

}

class Command {
  constructor(type){
    this.type = type;
    this.callbackCommands = [];
  }

  executeCallbacks(){
    this.callbackCommands.forEach(command => {
      command();
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
