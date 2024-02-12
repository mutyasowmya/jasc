import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true); // Set submitted to true when form is submitted

    const userData = JSON.parse(localStorage.getItem('userData')) || [];
    let userFound = false;
    for (const user of userData) {
      if (user.email === email && user.password === password) {
        userFound = true;
        break;
      }
    }
    setIsLoggedIn(userFound);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="auth-inner">
        <h1>Log In</h1>

        <div className="mb-3">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
        <p className="forgot-password text-right">
          Forgot <a href="#">password?</a>
        </p>
      </form>
      {submitted && !isLoggedIn && <p>Invalid email or password</p>}
      {isLoggedIn && <p>Logged in successfully</p>}
    </>
  );
}

export default Login;
