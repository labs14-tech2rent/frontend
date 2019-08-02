// src/components/NavBar.js

import React from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import logo from '../../images/t2rlogo.png';

const NavBar = props => {
  const auth = useSelector(store => store.submit.auth);
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
    props.history.push('/');
  };

  return (
    <div className="nav">
      <div className="nav-logo ">
        <img src={logo} alt="tech2rent logo" />
        <NavLink to="/">
          <h3>Tech2Rent</h3>
        </NavLink>
      </div>
      <NavLink to="/register" className="howitworks">
        How it Works
      </NavLink>
      {
        localStorage.getItem('access_token') !== null &&
        localStorage.getItem('id_token')!== null &&
        localStorage.getItem('expires_at')!== null &&
         localStorage.getItem('user_id')!== null ?
         <NavLink onClick={logout}>Log Out</NavLink> : <NavLink onClick={auth.login}>Log In</NavLink>}
      <NavLink onClick={auth.login}>Sign Up</NavLink>
      <NavLink to="/">Help</NavLink>
    </div>
  );
};

export default NavBar;
