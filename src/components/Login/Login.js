import React, {useState} from 'react';
//import {connect} from 'react-redux';
//import {login, signUp, reset} from '../../actions';
import {useSelector, useDispatch} from 'react-redux'
import './login.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import { faFacebook, faTwitter, faGoogle, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faSearch} from '@fortawesome/free-solid-svg-icons'
library.add( faSearch)

const Login = (props) => {

  const auth = useSelector(store => store.submit.auth)
  let content = ( //  conditionally renders content based on login form or sign up form state. 
	
  <div className="App"> 
    <div className="section-1">
      <h2>Welcome back to the community.</h2>
      <FontAwesomeIcon className="footer-icon" icon="fa-search" />
      <input type="text" placeholder='Try "Nikon"' />
    </div>
  
    <div className="section-2">
    
    
      <button onClick={auth.login} className="login-button">Log in</button>
      <p>By signing up, I agree to KitSplits <a className="privtermslink" href="">Terms of Service</a> and <a className="privtermslink" href="">Privacy Policy</a></p>
    </div>
	
      
	  
    </div>
  ); 
  return content
  }


// const mapStateToProps = ({isLoggingIn, error, newUser, pending, loggedIn, auth}) => ({
//   isLoggingIn,
//   error,
//   newUser,
//   pending,
//   loggedIn,
//   auth


// grabbing login and signup from actions file... mapping the state to the props
export default Login
