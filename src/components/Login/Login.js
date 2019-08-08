/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
// import {connect} from 'react-redux';
// import {login, signUp, reset} from '../../actions';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

library.add(faSearch);

const Login = props => {
  const auth = useSelector(store => store.submit.auth);
  const content = ( //  conditionally renders content based on login form or sign up form state.
    <div className="App mainContent">
      <div className="section-1">
      <h2>Welcome back to the community.</h2>
        <div className="navbar-input-wrapper">  
          <FontAwesomeIcon className="navbar-icon" icon={faSearch} />
          <input
            className="navbar-input"
            type="text"
            placeholder='Try "Nikon"'
          />
        </div>
      </div>

      <div className="section-2">
        <button onClick={auth.login} className="login-button">
          Log in
        </button>
        <p>
          By signing up, I agree to Tech2Rent{' '}
          <a className="privtermslink" href="#">
            Terms of Service
          </a>{' '}
          and{' '}
          <a className="privtermslink" href="#">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
  return content;
};

export default Login;
