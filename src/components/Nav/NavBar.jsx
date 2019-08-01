// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import {useSelector} from 'react-redux'
import { NavLink } from "react-router-dom";

import logo from '../../images/t2rlogo.png'
const NavBar = (props) => {
  const auth = useSelector(store => store.submit.auth)
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  
  return (
    <div className="nav">
      <div className="nav-logo ">
        <img src={logo} alt="tech2rent logo" />
        <NavLink to="/"><h3>Tech2Rent</h3></NavLink>
      </div>
      <NavLink to="/register" className="howitworks">How it Works</NavLink>
      <NavLink onClick={auth.login}>Log In</NavLink>
      <NavLink onClick={auth.login}>Sign Up</NavLink>
      <NavLink to="/">Help</NavLink>
     
    
    </div>
  );
};

export default NavBar;