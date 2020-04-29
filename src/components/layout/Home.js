import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import StartEarning from '../startEarning/StartEarning';
import StartEarningBottom from '../startEarning/StartEarningBottom';
import Bonuses from '../homePage/Bonuses';
import Icons from '../homePage/Icons';
import NavbarWrapper from '../layout/Navbar';
import Testimonials from '../homePage/Testimonials';

const Home = () => {
  document.title = 'JacksPay Affiliate: Online Casino Affiliate Program';
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
              <h2 className="mb-4">ABOUT OUR AFFILIATE PROGRAM</h2>
              <p>
                JacksPay.com offers players the best in online gaming experience
                by providing engaging ongoing content, personalized 1 on 1
                customer service and VIP treatment, plus Jack always provided
                fair play and treatment of players.
              </p>
              <p>
                No holding payments for weeks or hiding behind terms and
                conditions. Jack also offers over 500 Casino games from some of
                the top gaming providers, with new additions weekly.
              </p>
              <p>
                Your customers will be always be satisfied playing with Jack
                which will be reflected in your monthly commissions paid by
                Jack.
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

export default Home;
