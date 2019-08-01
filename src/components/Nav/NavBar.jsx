// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";

import { Link } from "react-router-dom";

import logo from '../../images/t2rlogo.png'
const NavBar = (props) => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  
  return (
    <div className="nav">
      <div className="nav-logo ">
        <img src={logo} alt="tech2rent logo" />
        <Link to="/"><h3>Tech2Rent</h3></Link>
      </div>
      <Link to="/register" className="howitworks">How it Works</Link>
      <Link to="/">Log In</Link>
      <Link to="/">Sign Up</Link>
      <Link to="/">Help</Link>
     
    
    </div>
  );
};

export default NavBar;