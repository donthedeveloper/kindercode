import React from 'react';
import {Image} from 'react-konva';
import {canvasWidth, canvasHeight} from '../constants/constants';


class Cactus extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    }
  }

  componentDidMount() {
    const image = new window.Image();
    image.src = './img/cactus.png';
    image.onload = () => {
      this.setState({image: image});
    }
  }

  render() {
    const {xgrid, ygrid} = this.props.cactus;

    return (
      <Image
        x = {xgrid * canvasWidth / 8}
        y = {ygrid * canvasHeight / 8}
        width = {canvasWidth / 7}
        height = {canvasWidth / 7}
        image = {this.state.image}
        offset = {{
          x: canvasWidth / 50,
          y: canvasWidth / 50,
        }}

      />
    )
  }
}

export default Cactus
