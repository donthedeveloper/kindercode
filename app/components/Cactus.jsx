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
    const {xcoord, ycoord} = this.props.cactus;

    return (
      <Image
        x = {xcoord * canvasWidth / 16}
        y = {ycoord * canvasHeight / 16}
        width = {canvasWidth / 7}
        height = {canvasWidth / 7}
        image = {this.state.image}
        offset = {{
          x: canvasWidth / 14,
          y: canvasWidth / 14,
        }}

      />
    )
  }
}

export default Cactus
