import React, { useState } from 'react';

const LogIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    let count = 0;

    const exampleUsers = [
      { email: 'user1', password: 'user1' },
      { email: 'user2', password: 'user2' },
      { email: 'user3', password: 'user3' },
    ];

    for (let user of exampleUsers) {
      if (user.email === email && user.password === password) {
        count += 1;
      }
    }

    if (count === 1) {
      alert('Login Successful!');
    } else {
      alert('Login Failed, try again');
    }
  };

  return (
    <React.Fragment>
      <div className="container w-75 form-background">
        <form>
          <div className="form-group">
            <input
              type="email"
              className="form-control"
              placeholder="Email or Phone Number"
              value={email}
              onChange={e => {
                setEmail(e.target.value);
              }}
            />
          </div>
          <div className="form-group">
            <input
              type="password"
              className="form-control"
              placeholder="Password"
              value={password}
              onChange={e => {
                setPassword(e.target.value);
              }}
            />
          </div>
          <button className="btn btn-primary btn-lg btn-block" onClick={login}>
            Log In
          </button>
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

export default LogIn;
