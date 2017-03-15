export class Program {
  constructor(list = null){
    this.list = list;
  }

  storeCommand(command){
    if (!this.list) this.list = [command];
    else this.list.push(command);
  }

  executeProgram(){
    this.list.forEach(element => {
      element.executeCommand();
    });
  }

}

class Command {
  constructor(type, callbackCommand){
    this.type = type;
    this.callbackCommand = callbackCommand
  }

  executeCommand(){

  }

  then(callbackCommand) {
    this.callbackCommand = callbackCommand
    return callbackCommand
  }

}

export default Command;
