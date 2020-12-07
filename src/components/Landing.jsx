import React from 'react';
import Registration from './LogIn';

const Landing = () => {
  return (
    <React.Fragment>
      <div className="row mb-4 align-items-center landing-container flex-grow-1">
        <div className="col-md-2"></div>
        <div className="col-md-4 text-left">
          <h1 className="fb-font title">facebook</h1>
          <h4>Connect with friends and the world around you on Facebook.</h4>
        </div>
        <div className="col-md-4">
          <Registration />
        </div>
        <div className="col-md-2"></div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
