import React from 'react';
import Registration from './Registration';

const Landing = () => {
  return (
    <React.Fragment>
      <div className="row landing-container">
        <div className="col-md-6">
          <h1 className="fb-font title">facebook</h1>
          <h4>Connect with friends and the world around you on Facebook.</h4>
        </div>
        <div className="col-md-4">
          <Registration />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Landing;
