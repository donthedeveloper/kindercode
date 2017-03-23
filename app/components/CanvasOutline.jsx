import React from 'react';
import {Rect} from 'react-konva';
import {canvasWidth, canvasHeight} from '../constants/constants';

const CanvasOutline = () => {
  return (
    <Rect
      x="0"
      y="0"
      width={canvasWidth}
      height={canvasHeight}
      stroke = 'gray'
      strokeWidth = '1'
      lineCap  = 'round'
      lineJoin = 'round'
    />
  )
}

export default CanvasOutline
