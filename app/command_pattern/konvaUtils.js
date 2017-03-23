import Command from './command.js';
import store from '../store';
import {moveXLeft, moveXRight, moveYUp, moveYDown, rotateSprite} from '../action-creators/transition';
import {setSound} from '../action-creators/audioNotifier';
import {canvasWidth, canvasHeight, spriteWidth, spriteHeight} from '../constants/constants';

let changeXLeft = () => {
  let prevX = store.getState().transition.xCoord,
      difference = canvasWidth / 8,
      combinedX = prevX - difference;

  if (combinedX + spriteWidth / 2 <= canvasWidth && combinedX >= 0) {
    store.dispatch(moveXLeft(combinedX));
  }
}

let changeXRight = () => {
  let prevX = store.getState().transition.xCoord,
      difference = canvasWidth / 8,
      combinedX = prevX + difference;

  if (combinedX + spriteWidth / 2 <= canvasWidth && combinedX >= 0) {
    store.dispatch(moveXRight(combinedX));
  }
}

let changeYUp = () => {
  let prevY = store.getState().transition.yCoord,
      difference = canvasHeight / 8,
      combinedY = prevY - difference;

  if (combinedY + spriteHeight / 2 <= canvasHeight && combinedY >= 0) {
    store.dispatch(moveYUp(combinedY));
  }
}

let changeYDown = () => {
  let prevY = store.getState().transition.yCoord,
      difference = canvasHeight / 8,
      combinedY = prevY + difference;

  if (combinedY + spriteHeight / 2 <= canvasHeight && combinedY >= 0) {
    store.dispatch(moveYDown(combinedY));
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

export class MoveXLeft extends Command {
  constructor(){
    super();
  }

  executeCommand() {
  changeXLeft();
  }
}

export class MoveXRight extends Command {
  constructor(){
    super();
  }

  executeCommand() {
    changeXRight();
  }
}

export class MoveYUp extends Command {
  constructor(){
    super();
  }

  executeCommand() {
    changeYUp();
  }
}

export class MoveYDown extends Command {
  constructor(){
    super();
  }

  executeCommand() {
    changeYDown();
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
