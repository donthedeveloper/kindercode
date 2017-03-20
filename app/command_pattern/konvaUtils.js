import Command from './command.js';

export class moveX extends Command {
  constructor(newX){
    super();
    this.newX = newX;
  }

  executeCommand() {
    // changeX(this.newX);
  }
}
