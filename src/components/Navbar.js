import React from 'react'
import './Navbar.css';
import linkedin from '../icons/linkedin.png';
import user from '../icons/user.png';
import logo from "../icons/logo.png";
import { useState, useEffect } from 'react';



  const CNavbar = () => {
    const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
  const handleResize = () => {
  setIsMobile(window.innerWidth <= 850); 
      };
  window.addEventListener('resize', handleResize);
  handleResize();
  return () => {
    window.removeEventListener('resize', handleResize);
  };
}, []); 
return (
  <div className={isMobile ? 'navbar-mobile' : 'navbar-desktop'}>
    {isMobile ? (
      <MobileNavbar />
    ) : (
      <DesktopNavbar />
    )}
  </div>
);
};

const DesktopNavbar = () => {
  return (
  <div>
    <div className="navbar1">
    <div className="right-section1">
      <ul className="nav-links1">
        <li><a href="#">NEWS</a></li>
        <li><a href="#">EVENTS</a></li>
        <li><a href="#">CONTACT US </a></li>
        <li><a href="#">OUR TEAM</a></li>
        <li><img href="#" className='linkedin' src={linkedin}></img></li>
      </ul>
    </div>
    </div>
  
    <div className="navbar">
    <div className="left-section">
      <img
        src={logo}
        alt="Logo"
        height="30"
        className="logo"
      />
    </div>
    <div className="right-section">
      <ul className="nav-links">
        <li><a href="#">Researchers & BTT Community +</a></li>
        <li><a href="#">Industry & Entrepreneurs +</a></li>
        <li><a href="#">About BTT +</a></li>
      </ul>
      <button className="btn">Submit Disclosure</button>
      <img href="#" className='user' src={user}></img>
    </div>
    </div>
    </div> 
  );
};
const MobileNavbar = () => {
  return (
    <div>
      <h1>hiii</h1>
    </div>
  );
};


export default CNavbar;
