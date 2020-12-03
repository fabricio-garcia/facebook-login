import React from 'react';

const Registration = () => {
  return (
    <React.Fragment>
      <div className="container w-75 form-background">
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email or Phone Number"
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
            />
          </div>
          <button className="btn btn-primary btn-lg btn-block">Log In</button>
          <div className="forgot-pass-container mt-3 mb-3">
            <a
              className="forgot-pass"
              href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login">
              Forgot password?
            </a>
          </div>
          <button className="btn btn-success btn-md fb-font">
            Create New Account
          </button>
        </form>
      </div>
      <p className="mt-3">
        <a
          href="https://www.facebook.com/pages/create/?ref_type=registration_form"
          style={{ color: 'black' }}>
          <strong>Create a Page</strong>{' '}
        </a>
        for a celebrity, band or business.
      </p>
    </React.Fragment>
  );
};

export default Registration;
