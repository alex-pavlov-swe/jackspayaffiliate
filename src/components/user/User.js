import React, { Fragment, useEffect } from 'react';
import Navbar from '../layout/Navbar-2';

const User = () => {
  document.title = 'JacksPay Affiliate: Log In';
  {
    /*
  useEffect(() => {
    console.log('COOCKIE!!!', document.cookie);
    window.addEventListener('message', function (event) {
      this.console.log('EVENT!!!', event);
    });
  });
*/
  }
  return (
    <Fragment>
      <Navbar />
      <div className="container-fluid" id="user">
        <div className="row">
          <div className="col-sm-12" id="register-affiliate">
            <iframe
              id="login_frame"
              src="https://onlinecasinoshare.com/pages/login_form.php"
              title="Log in"
            ></iframe>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default User;
