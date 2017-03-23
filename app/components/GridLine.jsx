import React from 'react';
import {Line} from 'react-konva';

const GridLine = ({points}) => {
  return (
    <Line
      points = {points}
      stroke = 'gray'
      strokeWidth = '1'
      lineCap  = 'round'
      lineJoin = 'round'
    />
  )
}

export default GridLine
