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

  return (
    <div>
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <NavLink to="/">
              <img src={logo} alt="tech2rent logo" />
            </NavLink>
          </div>
          <div className="navbar-right">
            <NavLink
              exact
              to="/"
              className="navbar-link"
              activeClassName="navbar-link__active"
            >
              How it Works?
            </NavLink>
            <NavLink
              onClick={auth.login}
              className="navbar-link"
              activeClassName="navbar-link__active"
            >
              Login
            </NavLink>
            <NavLink
              onClick={auth.login}
              className="navbar-link"
              activeClassName="navbar-link__active"
            >
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
