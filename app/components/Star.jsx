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
    } else if (this.props.star.type === 'blueStars'){
      image.src = './img/blue-star.png';
    } else {
      image.src = './img/red-star.png';
    }
    image.onload = () => {
      this.setState({image: image});
    }
  }

  render() {
    const {xgrid, ygrid} = this.props.star;

    return (
      <Image
        x = {xgrid * canvasWidth / 8}
        y = {ygrid * canvasHeight / 8}
        width = {canvasWidth / 10}
        height = {canvasHeight / 10}
        image = {this.state.image}
        offset = {{
          x: - canvasWidth / 80,
          y: - canvasHeight / 80,
        }}

      />
    )
  }
}

export default Star
