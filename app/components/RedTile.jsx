import React from 'react';
import {Rect} from 'react-konva';
import {canvasWidth, canvasHeight} from '../constants/constants';

const RedTile = ({xGrid, yGrid}) => {
  return (
    <Rect
      x={xGrid * canvasWidth / 8}
      y={yGrid * canvasWidth / 8}
      width={canvasWidth / 8}
      height={canvasHeight / 8}
      fill={'#ff8a80'}
    />
  )
}

export default RedTile
