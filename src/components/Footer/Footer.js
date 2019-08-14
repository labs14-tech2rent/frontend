/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faFacebook,
  faTwitter,
  faGoogle,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => (
  <footer className="footer mainContent">
    <div className="footer-content">
      <div className="footer-content__left">
        <div className="left-column">
          <h3 className="footer-heading">About Tech 2 Rent</h3>
          <a href="#" className="footer-link">
            What is Tech 2 Rent?
          </a>
          <a href="#" className="footer-link">
            Missions and Values
          </a>
          <a href="#" className="footer-link">
            Trust and Safety
          </a>
          <a href="#" className="footer-link">
            Insurance
          </a>
          <a href="#" className="footer-link">
            FAQ
          </a>
          <a href="#" className="footer-link">
            Privacy Policy
          </a>
          <a href="#" className="footer-link">
            Terms of Use
          </a>
        </div>

        <div className="right-column">
          <h3 className="footer-heading">Hottest Tech</h3>
          <a href="#" className="footer-link">
            Camera Listing
          </a>
          <a href="#" className="footer-link">
            Lens Rental
          </a>
          <a href="#" className="footer-link">
            Canon EOS Rental
          </a>
          <a href="#" className="footer-link">
            Sony Rental
          </a>
          <a href="#" className="footer-link">
            VR Tech
          </a>
          <a href="#" className="footer-link">
            Apple Products Rental
          </a>
        </div>
      </div>

      <div className="footer-content__right">
        <p className="footer-cta">Don't Lose Out</p>
        <p className="footer-link footer-link__no-hover">Join Tech 2 Rent's Mailing List</p>
        <div className="footer-input-wrapper">
          <FontAwesomeIcon className="footer-icon" icon={faEnvelope} />
          <input
            className="footer-input"
            type="email"
            placeholder="Enter email here"
          />
        </div>
        <div className="footer-content__three">
          <button className="footer-button__dark">
            Subscribe
          </button>
          <div className="footer-brands-wrapper">
            <FontAwesomeIcon
                className="footer-brand"
                icon={faFacebook}
            />
            <FontAwesomeIcon
                className="footer-brand"
                icon={faTwitter}
            />
            <FontAwesomeIcon
                className="footer-brand"
                icon={faGoogle}
            />
            <FontAwesomeIcon className="footer-brand" icon={faInstagram} />
          </div>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
