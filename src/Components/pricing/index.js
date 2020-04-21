import React, { Component } from 'react';
import MyButton from '../utils/MyButton';

import Zoom from 'react-reveal/Zoom';

 class  Pricing extends Component {


    state = {
        prices: [100,150,250],
        positions: ['Balcony', 'Medium' , 'Star'],
        descriptions: [
            'Hier können verschieden Varianten von Lorem ipsum Text heruntergeladen werden. Jedes Beispiel ist als reines Text- oder Worddokument (in .zip Format) verfügbar.',
            'Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.',
            'Nor is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but occasionally circumstances occur in which toil and pain can procure him some great pleasure.'
        ],

        linkto: [
            'http://sales/b',
            'http://sales/m',
            'http://sales/s'
        ],
        delay:[500,0,500]
    }

    showBoxes = () => (
        //the box is each item in each iterations
        this.state.prices.map((box,i)=> (

            <Zoom delay={ this.state.delay[i] } key={i}>
                <div className="pricing_item">
                    <div className="pricing_inner_wrapper">
                        <div className="pricing_title">
                            <span>${this.state.prices[i]}</span>
                            <span>{this.state.positions[i]}</span>
                        </div>

                        <div className="pricing_description">
                            {this.state.descriptions[i]}
                        </div>

                        <div className="pricing_buttons">
                            <MyButton
                                text="Purchase"
                                bck="#ffa800"
                                color="#ffffff"
                                link={this.state.linkto[i]}
                            />

                        </div>


                    </div>   
                </div>
            </Zoom>

           
        ))
    )


  render() {
    return (
      <div className="bck_black">
            <div className="center_wrapper pricing_section">
                <h2>Pricing</h2>

                <div className="pricing_wrapper">
                    {this.showBoxes()}

                </div>

            </div> 
          
        </div>
    );
  }
}

export default Pricing
