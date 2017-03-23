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
     console.log("the command its added to is: ", command);
  }

  executeFunction(){
    this.list.forEach(element => {
      element.executeCommand();
    })
    console.log("async actions array is: ", this.asyncActions);
    this.executeAsyncActions();
  }

  executeAsyncActions() {
    console.log("hitting executeAsyncActions func");
    // while (this.asyncActions.length) {
    //   console.log("hitting while loop in executeAsyncActions func!");
    //   setTimeout(function () {
    //     console.log("async actions in func are: ", this.asyncActions[0]);
    //     var command = this.asyncActions.shift();
    //     command();
    //   }, 1000)
    // }
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
      callbackCommand.executeCommand();
    });
  }

  then(callbackCommand) {
    this.callbackCommands.push(callbackCommand);
  }
}

export default Command;
