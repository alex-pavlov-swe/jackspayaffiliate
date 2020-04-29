import React from 'react';
import { HashLink as Link } from 'react-router-hash-link';

const StartEarning = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 text-center" id="start-earning">
          <h2 className="text-uppercase mb-2">
            We've got all you need to start earning
          </h2>
          <Link to="/join/#register-affiliate" className="btn m-4">
            JOIN US AND START EARNING
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StartEarning;
