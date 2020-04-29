import React from 'react';
import { Slide } from 'react-slideshow-image';

const Bonuses = () => {
  const properties = {
    duration: 5000,
    transitionDuration: 500,
    infinite: true,
    indicators: false,
    arrows: true,
    pauseOnHover: true,
    //onChange: (oldIndex, newIndex) => {
    //  console.log(`slide transition from ${oldIndex} to ${newIndex}`);
    //},
  };

  return (
    <div className="container-fluid" id="bonuses">
      <div className="slide-container">
        <Slide {...properties}>
          <div className="each-slide">
            <div className="imageContainer">
              <img
                className="d-block w-100"
                src={require('../../img/sliders/img1.jpg')}
                alt="Jacks Pay Casino"
              />
            </div>
          </div>
          <div className="each-slide">
            <div className="imageContainer">
              <img
                className="d-block w-100"
                src={require('../../img/sliders/img2.jpg')}
                alt="Jacks Pay Casino"
              />
            </div>
          </div>
        </Slide>
      </div>
    </div>
  );
};

export default Bonuses;
