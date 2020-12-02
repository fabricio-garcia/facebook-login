import React from 'react';

const Registration = () => {
  return (
    <React.Fragment>
      <form action="" className="form-background">
        <input
          type="text"
          className="form-control"
          placeholder="Email or Phone Number"
        />
        <input type="text" className="form-control" placeholder="Password" />
        <button className="btn btn-success fb-font registration">Login</button>
        <a
          href="https://www.facebook.com/login/identify/?ctx=recover&ars=facebook_login"
          className="form-control">
          Forgot password?
        </a>
        <button className="btn btn-success fb-font registration">
          Create New Account
        </button>
      </form>
      <p>
        <strong>Create a Page</strong> for a celebrity, band or business.
      </p>
    </React.Fragment>
  );
};

export default Registration;
