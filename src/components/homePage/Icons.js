import React from 'react';

const Icons = () => {
  return (
    <div className="container-fluid" id="icons">
      <div className="row">
        <div className="col text-center">
          <img
            src={require('../../img/icons/icon1.jpg')}
            alt="Dedicated Affiliate Manager"
          />
          <h3>Dedicated Affiliate Manager</h3>
        </div>
        <div className="col text-center">
          <img
            src={require('../../img/icons/icon2.jpg')}
            alt="Tiered Commission Structure"
          />
          <h3>Tiered Commission Structure</h3>
        </div>
        <div className="col text-center">
          <img
            src={require('../../img/icons/icon3.jpg')}
            alt="500+ Casino Games"
          />
          <h3>500+ Casino Games</h3>
        </div>
      </div>
    </div>
  );
};

export default Icons;
