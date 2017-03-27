import store from '../store.jsx';
import {currentProgramInstance} from '../reducers/commands.jsx';

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
    store.dispatch(currentProgramInstance(this));
  }

  executeAsyncActions() {
    let time = 500;

    for (var i = 0; i < this.asyncActions.length; i++){
      let action = this.asyncActions[i];
      let timeout = setTimeout(function () {
        action();
      }, time)
      this[`setCommand${i}`] = timeout;
      time += 1000;
    }
  }

  clearTimeouts(){
    for (var i = 0; i < this.asyncActions.length; i++){
      clearTimeout(this[`setCommand${i}`]);
    }
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
