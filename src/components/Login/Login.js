/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import axios from 'axios';
// import {connect} from 'react-redux';
// import {login, signUp, reset} from '../../actions';
import { useSelector } from 'react-redux';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

import { Parallax } from 'react-scroll-parallax';
import home_phone from '../../Images/home_phone.png';
import home_googleplay from '../../Images/home_googleplay.png';
import home_laptop from '../../Images/home_laptop.png';
import home_legs from '../../Images/home_legs.png';

library.add(faSearch);

const Login = props => {
  const section4Style = {
    backgroundImage: `url(${home_laptop})`,
  };

  const section5Style = {
    backgroundImage: `url(${home_legs})`,
  };

  const auth = useSelector(store => store.submit.auth);
  const [disabled, setDisabled] = useState(false);
  // function myFunction(x) {
  //   if (x.matches) { // If media query matches
  //     setDisabled(true)
  //   }
  // }
  const screen = document.querySelector('html');
  window.addEventListener('load', event => {
    window.innerWidth < 700 ? setDisabled(true) : setDisabled(false);
  });
  const x = window.matchMedia('(max-width: 700px)');
  // myFunction(x) // Call listener function at run time
  x.addListener(x => {
    if (x.matches) {
      setDisabled(true);
      console.log('hello');
    } else {
      setDisabled(false);
    }
  }); // Attach listener function on state changes
  const content = ( //  conditionally renders content based on login form or sign up form state.
    <div className="App mainContent">
      <Parallax
        disabled={disabled}
        className="section-1"
        y={[30, -30]}
        tagOuter="figure"
      >
        <h1>Dream. Rent. Create</h1>
        <h2>Welcome back to the community.</h2>
        <button onClick={auth.login} className="login-button">
          Log in
        </button>
      </Parallax>

      <Parallax
        disabled={disabled}
        className="section-6"
        x={[-20, 10]}
        tagOuter="figure"
      >
        <div className="section-6__content">
          <div className="section-6__content_card card-1">
            <img
              src="https://static.bhphoto.com/images/images2500x2500/1455749513_1225876.jpg"
              alt="DSLR Camera"
            />
            <h3>DSLR Cameras</h3>
          </div>

          <div className="section-6__content_card card-2">
            <img
              src="https://assets.website-files.com/5aad54d37fb511b17b1f3230/5aba9603cd72e61d0659e5db_9-impact-qualite-300-focusing-flood-2-light-kit.jpg"
              alt="Lightning Equipment"
            />
            <h3>Lightning Equipment</h3>
          </div>

          <div className="section-6__content_card card-3">
            <img
              src="https://lh3.googleusercontent.com/zffnXSH2Z8BlzLNOMlvP1-gCjOCS9I2Nct1F55uG63U1iQQH-e0R9xYwmOD6joP2IFRQzUdU1IOkIB3lJuwMHiI=w640-h480-p"
              alt="3D Printer"
            />
            <h3>3D Printers</h3>
          </div>

          <div className="section-6__content_card card-4">
            <img
              src="https://pmcvariety.files.wordpress.com/2018/10/hmd-odyssey_1.png?w=700&h=563&crop=1"
              alt="VR Equipment"
            />
            <h3>VR Equipment</h3>
          </div>

          <div className="section-6__content_card card-5">
            <img
              src="https://i03.hsncdn.com/is/image/HomeShoppingNetwork/prodfull/hp-14-amd-a4-dual-core-64gb-emmc-laptop-with-office-and-d-20190423135202573~670475_040.jpg"
              alt="Laptop"
            />
            <h3>Laptops</h3>
          </div>

          <div className="section-6__content_card card-6">
            <img
              src="https://target.scene7.com/is/image/Target/GUEST_8b787c67-2221-46df-ac6e-a8d23762876a?wid=488&hei=488&fmt=pjpeg"
              alt="Drone"
            />
            <h3>Drones</h3>
          </div>
        </div>
      </Parallax>

      <div className="section-5">
        <div className="section-5__left">Left Side</div>

        <div className="section-5__right" style={section5Style}>
          <Parallax
            className="section-5__right"
            disabled={disabled}
            x={[40, 0]}
            tagOuter="figure"
          >
            <h2>Welcome</h2>
            <h2>To</h2>
            <h2>The</h2>
            <h2>Community</h2>
          </Parallax>
        </div>
      </div>

      <div className="section-4" style={section4Style}>
        <div className="section-3__content section-4__content">
          <Parallax
            disabled={disabled}
            className="section-4__left"
            tagOuter="figure"
            x={[-20, 20]}
          >
            <div>
              <h2>Search</h2>
              <p>Large directory of High end technology.</p>
            </div>

            <div>
              <h2>Book</h2>
              <p>Large directory of High end technology.</p>
            </div>

            <div>
              <h2>Ship</h2>
              <p>Large directory of High end technology.</p>
            </div>
          </Parallax>

          <Parallax
            disabled={disabled}
            className="section-4__right"
            tagOuter="figure"
            x={[20, 0]}
          >
            <h2>It's Simple.</h2>
            <h2>We'll Prove it.</h2>
            <p>
              We are the platform that helps everyone capitalize on opportunity.
              An apportunity to create, an opportunity to share, and opportunity
              to grow.{' '}
            </p>
          </Parallax>
        </div>
      </div>

      <div className="section-3">
        <div className="section-3__content">
          <Parallax
            disabled={disabled}
            className="section-3__content__left"
            tagOuter="figure"
            x={[-30, 0]}
          >
            <h2 className="section-3__heading">
              <span>
                <h4 className="section-3__heading__first">TWO</h4>
                <h4 className="section-3__heading__second">TO A COIN.</h4>
              </span>
              <span>
                <h4 className="section-3__heading__third">SIDES</h4>
                <h4 className="section-3__heading__fourth">SIDES</h4>
              </span>
            </h2>
            <p className="section-3__heading__fifth">
              Renters get high end tech shipped to them so their opportunities
              are endless.
            </p>
            <p className="section-3__heading__fifth">
              Owners equipment can be assured that vetted users are in possesion
              of their belongings and can make money from the tech rent.
            </p>
          </Parallax>
          <Parallax
            disabled={disabled}
            className="section-3__content__right"
            tagOuter="figure"
            x={[20, -30]}
          >
            <div className="section-3__content__right">
              <img
                src={home_phone}
                alt="Picture of mobile phone"
                className="section-3__content__right__img1"
              />
              <img src={home_googleplay} alt="Googleplay logo" />
            </div>
          </Parallax>
        </div>
      </div>

      <div className="section-2">
        <p>
          By signing up, I agree to Tech2Rent{' '}
          <a className="privtermslink" href="#">
            Terms of Service
          </a>{' '}
          and{' '}
          <a className="privtermslink" href="#">
            Privacy Policy
          </a>
        </p>
      </div>
    </div>
  );
  return content;
};

export default Login;
