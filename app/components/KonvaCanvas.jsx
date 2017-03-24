import React from 'react';
import {Layer, Rect, Stage} from 'react-konva';
import {canvasWidth, canvasHeight, spriteWidth, spriteHeight, VERTICALGRID, HORIZONTALGRID} from '../constants/constants';
import {mapStateToCmdObj} from '../command_pattern/mapStateToCmdObj.js';
import Star from '../components/Star';
import Cactus from '../components/Cactus';
import GridLine from '../components/GridLine';
import CanvasOutline from './CanvasOutline';

class KonvaCanvas extends React.Component {
  componentWillUpdate(nextProps) {
    let nextX = nextProps.transition.xCoord,
        nextY = nextProps.transition.yCoord;

    const rect = this.refs.rect;
    rect.to({
            x: nextX,
            y: nextY,
            duration: 0.75
        });

    if (this.isCollision(nextProps, 'yellowStars')) {
      let collectedYellowStar = this.getCollidedObject(nextProps, 'yellowStars');
      nextProps.setIntersector(collectedYellowStar);
    } else if (this.isCollision(nextProps, 'blueStars')) {
      let collectedBlueStar = this.getCollidedObject(nextProps, 'blueStars');
      nextProps.setIntersector(collectedBlueStar);
    } else if (this.isCollision(nextProps, 'cactii')) {
      let ouchCactus = this.getCollidedObject(nextProps, 'cactii');
      nextProps.setIntersector(ouchCactus);
    } else {
      nextProps.setIntersector();
    }
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

  render() {
    const {xCoord, yCoord, width, height, rotation} = this.props.transition;
    const {sprite, yellowStars, blueStars, cactii} = this.props.challenges;
    const image = new Image();
    image.src = './img/pig-small.png';

    return (
      <div id="konva-container">
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
                <Star key={[star.xcoord, star.ycoord]} star={star} />
              )
            })}

            {blueStars.filter(star => star.collected === false)
              .map(star => {
              return (
                <Star key={[star.xcoord, star.ycoord]} star={star} />
              )
            })}

            {cactii.map(cactus => {
              return (
                <Cactus key={cactus.id} cactus={cactus} />
              )
            })}

            <Rect
              ref="rect"
              x={xCoord}
              y={yCoord}
              fillPatternImage={image}
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
        <button id="play-button" onClick={() => mapStateToCmdObj().executeFunction()}>
          <i className="fa fa-play" aria-hidden="true"></i>
        </button>
        <button id="restart-button">
          <i className="fa fa-refresh" aria-hidden="true"></i>
        </button>
        {this.props.challenges.totalStars === this.props.transition.starsCollected && <button>Next Challenge</button>}
      </div>
    )
  }
}

export default KonvaCanvas;

