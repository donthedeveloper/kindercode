import Command from './command.js';
import store from '../store';
import {moveXLeft, moveXRight, moveYUp, moveYDown, rotateSprite} from '../action-creators/transition';
import {setSound} from '../action-creators/audioNotifier';
import {collect} from '../action-creators/challenges.jsx';
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

const collectStar = () => {
  let intersection = store.getState().itemCollision.item;
  store.dispatch(collect(intersection));
}

export class MoveXLeft extends Command {
  constructor(){
    super();
  }

  executeCommand() {
    this.program.addAsync(changeXLeft);
  }
}

export class MoveXRight extends Command {
  constructor(){
    super();
  }

  executeCommand() {
    this.program.addAsync(changeXRight);
  }
}

export class MoveYUp extends Command {
  constructor(){
    super();
  }

  executeCommand() {
    this.program.addAsync(changeYUp);
  }
}

export class MoveYDown extends Command {
  constructor(){
    super();
  }

  executeCommand() {
    this.program.addAsync(changeYDown);
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
    const queueSnd = queueSound.bind(this, this.animal);
    this.program.addAsync(queueSnd);
  }
}

export class CollectStar extends Command {
  constructor(){
    super();
  }

  executeCommand(){
    this.program.addAsync(collectStar);
  }
}
