import React , {Component } from 'react';
import './resources/styles.css';

import Header from './Components/header_footer/Header';
import Featured from './Components/featured';
import VenueNFO from './Components/venueNFO';

class App extends Component{
  render() {
    return(
      <div className = "App" style={{ height: "1500px", background: 'purple'}}>
        <Header/>
        <Featured/>
        <VenueNFO/>
    </div>
    );
    
  }
}


export default App;
