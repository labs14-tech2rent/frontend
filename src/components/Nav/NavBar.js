// src/components/NavBar.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { faUserCircle as farFaUserCircle } from '@fortawesome/free-regular-svg-icons';
import logout2 from '../../Logout';
import logo from '../../Images/t2rlogo.png';

const NavBar = props => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [filter, setFilter] = useState('');
  const [items, setItems] = useState([]);
  const [displayed, setDisplayed] = useState([]);
  const [domLoaded, setDomLoaded] = useState(false);

  // event listener that sets state to loaded when ALL content has been loaded
  // /used for adding to click events, not allowing user to click on animations until all content has been loaded
  window.addEventListener('load', event => {
    console.log('loaded');
    setDomLoaded(true);
  });
  // /end event listener

  // grabs the auth from the store, used for calling auth0
  const auth = useSelector(store => store.submit.auth);

  // logout function to remove user from cookies
  const logout = e => {
    e.preventDefault();

    // calls imported logout axios function
    logout2();

    // removes all items saved to local storage when they logged in
    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
    localStorage.removeItem('targetUrl');
  };

  // /////////////////////////////////
  // /// mobile animation control/////
  // /////////////////////////////////

  // grabbing variables used in animations mobile
  const navMobile = document.querySelector('.navlinks-mobile');
  const navigationLink = document.querySelectorAll('.navlink-mobile');
  const navIcon = document.querySelector('#nav-icon');
  const mainContent = document.querySelector('.mainContent');

  // if the nav mobile view exists (if they are below 500px) AND all the content has been loaded
  if (navMobile && domLoaded === true) {
    for (let i = 0; i < navigationLink.length; i++) {
      // add listener to all the mobile navigation links
      navigationLink[i].addEventListener('click', () => {
        // remove open class and reset the mobile navigation to closed
        navMobile.className = 'navlinks-mobile closed';
        // remove the change class that resets the hamburger icon
        navIcon.classList.remove('change');
        // remove the slidedown class on the main content of the page, making content slide back up
        mainContent.classList.remove('slideDown');
        // set the menu opened state to false
        setMenuOpened(false);
      });
    }
  }
  // /////////////////////////////////
  // /// END mobile animation control/////
  // /////////////////////////////////

  // /////////////////////////////////
  // /// desktop animation control/////
  // /////////////////////////////////

  // grab variables used in animation
  const navigation = document.querySelector('.navbar-content');
  const desktopLink = document.querySelectorAll('.navbar-link');
  const profileDropdown = document.querySelector('.profile-dropdown');

  // if desktop navigation exists and all the content has been loaded
  if (navigation && domLoaded) {
    for (let i = 0; i < desktopLink.length; i++) {
      // when any desktop navlink is clicked...
      desktopLink[i].addEventListener('click', () => {
        // ...it will close the profile dropdown menu if it is opened
        profileDropdown.classList.remove('dropdown-open');
      });
    }
  }

  // /////////////////////////////////
  // /// END desktop animation control/////
  // /////////////////////////////////

  // /////////////////////////////////////////
  // /// USE EFFECT = Component Did Mount/////
  // /////////////////////////////////////////
  useEffect(() => {
    // grab data once component has been mounted
    const fetchData = async () => {
      const result = await axios(
        'https://labstech2rentstaging.herokuapp.com/api/items'
      );
      const filtered = result.data.filter(item =>
        item.name.toLowerCase().includes(filter)
      );
      // console.log(filtered);
      setItems(filtered);
    };

    fetchData();
  }, [filter]); // only call or run fn again if a new filter has been ran

  // //////////////////////////
  // /// END OF USE EFFECT/////
  // //////////////////////////

  // ////////////////
  // /// FILTER /////
  // ////////////////
  function handleKeyPress(e) {
    // if item exists
    if (e.key === 'Enter') {
      if (items.length >= 3 && filter) {
        setDisplayed([items[0], items[1], items[2]]);
      } else if (items.length === 2 && filter) {
        setDisplayed([items[0], items[1]]);
      } else if (items.length === 1 && filter) {
        setDisplayed([items[0]]);
      } else if (items.length === 0 && filter) {
        setDisplayed([{ name: 'No match found' }]);
      } else if (!filter) {
        setDisplayed([]);
      }
    }
  }

  // ////////////////
  // /// END FILTER /////
  // ////////////////

  return (
    <div className="nav-container">
      <nav className="navbar">
        <div className="navbar-content">
          <div className="navbar-left">
            <NavLink
              to="/"
              onClick={() => {
                // when nav icon is clicked on the navbar, reset all animations as described above
                setMenuOpened(false);
                console.log(navMobile);
                navMobile.className = 'navlinks-mobile closed';
                navIcon.classList.remove('change');
                mainContent.classList.remove('slideDown');
                profileDropdown.classList.remove('dropdown-open');
              }}
            >
              <img src={logo} alt="tech2rent logo" />
            </NavLink>
          </div>
          <div className="navbar-input-wrapper">
            <FontAwesomeIcon className="navbar-icon" icon={faSearch} />
            <input
              className="navbar-input"
              type="text"
              placeholder='Try "Nikon"'
              name="item"
              // value={item.item}
              onChange={e => {
                setFilter(e.target.value); // set filter of state to the value typed in
              }}
              onKeyPress={e => handleKeyPress(e)}
            />
            <div className="navbar-searched">
              {displayed.length > 0 &&
                displayed[0].name !== 'No match found' &&
                displayed.map(item => (
                  <div className="navbar-searched__content" key={item.id}>
                    <img
                      className="navbar-searched__img"
                      src={
                        item.picture.startsWith('http')
                          ? item.picture
                          : 'https://www.leisuretec.co.uk/resources/images/no-image.png'
                      }
                    />
                    <div className="navbar-searched__text">
                      <p className="navbar-searched__name">{item.name}</p>
                      <p className="navbar-searched__location">
                        {item.city.charAt(0).toUpperCase() + item.city.slice(1)}
                        , {item.state}
                      </p>
                    </div>
                  </div>
                ))}

              {displayed.length > 0 && displayed[0].name !== 'No match found' && (
                <h4
                  className="navbar-searched__more"
                  onClick={() => props.history.push('/view-listing')}
                >
                  View More Listings
                </h4>
              )}

              {displayed.length > 0 &&
              displayed[0].name === 'No match found' ? (
                <div className="navbar-searched__notfound">
                  {displayed[0].name}
                </div>
              ) : (
                ''
              )}
            </div>
          </div>
          <div className="navbar-right">
            <NavLink exact to="/" className="navbar-link ">
              How it Works?
            </NavLink>
            {localStorage.getItem('access_token') !== null &&
            localStorage.getItem('id_token') !== null &&
            localStorage.getItem('expires_at') !== null &&
            localStorage.getItem('user_id') !== null ? (
              // if items are in local storage === user logged in//

              // if logged in show log out
              <NavLink className="navbar-link" onClick={logout}>
                Log Out
              </NavLink>
            ) : (
              // if logged out show log in
              <NavLink
                exact
                to="/"
                className="navbar-link"
                onClick={auth.login}
              >
                Log In
              </NavLink>
            )}
            <NavLink to="/view-listing" className="navbar-link">
              Browse
            </NavLink>
            <NavLink
              to="#"
              className="navbar-link"
              activeClassName="navbar-link__active"
            >
              Help
            </NavLink>
          </div>

          {localStorage.getItem('access_token') !== null &&
          // if user is logged in and has all tokens, show the profile user icon, else show nothing
          localStorage.getItem('id_token') !== null &&
          localStorage.getItem('expires_at') !== null &&
          localStorage.getItem('user_id') !== null ? (
            <FontAwesomeIcon
              className="navbar-icon__user"
              icon={farFaUserCircle}
              onClick={() => {
                const dropdown = document.querySelector('.profile-dropdown');
                dropdown.classList.toggle('dropdown-open');
              }}
            />
          ) : null}

          <div className="navbar-mobile">
            <div
              id="nav-icon"
              onClick={() => {
                // selects all classes with mainContent and toggles the slidedown class when hamburger menu is clicked
                // this is for animations on mobile view

                // if all content is loaded, allow user to click hamburger icon
                if (domLoaded === true) {
                  const mainContent = document.querySelectorAll('.mainContent');
                  for (let i = 0; i < mainContent.length; i++) {
                    // add class of slidedown when hamburger icon is clicked
                    mainContent[i].classList.toggle('slideDown');
                  }

                  const navIcon = document.querySelector('#nav-icon');
                  navIcon.classList.toggle('change'); // animate the hamburger icon when clicked
                  navIcon.className === 'change'
                    ? setMenuOpened(true)
                    : setMenuOpened(false); // toggle state of menu opened when clicked
                }
              }}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
      </nav>

      <nav
        className={
          menuOpened ? 'navlinks-mobile open' : 'navlinks-mobile closed'
        }
      >
        {localStorage.getItem('access_token') !== null &&
        localStorage.getItem('id_token') !== null &&
        localStorage.getItem('expires_at') !== null &&
        localStorage.getItem('user_id') !== null ? (
          // if logged in show log out
          <NavLink className="navlink-mobile" onClick={logout}>
            Log Out
          </NavLink>
        ) : (
          // if logged out show log in
          <NavLink exact to="/" className="navlink-mobile" onClick={auth.login}>
            Log In
          </NavLink>
        )}
        <NavLink className="navlink-mobile" to="#">
          How it Works?
        </NavLink>

        <NavLink to="/view-listing" className="navlink-mobile">
          Browse
        </NavLink>
        <p
          className="profile-tab"
          onClick={() => {
            // const profile = document.querySelector('.profile-tab')
            const dropdown = document.querySelector('.mobile-profile-dropdown');
            // animated the sub slide in menu for mobile
            dropdown.classList.toggle('profile-slide');
          }}
        >
          Profile
        </p>
        <div className="mobile-profile-dropdown">
          <NavLink to="account-settings" className="navlink-mobile">
            Account
          </NavLink>
          <NavLink to="/edit-profile" className="navlink-mobile">
            Edit Profile
          </NavLink>
          <NavLink to="/profile" className="navlink-mobile">
            Profile
          </NavLink>
        </div>

        <NavLink className="navlink-mobile" onClick={auth.login} to="#">
          Help
        </NavLink>
      </nav>

      <div className="profile-dropdown">
        <div className="dropdown-container">
          <NavLink className="navbar-link dropdown" to="/account-settings">
            Account Settings
          </NavLink>
          <NavLink className="navbar-link dropdown" to="/edit-profile">
            Edit Profile
          </NavLink>
          <NavLink className="navbar-link dropdown" to="/profile">
            Go To Profile
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
