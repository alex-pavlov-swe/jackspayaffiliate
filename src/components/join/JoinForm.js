import React, { Fragment } from 'react';
import Navbar from '../layout/Navbar-2';

const JoinForm = () => {
  document.title = 'JacksPay Affiliate - Register';

  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12" id="register-affiliate">
            <iframe
              src="https://affil-adm.casinocontroller.com/affiliate/new_account?g=121"
              title="Register a new Affiliate"
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default JoinForm;
