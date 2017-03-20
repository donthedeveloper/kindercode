import Command from './command.js';

export class moveX extends Command {
  constructor(distance){
    super();
  }

  executeCommand() {
    changeX(5);
  }
}
