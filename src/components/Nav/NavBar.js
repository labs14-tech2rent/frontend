// src/components/NavBar.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector } from 'react-redux';
import { NavLink, Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import logout2 from '../../Logout';
import logo from '../../Images/t2rlogo.png';

const NavBar = props => {
  const [menuOpened, setMenuOpened] = useState(false);
  const [filter, setFilter] = useState('');
  const [items, setItems] = useState([]);
  const [displayed, setDisplayed] = useState([]);

  const auth = useSelector(store => store.submit.auth);
  // const { isAuthenticated, loginWithRedirect, logout } = useAuth0();
  const logout = e => {
    e.preventDefault();
    // localStorage.removeItem('access_token');
    // localStorage.removeItem('id_token');
    // localStorage.removeItem('expires_at');
    // localStorage.removeItem('user_id');
    // window.location.pathname = ' https://localhost:3000/v2/logout';
    // window.location.pathname = '/';
    logout2();

    localStorage.removeItem('access_token');
    localStorage.removeItem('id_token');
    localStorage.removeItem('expires_at');
    localStorage.removeItem('user_id');
    localStorage.removeItem('targetUrl');

    // window.location.pathname = ' https://localhost:3000/v2/logout';
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        'https://labstech2rentstaging.herokuapp.com/api/items'
      );
      const filtered = result.data.filter(item =>
        item.name.toLowerCase().includes(filter)
      );
      setItems(filtered);
    };

    fetchData();
  }, [filter]);

  function handleKeyPress(e) {
    if (e.key === 'Enter') {
      // props.history.push({
      //   pathname: '/view-listing',
      //   state: { items: items }
      // })
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
              onChange={e => setFilter(e.target.value)}
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
                <h4 className="navbar-searched__more" onClick={auth.login}>
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
            <div
              id="nav-icon"
              onClick={() => {
                const mainContent = document.querySelectorAll('.mainContent');
                for (let i = 0; i < mainContent.length; i++) {
                  mainContent[i].classList.toggle('slideDown');
                }

                const navIcon = document.querySelector('#nav-icon');
                navIcon.classList.toggle('change');
                setMenuOpened(!menuOpened);
              }}
            >
              <div className="bar1"></div>
              <div className="bar2"></div>
              <div className="bar3"></div>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={
          menuOpened ? 'navlinks-mobile open' : 'navlinks-mobile closed'
        }
      >
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
