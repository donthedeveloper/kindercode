import React from 'react';
import {Layer, Rect, Stage} from 'react-konva';
import {canvasWidth, canvasHeight, spriteWidth, spriteHeight, VERTICALGRID, HORIZONTALGRID} from '../constants/constants';
import {mapStateToCmdObj} from '../command_pattern/mapStateToCmdObj.js';
import {setSound} from '../action-creators/audioNotifier';
import Star from '../components/Star';
import Cactus from '../components/Cactus';
import GridLine from '../components/GridLine';
import CanvasOutline from './CanvasOutline';
import RedTile from './RedTile';

class KonvaCanvas extends React.Component {

  componentDidMount() {
    const rect = this.refs.rect;

    rect.to({
      x: this.props.transition.xCoord,
      y: this.props.transition.yCoord,
      duration: 0
    });
  }

  componentWillReceiveProps(nextProps) {
    let nextX = nextProps.transition.xCoord,
        nextY = nextProps.transition.yCoord;

    const rect = this.refs.rect;

    if (this.props.transition.xCoord != nextProps.transition.xCoord || this.props.transition.yCoord != nextProps.transition.yCoord) {
        rect.to({
                x: nextX,
                y: nextY,
                duration: 0.75
            });
    }

    if (this.isCollision(nextProps, 'yellowStars')) {
      let collectedYellowStar = this.getCollidedObject(nextProps, 'yellowStars');
      nextProps.setIntersector(collectedYellowStar);
    } else if (this.isCollision(nextProps, 'blueStars')) {
      let collectedBlueStar = this.getCollidedObject(nextProps, 'blueStars');
      nextProps.setIntersector(collectedBlueStar);
    } else if (this.isCollision(nextProps, 'cactii')) {
      let ouchCactus = this.getCollidedObject(nextProps, 'cactii');
      setTimeout(() => {this.props.resetCanvas(nextProps.challenges.id)}, 1000)
    } else {
      nextProps.setIntersector();
    }

    const isExecuting = nextProps.commands.isExecuting;
    const program = nextProps.commands.program;
    if (!isExecuting) program.clearTimeouts();
  }

  isCollision(nextProps, item) {
    return this.getCollidedObject(nextProps, item)
  }

  getCollidedObject(nextProps, item) {
    const xGrid = nextProps.transition.xGrid;
    const yGrid = nextProps.transition.yGrid;
    const objs = nextProps.challenges[item];

    return objs.filter(star => {
      return star.xgrid === xGrid && star.ygrid === yGrid
    })[0]
  }

  playButton() {
    this.props.startExecution();
    mapStateToCmdObj().executeFunction();
  }

  nextChallengeButton(id, user) {
      if (user && user.challenge_id < this.props.challenges.numChallenges) {
        this.props.updateUserChallenge(id, user)
      }
      else if (!user && id < this.props.challenges.numChallenges) {
        this.props.resetCanvas(id + 1)
      }
    }

  render() {
    const {xCoord, yCoord, width, height, rotation} = this.props.transition;
    const {sprite, yellowStars, blueStars, cactii, id, numChallenges, redTile} = this.props.challenges;
    const image = new Image();
    image.src = `/img/${sprite.url}`;

    return (
      <div className="konva-container" id="konva-container">
        <Stage width={canvasWidth} height={canvasHeight}>
          <Layer ref="konvaCanvas" id="konvaCanvas">
            <CanvasOutline />

            {VERTICALGRID.map(points => {
              return (
                <GridLine key={points} points={points} />
              )
            })}

            {HORIZONTALGRID.map(points => {
              return (
                <GridLine key={points} points={points} />
              )
            })}

            {yellowStars.filter(star => star.collected === false)
              .map(star => {
              return (
                <Star key={`${star.type}-${star.id}`} star={star} />
              )
            })}

            {(redTile.draw && !redTile.collected) && <RedTile xGrid={redTile.xgrid} yGrid={redTile.ygrid} />}
            {(redTile.draw && !redTile.collected) && <Star star={redTile} />}

            {blueStars.filter(star => star.collected === false)
              .map(star => {
              return (
                <Star key={`${star.type}-${star.id}`} star={star} />
              )
            })}

            {cactii.map(cactus => {
              return (
                <Cactus key={`${cactus.type}-${cactus.id}`} cactus={cactus} />
              )
            })}

            <Rect
              ref="rect"
              fillPatternImage={image}
              fillPatternRepeat={'no-repeat'}
              width={width}
              height={height}
              rotation = {rotation}
              offset = {{
                x: spriteWidth / 2,
                y: spriteHeight / 2,
              }}
            />
          </Layer>
        </Stage>
        <p>Challenge {id}</p>
        <button id="play-button" onClick={() => this.playButton()}>
          <i className="fa fa-play" aria-hidden="true"></i>
        </button>
        <button id="restart-button" onClick={() => this.props.resetCanvas(id)}>
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </button>
        <button onClick={ () => this.props.resetProcedureOnState(id)} id="clear-program-btn">Erase</button>
        {this.props.challenges.totalStars === this.props.transition.collectedStars && <button id="next-challenge-btn" onClick={() => {this.nextChallengeButton(id, this.props.user)}}>Next Challenge</button>}

      </div>
    )
  }
}

export default KonvaCanvas;
