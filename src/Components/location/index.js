import React from 'react';

const Location = () => {
    return (
        <div className="location">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8273.306998759781!2d-91.9691539005031!3d41.008484603056324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87e6666c00329077%3A0xf05c569cdd3cf8ba!2sLandmark%20Inn!5e0!3m2!1sde!2sus!4v1587448170105!5m2!1sde!2sus" 
                width="100%"
                height="500px" 
                frameborder="0"
                
                allowFullScreen="" >  
            </iframe>

            <div className="location_tag">
                <div>Location</div>

            </div>

        </div>
    );
};

export default Location;