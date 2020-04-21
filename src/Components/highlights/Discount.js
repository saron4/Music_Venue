import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';

import MyButton from '../utils/MyButton';

 class Discount extends Component {

    state = {
        discountStart: 0,
        discountEnd: 30
    }

    //update the discountStrat state by one everyday
    porcentage =() => {
        if(this.state.discountStart < this.state.discountEnd){
            this.setState({
                discountStart: this.state.discountStart + 1
            })
        }
    }
//whenever the coponenent updated the first time we run it again
    componentDidUpdate(){
        setTimeout(() => {
            this.porcentage()
        },30)
    }

  render() {
    return (
        <div className="center_wrapper">
            <div className="discount_wrapper">

                <Fade
                    onReveal = {() => this.porcentage()}
                
                >
                    <div className="discount_porcentage">
                        <span>{this.state.discountStart}%</span>
                        <span>OFF</span>
                    </div>
                </Fade>

                <Slide right>
                    <div className="discount_description">
                        <h3>Purchase ticket before 10th June</h3>
                        <p>There are many variations of passages of Lorem Ipsum available, but the majority
                            have suffered alteration in some form, by injected humour, or randomised words 
                            which don't look even slightly believable. If you are going to use a passage 
                            of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in 
                            the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat
                            predefined chunks as necessary, making this the first true generator on the
                            Internet. It uses a dictionary of over 200 Latin words, combined with a handful
                            of model sentence structures, to generate Lorem Ipsum which looks reasonable. 
                            The generated Lorem Ipsum is therefore always free from repetition, injected 
                            humour, or non-characteristic words etc.
                        </p>

                        <MyButton
                            text = "Purchase tickets"
                            bck="#ffa800"
                            color="#ffffff"
                            link="http://google.com"
                        />

                    </div>
                </Slide>

               

            </div> 
        </div>
    );
  }
}

export default Discount;
