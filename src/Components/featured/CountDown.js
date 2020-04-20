import React, { Component } from 'react';

 class CountDown extends Component {

    state = {

    }

  render() {
    return (

      <div className = "countdown_wrapper">
          <div className = "countdown_top">
              Event starts in
          </div>  

          <div className = "countdown_bottom">
              <div className = "countdown_item">
                  <div className = "countdown_time">
                        23
                  </div>

                    <div className ="countdown_tag">
                        DAYS
                   </div> 

                </div>

                <div className = "countdown_item">
                  <div className = "countdown_time">
                        2
                  </div>

                    <div className ="countdown_tag">
                        hs
                   </div> 

                </div>

                <div className = "countdown_item">
                  <div className = "countdown_time">
                        20
                  </div>

                    <div className ="countdown_tag">
                        min
                   </div> 

                </div>

          </div>  
      
      </div>
    );
  }
}

export default CountDown;
