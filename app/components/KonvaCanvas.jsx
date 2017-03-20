import React from 'react';
import {Layer, Rect, Stage} from 'react-konva';
// import {moveSpriteX, moveSpriteY, rotateSprite} from '../action-creators/transition';
// import store from '../store';
import {canvasWidth, canvasHeight, spriteWidth, spriteHeight} from '../constants/constants';

let sprite = new Image();
sprite.src = './img/spinner.png'

class KonvaCanvas extends React.Component {
  componentWillUpdate(nextProps) {
    let prevX = this.props.transition.xCoord,
        nextX = nextProps.transition.xCoord,
        prevY = this.props.transition.yCoord,
        nextY = nextProps.transition.yCoord;

      const rect = this.refs.rect;
      rect.to({
              x: nextX,
              y: nextY,
              duration: 0.2
          });
  }

  // changeX(newX) {
  //   let prevX = this.props.transition.xCoord,
  //       combinedX = prevX + newX;

  //   if (combinedX + spriteWidth/2 <= canvasWidth && combinedX >= 0) {
  //     store.dispatch(moveSpriteX(combinedX));
  //   }
  // }

  // changeY(newY) {
  //   let prevY = this.props.transition.yCoord,
  //       combinedY = prevY + newY;

  //   if (combinedY + spriteHeight/2 <= canvasHeight && combinedY >= 0) {
  //     store.dispatch(moveSpriteY(combinedY));
  //   }
  // }

  // rotate(degrees) {
  //   let prevRotation = this.props.transition.rotation;
  //   let newRotation = degrees * Math.PI / 180;
  //   store.dispatch(rotateSprite(prevRotation + newRotation));
  // }

  render() {
    let {xCoord, yCoord, width, height, rotation} = this.props.transition;

    console.log('x', xCoord);
    console.log('KonvaCanvas', this.props.transition);
    return (
      <div id="konva-container">
        <Stage width={canvasWidth} height={canvasHeight}>
          <Layer id="konvaCanvas">
            <Rect
              ref="rect"
              x={xCoord}
              y={yCoord}
              fillPatternImage={sprite}
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
        <button onClick={() => this.changeX(60)}>
          Click me?
        </button>
      </div>
    )
  }
}

export default KonvaCanvas;
