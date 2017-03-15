class CommandObject {
  constructor(list = null){
    this.list = list;
  }

  storeCommand(command){
    if (!this.list) this.list = [command];
    else if (command.type === 'event' || command.type === 'function') this.list.unshift(command);
    else this.list.push(command);
  }

  executeProgram(){
    this.list.forEach(element => {
      element.executeCommand();
    });
  }

}

//might not need a command List for every command, could instead build a code block with functions inside of it representing different statments, loops, conditionals etc.
class Command extends CommandObject{
  constructor(toExecute, type, list = null){
    super(list);
    this.toExecute = toExecute;
    this.type = type;
  }

  executeCommand(){

  }

}
