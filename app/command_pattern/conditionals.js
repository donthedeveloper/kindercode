import Command from './command.js';
import store from '../store.jsx';

export class If extends Command {
  constructor(condition) {
    super('IF', true)
    this.condition = condition;
  }

  executeCommand() {
    this.condition.program = this.program;
    if (this.condition.executeCommand()) {
      this.executeCallbacks()
    }
  }
}

export class IfNot extends Command {
  constructor(condition) {
    super('IFNOT', true)
    this.condition = condition;
  }

  executeCommand() {
    this.condition.program = this.program;
    if (this.condition.executeCommand()) {
      this.executeCallbacks()
    }
  }
}

const redTileCheck = (programRef) => {
    const redTile = [store.getState().challenges.redTile.xgrid, store.getState().challenges.redTile.ygrid],
          spriteCoord = [programRef.spriteX, programRef.spriteY]
    if (redTile[0] === spriteCoord[0] && redTile[1] === spriteCoord[1]) return true;
    else return false;
}

export class Condition {
  constructor(condition = 'redTile', left = null, right = null, comparison = null) {
    this.left = left
    this.right = right
    this.comparison = comparison
    this.condition = condition;
  }

  executeCommand() {
    if (this.condition === 'redTile') return redTileCheck(this.program)
  }
}
