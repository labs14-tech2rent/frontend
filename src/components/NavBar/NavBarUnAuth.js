import React  from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const NavBarUnAuth = () => {

    return (
      <nav className="navbar">
        <div className="navbar-content">
            <div className="navbar-left">
              <h4 className="navbar-logo">Logo</h4>
              <div className="navbar-input-wrapper">
                    <FontAwesomeIcon className="navbar-icon" icon={faSearch} />
                    <input className="navbar-input" type="text" placeholder='Try "Nikon"'/>
              </div>
            </div>
            <div className="navbar-right">
              <NavLink exact to="/" className="navbar-link" activeClassName="navbar-link__active">How it Works?</NavLink>
              <NavLink exact to="/login" className="navbar-link" activeClassName="navbar-link__active">Login</NavLink>
              <NavLink to="#" className="navbar-link" activeClassName="navbar-link__active">Sign Up</NavLink>
              <NavLink to="#" className="navbar-link" activeClassName="navbar-link__active">Help</NavLink>
            </div>
        </div>
      </nav>
    );
  };
  
export default NavBarUnAuth;
