import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const StartEarningBottom = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 text-center" id="start-earning-bottom">
          <h2 className="text-uppercase mb-2">START EARNING TODAY</h2>
          <Link to="/join/#register-affiliate" className="btn m-4">
            JOIN US TODAY
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartEarningBottom;
