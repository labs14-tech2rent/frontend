// src/components/NavBar.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import logout2 from '../../Logout';
import logo from '../../Images/t2rlogo.png';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
const NavBar = props => {
  

  const [menuOpened, setMenuOpened] = useState(false);

  const auth = useSelector(store => store.submit.auth);
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logout = e => {
    e.preventDefault();
    // localStorage.removeItem('access_token');
    // localStorage.removeItem('id_token');
    // localStorage.removeItem('expires_at');
    // localStorage.removeItem('user_id');
    //window.location.pathname = ' https://localhost:3000/v2/logout';
   // window.location.pathname = '/';
    logout2()
  
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
    localStorage.removeItem('targetUrl');
    
    //window.location.pathname = ' https://localhost:3000/v2/logout';
    
  };

  
  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <NavLink to="/">
              <img src={logo} alt="tech2rent logo" />
            </NavLink>       
          </div>

          <div className="navbar-input-wrapper">  
              <FontAwesomeIcon className="navbar-icon" icon={faSearch} />
              <input
                className="navbar-input"
                type="text"
                placeholder='Try "Nikon"'
              />
          </div>
          <div className="navbar-right">
            <NavLink exact to="/" className="navbar-link">
              How it Works?
            </NavLink>
            {localStorage.getItem('access_token') !== null &&
            localStorage.getItem('id_token') !== null &&
            localStorage.getItem('expires_at') !== null &&
            localStorage.getItem('user_id') !== null ? (
              <NavLink className="navbar-link" onClick={logout}>
                Log Out
              </NavLink>
            ) : (
              <NavLink
                exact
                to="/"
                className="navbar-link"
                onClick={auth.login}
              >
                Log In
              </NavLink>
            )}
            <NavLink to="#" onClick={auth.login} className="navbar-link">
              Sign Up
            </NavLink>
            <NavLink
              to="#"
              className="navbar-link"
              activeClassName="navbar-link__active"
            >
              Help
            </NavLink>
          </div>

          <div className="navbar-mobile">
            <div id="nav-icon"
          
            onClick={() => {
              const mainContent = document.querySelector('.mainContent')
              mainContent.classList.toggle('slideDown')

              const navIcon = document.querySelector('#nav-icon')
              navIcon.classList.toggle('change')
              setMenuOpened(!menuOpened)
            }}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
           
          </div>
        </div>
      </nav>
      
        
        <div className={menuOpened ? "navlinks-mobile open" : "navlinks-mobile closed"}>
          <NavLink className="navlink-mobile" to="#">
            How it Works?
          </NavLink>
          <NavLink to="#" className="navlink-mobile" onClick={auth.login}>
            Login
          </NavLink>
          <NavLink to="#" className="navlink-mobile" onClick={auth.login}>
            Sign Up
          </NavLink>
          <NavLink className="navlink-mobile" onClick={auth.login} to="#">
            Help
          </NavLink>
        </div>
      
      
    </div>
  );
};

export default NavBar;
