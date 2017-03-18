import Command from './command.js';
import {operator} from './utils.js';

export class Loop extends Command {
  constructor(num){
    super('LOOP', true);
    this.num = num;
  }

  executeCommand() {
    for (let i = 0; i < this.num; i++) {
      this.executeCallbacks();
    }
  }

}
