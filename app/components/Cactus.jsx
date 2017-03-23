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
        width = {200}
        height = {200}
        image = {this.state.image}
        offset = {{
          x: 100,
          y: 100,
        }}

      />
    )
  }
}

export default Cactus
