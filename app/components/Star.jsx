import React from 'react';
import {Image} from 'react-konva';
import {canvasWidth, canvasHeight} from '../constants/constants';


class Star extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      image: '',
    }
  }

  componentDidMount() {
    const image = new window.Image();
    if (this.props.star.type === 'yellowStars') {
      image.src = './img/yellow-star.png';
    } else {
      image.src = './img/blue-star.png';
    }
    image.onload = () => {
      this.setState({image: image});
    }
  }

  render() {
    const {xcoord, ycoord} = this.props.star;

    return (
      <Image
        x = {xcoord * canvasWidth / 16}
        y = {ycoord * canvasHeight / 16}
        width = {canvasWidth / 10}
        height = {canvasHeight / 10}
        image = {this.state.image}
        offset = {{
          x: canvasWidth / 20,
          y: canvasHeight / 20,
        }}

      />
    )
  }
}

export default Star
