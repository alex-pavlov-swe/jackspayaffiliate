import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const Footer = () => {
  return (
    <footer className="container-fluid">
      <div className="row">
        <div className="col-12 text-center header-container">
          <img
            className="footer-logo"
            src={require('../../img/main_logo.png')}
            alt="JacksPay logo"
          />
          <h3 className="footer-brand">JACKS PAY AFFILIATE</h3>
        </div>
      </div>
      <div className="row">
        <div className="col-8 offset-2">
          <div className="footer-links">
            <div className="footer-item text-center">
              <Link
                className="btn footer-link"
                to="/marketingTools/#marketing-tools"
              >
                MARKETING TOOLS
              </Link>
            </div>
            <div className="footer-item text-center">
              <Link className="btn footer-link" to="/commisions/#about">
                COMISSIONS
              </Link>
            </div>
            <div className="footer-item text-center">
              <Link className="btn footer-link" to="/contacts/#about">
                CONTACTS
              </Link>
            </div>
            <div className="footer-item text-center">
              <Link className="btn footer-link" to="/">
                FAQ
              </Link>
            </div>
            <div className="footer-item text-center">
              <Link
                className="btn p-1 pl-3 pr-3 login footer-link"
                to="/user/#navbar-other"
              >
                LOGIN
              </Link>
            </div>
            <div className="footer-item text-center">
              <Link
                className="btn p-1 pl-3 pr-3 join footer-link"
                to="/join/#navbar-other"
              >
                JOIN NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
