import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import StartEarning from '../startEarning/StartEarning';
import StartEarningBottom from '../startEarning/StartEarningBottom';
import Bonuses from '../homePage/Bonuses';
import Icons from '../homePage/Icons';
import NavbarWrapper from '../layout/Navbar';
import Testimonials from '../homePage/Testimonials';

const Contacts = () => {
  document.title = 'JacksPay Affiliate: Contacts';
  return (
    <Fragment>
      <NavbarWrapper />
      <div className="container-fluid" id="home-page">
        {/* TOP PICTURE */}
        <div className="container-fluid" id="top-picture">
          <div className="row" id="top-picture-row">
            <div className="col-sm-12 text-left" id="welcome-col">
              <h1>WELCOME TO</h1>
              <h1 className="mb-1">JACKS PAY AFFILIATE</h1>
              <h4 className="mb-4">
                Earn more through personalized partnerships and player journeys
              </h4>
              <Link
                className="btn btn-info mt-4 mb-4 text-uppercase"
                to="/join"
              >
                Join us and start earning
              </Link>
            </div>
          </div>
        </div>
        {/* ABOUT */}
        <div className="container-fluid">
          <div className="row" id="about">
            <div className="col-md-5 text-center">
              <img
                src={require('../../img/myrewards_bg_grey_sq.jpg')}
                alt="jackspay"
              />
            </div>
            <div className="col-md-7 text-center">
              <h2 className="mb-4">CONTACTS</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
            </div>
          </div>
        </div>
        <StartEarning />
        <Bonuses />
        <Icons />
        {/*<Testimonials />*/}
        <StartEarningBottom />
      </div>
    </Fragment>
  );
};

export default Contacts;
