import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { registerUser } from '../../actions';

const Register = props => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
    auth0_user_id: '',
  });
  const auth = useSelector(store => store.submit.auth);
  const dispatch = useDispatch();

  const handleChange = e => {
    // ifg the login form state is true, then set the state of the inputs when typed to equal that of credentials
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
      auth0_user_id: localStorage.getItem('user_id'),
    });
  };

  const signup = e => {
    e.preventDefault();

    dispatch(registerUser(credentials));
    props.history.push('/home');
  };

  return (
    // Line 62, 63, 72, 73, 75 -- conditionally renders content based on login form
    // or sign up form state. 63 calls a separate fn based on form state
    <div className="register">
      <div className="register-container">
        <div className="register-heading">
          <p>Give yourself the oppotunity</p>
          <p>Join the community.</p>.
        </div>
        <p>Please confirm your name and email to complete your registration.</p>
        <form onSubmit={signup} className="register-form">
          <label className="register-label" htmlFor="email">
            Email
          </label>
          <input
            className="register-input"
            id="email"
            type="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label className="register-label" htmlFor="name">
            Name
          </label>
          <input
            className="register-input"
            id="name"
            type="text"
            name="name"
            value={credentials.name}
            onChange={handleChange}
            required
          />
          <button className="register-submit">Complete your account</button>
        </form>
        <p className="register-agreement">
          By signing up, I agree to Tech 2 Rent{' '}
          <Link className="register-link">Terms of Service</Link> and{' '}
          <Link className="register-link">Privacy Policy.</Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
