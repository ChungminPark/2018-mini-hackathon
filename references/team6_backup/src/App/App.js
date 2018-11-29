import React from 'react';
import BackgroundSlideshow from 'react-background-slideshow'
import FlexView from 'react-flexview';

import RecommandArt from '../components/RecommandArt'
import FindArt from '../components/FindArt'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import Lunacall from '../views/Lunacall'

class App extends React.Component {

  render() {

    return (
      <div className="App" style={{flexDirection: 'row', justifyContent : 'space-between'}}>
        {/* <Lunacall></Lunacall> */}

        <FlexView vAlignContent='center' hAlignContent='center'>
          <RecommandArt />
          <FindArt />
        </FlexView>
      </div>
    )
  }
}

export default App;
