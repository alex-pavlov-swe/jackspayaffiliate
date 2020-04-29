import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import StartEarning from '../startEarning/StartEarning';
import StartEarningBottom from '../startEarning/StartEarningBottom';
import Bonuses from '../homePage/Bonuses';
import Icons from '../homePage/Icons';
import NavbarWrapper from '../layout/Navbar';
import Testimonials from '../homePage/Testimonials';

const MarketingTools = () => {
  document.title = 'JacksPay Affiliate: Marketing Tools';
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
          <div className="row" id="marketing-tools">
            <div className="col-md-5 text-center">
              <img
                src={require('../../img/myrewards_bg_grey_sq.jpg')}
                alt="jackspay"
              />
            </div>
            <div className="col-md-7">
              <h2 className="mb-4 text-center">MARKETING TOOLS</h2>
              <p>
                JacksPay has everything you need to get started earning
                commission with: exclusive banners and landing pages with custom
                content to cater to your customer base. Please reach out to your
                affiliate manager to get your own exclusive content.
              </p>
              <p>
                JacksPay uses Rival Powered’s advanced affiliate tracking
                software to be sure that you are able to create, track and
                manage affiliates with precision, efficiency and ease.
              </p>
              <p>The software:</p>
              <p>
                <ul>
                  <li>
                    Provides reporting which has the ability to distinguish
                    between affiliate partners which makes awarding commissions
                    easier.
                  </li>
                  <li>
                    Has a variety of compensation scenarios based on time
                    periods or games types.
                  </li>
                  <li>
                    Has tracking based on customer registration, login session
                    or individual player for accurate record keeping.
                  </li>
                </ul>
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

export default MarketingTools;
