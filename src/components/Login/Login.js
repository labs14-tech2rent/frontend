import React, {useState} from 'react';
//import {connect} from 'react-redux';
//import {login, signUp, reset} from '../../actions';
import {useSelector, useDispatch} from 'react-redux'
import * as actions from '../../actions';
const Login = (props) => {

  const auth = useSelector(store => store.auth)
  let content = ( //  conditionally renders content based on login form or sign up form state. 
	
	<div className="App"> 
		<h1>Tech2Rent</h1>
	  <button onClick={auth.login} >Login/Register</button>
      
	  
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
