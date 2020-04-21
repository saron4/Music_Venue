import React , {Component } from 'react';
import './resources/styles.css';

import Header from './Components/header_footer/Header';
import Featured from './Components/featured';
import VenueNFO from './Components/venueNFO';
import Highlights from './Components/highlights';
import Pricing from './Components/pricing';
import Location from './Components/location';

class App extends Component{
  render() {
    return(
      <div className = "App" style={{ height: "1500px", background: 'cornflower'}}>
        <Header/>
        <Featured/>
        <VenueNFO/>
        <Highlights/>
        <Pricing/>
        <Location/>
    </div>
    );
    
  }
}


export default App;
