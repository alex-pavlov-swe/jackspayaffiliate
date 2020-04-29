import React from 'react';

const Testimonials = () => {
  return (
    <div className="container-fluid" id="testimonials">
      <div className="row">
        <div className="col-sm-12 text-center mt-5 mb-3">
          <h1>TESTIMONIALS</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <div id="review1">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="row m-0 p-0" id="triangle">
            <div className="col-2 m-0 p-0">
              <img
                src={require('../../img/icons/triangle_white.jpg')}
                alt="icon"
                id="triangle-icon"
                width="20px"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2 mt-3 pl-4 text-center">
              <span className="btn btn-dark"></span>
            </div>
            <div className="col-10 mt-3 pl-4 text-left">
              <h3>Affiliate Website</h3>
              <p>www.website.org</p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <div id="review2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </div>
          <div className="row m-0 p-0" id="triangle">
            <div className="col-2 m-0 p-0">
              <img
                src={require('../../img/icons/triangle_blue.jpg')}
                alt="icon"
                id="triangle-icon"
                width="20px"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-2 mt-3 pl-4 text-center">
              <span className="btn btn-dark"></span>
            </div>
            <div className="col-10 mt-3 pl-4 text-left">
              <h3>Affiliate Website</h3>
              <p>www.website.org</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
