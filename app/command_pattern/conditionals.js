import Command from './command.js';
import store from '../store.jsx';

export class If extends Command {
  constructor(condition) {
    super('IF', true)
    this.condition = condition;
  }

  executeCommand() {
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
    if (this.condition.executeCommand() === false) {
      this.executeCallbacks()
    }
  }
}

const redTileCheck = () => {
    const redTile = [store.getState().transition.redTile.xGrid, store.getState().redTile.yGrid];
    const spriteCoord = [store.getState().transition.xGrid, store.getState().transition.yGrid]
    if (redTile[0] === spriteCoord[0] && redTile[1] === spriteCoord[1]) return true;
    else return false;
}

export class Condition {
  constructor(condition, left = null, right = null, comparison = null) {
    this.left = left
    this.right = right
    this.comparison = comparison
    this.condition = condition;
  }

  executeCommand() {
    if (this.condition === 'redTile') return redTileCheck();
  }
}
