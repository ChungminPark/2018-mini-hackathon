import React from 'react';
import Piece from '../components/Piece'
// import Lunacall from '../views/Lunacall'

class App extends React.Component{

	state = {
    
  }
  
  componentDidMount() {
    // 5초 이후에 실행
    setTimeout(() => 
    this.setState({
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
    }), 1000)
  }
  // backup
  _renderPiece = () => {
    const pieces = this.state.pieces.map((piece, index) => 
      <Piece title={piece.title} poster={piece.poster} key={index} />
    )
    return pieces
  }

  render() {
    return (
      <div className="App">
        {/* <Lunacall></Lunacall> */}
        {this.state.pieces ? this._renderPiece() : "Loading..."}
      </div>
    );
  }
}


export default App;
