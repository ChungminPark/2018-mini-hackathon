import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Piece.css';

class Piece extends Component {

  static propTypes = {
    title: PropTypes.string.isRequired,
    poster: PropTypes.string,
  }

  render() {
    return(
      <div className="Piece">
        <div className="Piece__Column">
          <PiecePoster poster={this.props.poster}/>
        </div>
        <div className="Piece__Column">
          <h1>{this.props.title}</h1>
        </div>
      </div>
    )
  }
}

class PiecePoster extends Component {
  render() {
    return(
      <img src={this.props.poster}/>
    )
  }
}

export default Piece;
