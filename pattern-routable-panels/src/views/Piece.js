import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Piece.css';
import BackgroundSlideshow from 'react-background-slideshow'

import image1 from './assets/image1.jpg'
import image2 from './assets/image2.jpg'

class Piece extends Component {

  state = {
    pieces: [
      {
        title:"transporting",
        poster:"https://upload.wikimedia.org/wikipedia/en/thumb/7/71/Trainspotting_ver2.jpg/250px-Trainspotting_ver2.jpg",
      },
      {
        title:"Matrix",
        poster:"https://images-na.ssl-images-amazon.com/images/I/51vpnbwFHrL._SY445_.jpg",
      },
    ]
  }
  
  componentDidMount() {
    this.setState({
      
    })
  }

  _renderPiece = () => {
    const pieces = this.state.pieces.map((piece, index) => 
      <Piece title={piece.title} poster={piece.poster} key={index} />
    )
    return pieces
  }

  render() {
    return (
      <BackgroundSlideshow images={[image1, image2]} animationDelay={2000}/> 
    )
  }
}

export default Piece;
