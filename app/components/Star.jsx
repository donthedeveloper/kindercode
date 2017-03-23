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
    if (this.props.star.type === 'yellow_star') {
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
        x = {xcoord * canvasWidth / 5}
        y = {ycoord * canvasHeight / 10}
        image = {this.state.image}
      />
    )
  }
}

export default Star
