import Command from './command.js';
import store from '../store';
import {moveSpriteX, moveSpriteY, rotateSprite} from '../action-creators/transition';
import {setSound} from '../action-creators/audioNotifier';
import {canvasWidth, canvasHeight, spriteWidth, spriteHeight} from '../constants/constants';

let changeX = (newX) => {
  let prevX = store.getState().transition.xCoord,
      combinedX = prevX + newX;

  if (combinedX + spriteWidth / 2 <= canvasWidth && combinedX >= 0) {
    store.dispatch(moveSpriteX(combinedX));
  }
}

let changeY = (newY) => {
  let prevY = store.getState().transition.yCoord,
      combinedY = prevY + newY;

  if (combinedY + spriteHeight / 2 <= canvasHeight && combinedY >= 0) {
    store.dispatch(moveSpriteY(combinedY));
  }
}

let changeRotation = (degrees) => {
  let prevRotation = store.getState().transition.rotation;
  let newRotation = degrees * Math.PI / 180;
  store.dispatch(rotateSprite(prevRotation + newRotation));
}

let queueSound = (name) => {
  store.dispatch(setSound(name))
}

export class MoveX extends Command {
  constructor(newX){
    super();
    this.newX = newX;
  }

  executeCommand() {
    changeX(this.newX);
  }
}

export class MoveY extends Command {
  constructor(newY){
    super();
    this.newY = newY;
  }

  executeCommand() {
    changeY(this.newY);
  }
}

export class Rotate extends Command {
  constructor(degrees){
    super();
    this.degrees = degrees;
  }

  executeCommand() {
    changeRotation(this.degrees);
  }
}

export class Speak extends Command {
  constructor(animal){
    super();
    this.animal = animal;
  }

  executeCommand() {
    queueSound(this.animal);
  }
}
