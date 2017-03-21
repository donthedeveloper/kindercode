import React from 'react';
import {Layer, Rect, Stage} from 'react-konva';
import {canvasWidth, canvasHeight, spriteWidth, spriteHeight} from '../constants/constants';
import {mapStateToCmdObj} from '../command_pattern/mapStateToCmdObj.js';

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
              duration: 0.75
          });
  }

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
        <button onClick={() => mapStateToCmdObj().executeFunction()}>
          Click me?
        </button>
      </div>
    )
  }
}

export default KonvaCanvas;
