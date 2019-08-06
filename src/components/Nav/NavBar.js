// src/components/NavBar.js

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import logo from '../../Images/t2rlogo.png';

const NavBar = props => {
  const [menuOpened, setMenuOpened] = useState(false);

  const auth = useSelector(store => store.submit.auth);
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logout = e => {
    e.preventDefault();
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
    window.location.pathname = '/';
    console.log('hello');
  };

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <NavLink to="/">
              <img src={logo} alt="tech2rent logo" />
            </NavLink>
            <NavLink to="/">
              <h3>Tech2Rent</h3>
            </NavLink>
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
            <NavLink onClick={auth.login} className="navbar-link">
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
            <FontAwesomeIcon
              icon={faBars}
              onClick={() => setMenuOpened(!menuOpened)}
            />
          </div>
        </div>
      </nav>
      {menuOpened ? (
        <div className="navlinks-mobile">
          <NavLink className="navlink-mobile" to="#">
            How it Works?
          </NavLink>
          <NavLink className="navlink-mobile" onClick={auth.login}>
            Login
          </NavLink>
          <NavLink className="navlink-mobile" onClick={auth.login}>
            Sign Up
          </NavLink>
          <NavLink className="navlink-mobile" onClick={auth.login} to="#">
            Help
          </NavLink>
        </div>
      ) : (
        ''
      )}
    </div>
  );
};

export default NavBar;
