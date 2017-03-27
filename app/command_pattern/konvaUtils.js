import Command from './command.js';
import store from '../store';
import {moveXLeft, moveXRight, moveYUp, moveYDown, rotateSprite, incrementCollectedStars, resetTransition} from '../action-creators/transition';
import {setSound} from '../action-creators/audioNotifier';
import {collect, toggleRedTile, collectRedTile, loadChallenge} from '../action-creators/challenges.jsx';
import {canvasWidth, canvasHeight, spriteWidth, spriteHeight} from '../constants/constants';
import {toggleExecution} from '../reducers/commands.jsx';

const trueFalseGenerator = () => {
  const randomNum = Math.floor(Math.random() * 2);
  if (randomNum === 1) return true;
  else return false;
}

let changeXLeft = () => {
  let prevX = store.getState().transition.xCoord,
      difference = canvasWidth / 8,
      combinedX = prevX - difference;

  if (combinedX + spriteWidth / 2 <= canvasWidth && combinedX >= 0) {
    store.dispatch(toggleRedTile(trueFalseGenerator()));
    setTimeout(() => {store.dispatch(moveXLeft(combinedX))}, 100);
  }
}

let changeXRight = () => {
  let prevX = store.getState().transition.xCoord,
      difference = canvasWidth / 8,
      combinedX = prevX + difference;

  if (combinedX + spriteWidth / 2 <= canvasWidth && combinedX >= 0) {
    store.dispatch(toggleRedTile(trueFalseGenerator()));
    setTimeout(() => {store.dispatch(moveXRight(combinedX))}, 100);
  }
}

let changeYUp = () => {
  let prevY = store.getState().transition.yCoord,
      difference = canvasHeight / 8,
      combinedY = prevY - difference;

  if (combinedY + spriteHeight / 2 <= canvasHeight && combinedY >= 0) {
    store.dispatch(toggleRedTile(trueFalseGenerator()));
    setTimeout(() => {store.dispatch(moveYUp(combinedY))}, 100);
  }
}

let changeYDown = () => {
  let prevY = store.getState().transition.yCoord,
      difference = canvasHeight / 8,
      combinedY = prevY + difference;

  if (combinedY + spriteHeight / 2 <= canvasHeight && combinedY >= 0) {
    store.dispatch(toggleRedTile(trueFalseGenerator()));
    setTimeout(() => {store.dispatch(moveYDown(combinedY))}, 100);
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
  let collectedStars = store.getState().transition.collectedStars;
  let intersection = store.getState().itemCollision.item;
  let redTile = store.getState().challenges.redTile;
  if (intersection.type === 'yellowStars' && !intersection.collected) {
    store.dispatch(collect(intersection));
    store.dispatch(incrementCollectedStars());
    if (redTile.xgrid === intersection.xgrid && redTile.ygrid === intersection.ygrid) {
      store.dispatch(toggleRedTile(false));
      store.dispatch(collectRedTile(redTile));
    }
  }
  else if (intersection.type === 'blueStars' && collectedStars >= 3 && !intersection.collected) {
    store.dispatch(collect(intersection));
    store.dispatch(incrementCollectedStars());
  }
}

const collectRedTileStar = () => {
  let intersection = store.getState().itemCollision.item;
  let redTile = store.getState().challenges.redTile;
  if (redTile.xgrid !== intersection.xgrid || redTile.ygrid !== intersection.ygrid || !redTile.draw) {
      store.dispatch(toggleExecution(false))
      store.dispatch(resetTransition())
      store.dispatch(loadChallenge(store.getState().challenges.id))
    }
  if (intersection.type === 'yellowStars' && !intersection.collected && redTile.draw && !redTile.collected) {
    if (redTile.xgrid === intersection.xgrid && redTile.ygrid === intersection.ygrid) {
      store.dispatch(collect(intersection));
      store.dispatch(incrementCollectedStars());
      store.dispatch(toggleRedTile(false));
      store.dispatch(collectRedTile(redTile));
    }
  }
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

export class CollectStarRedTile extends Command {
  constructor(){
    super();
  }

  executeCommand(){
    this.program.addAsync(collectRedTileStar);
  }
}
