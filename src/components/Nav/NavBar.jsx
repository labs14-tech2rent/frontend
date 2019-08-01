// src/components/NavBar.js

import React from "react";
import { useAuth0 } from "../../react-auth0-wrapper";
import { Link } from "react-router-dom";
import './Nav.scss'
const NavBar = () => {
  const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  
  
  return (
    <div className="nav">
      <h3>Tech2Rent</h3>
      <li>Login</li>
      <li>Sign Up</li>
      <li>Help</li>
     
    
    </div>
  );
};

export default NavBar;