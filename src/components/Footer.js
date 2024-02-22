import React from 'react';
import './Footer.css'; 
import logo from "../icons/logo.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className='links'>
      <div className="footer__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className='links2'>
      <div className="footer__links">
        <ul>
          <li><a href="#">Researchers & BTT community</a></li><br/>
          <li><a href="#">About BTT</a></li><br/>
          <li><a href="#">News</a></li>
        </ul>
      </div>
      <div className="footer__links">
        <ul>
          <li><a href="#">Our Team </a></li><br/>
          <li><a href="#">(216) 00-00000</a></li><br/>
          <li><a href="#">Contact us </a></li>
        </ul>
      </div>
      </div>
      </div>

      <hr className="footer__line" />
      <div className="footer__copy">
        &copy; {new Date().getFullYear()} BTT. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
