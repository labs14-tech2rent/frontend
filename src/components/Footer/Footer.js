import React, { useState } from 'react';

const Footer = () => {

    return (
    <footer className="footer">
        <div className="footer-content">

            <div className="footer-content__left">
                <div>
                    <a href="#" className="footer-link">What is Tech 2 Rent?</a>
                    <a href="#" className="footer-link">Missions and Values</a>
                    <a href="#" className="footer-link">Trust and Safety</a>
                    <a href="#" className="footer-link">Insurance</a>
                    <a href="#" className="footer-link">FAQ</a>
                    <a href="#" className="footer-link">Privacy Policy</a>
                    <a href="#" className="footer-link">Terms of Use</a>
                </div>

                <div>
                    Column 1
                </div>
            </div>

            <div className="footer-content__right">
                Column 2
            </div>
        </div>
    </footer>
    );
  };
  
export default Footer;