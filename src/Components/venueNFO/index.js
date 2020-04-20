import React from 'react';
import Zoom from 'react-reveal/Zoom';

import icon_calander from '../../resources/images/icons/calendar.png';
import icon_location from '../../resources/images/icons/location.png';

const VenueNFO = () => {
    return (
        <div className = "bck_black">
            <div className = "center_wrapper">

                <div className = "vn_wrapper">
                    <Zoom duration={500}>
                        <div className = "vn_item">

                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_red"></div>

                                    <div 
                                        className="vn_icon"
                                        style={{
                                             background:`url(${icon_calander})`
                                        }}
                                        > 
                                    </div>

                                    <div className="vn_title">
                                        Event Date and Time
                                    </div>

                                    <div className="vn_desc">
                                        15 June 2020 @10.00pm
                                    </div>

                                </div>

                            </div>

                        </div>

                    </Zoom>

                    <Zoom duration={500} delay={500}>
                        <div className = "vn_item">

                            <div className="vn_outer">
                                <div className="vn_inner">
                                    <div className="vn_icon_square bck_yellow"></div>

                                    <div 
                                        className="vn_icon"
                                        style={{
                                            background:`url(${icon_location})`
                                        }}
                                        > 
                                    </div>

                                    <div className="vn_title">
                                         Event location
                                    </div>

                                    <div className="vn_desc">
                                    Fairefield, Iwoa 52275
                                    </div>

                                </div>

                             </div>

                        </div>
                    </Zoom>
                     

                    

                </div>

            </div>
        </div>
    );
};

export default VenueNFO;