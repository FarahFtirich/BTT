import React from 'react'
import './Navbar.css';
import linkedin from '../icons/linkedin.png';
import logo from './logo.png';


export default function CNavbar() {
  return (
  <div>
    <div className="navbar1">
    <div className="right-section1">
      <ul className="nav-links1">
        <li><a href="#">NEWS</a></li>
        <li><a href="#">EVENTS</a></li>
        <li><a href="#">CONTACT US </a></li>
        <li><a href="#">OUR TEAM</a></li>
        <li><img href="#" src={linkedin.png}></img></li>
      </ul>
    </div>
    </div>
    

    <div className="navbar">
    <div className="left-section">
      <img
        src={logo.png}
        alt="Logo"
        height="30"
        className="logo"
      />
    </div>
    <div className="right-section">
      <ul className="nav-links">
        <li><a href="#">Researchers & BTT Community +</a></li>
        <li><a href="#">Industry & Entrepreneurs +</a></li>
        <li><a href="#">About +</a></li>
      </ul>
      <button className="btn">Submit Disclosure</button>
    </div>
    </div>
    </div> 
  )
}