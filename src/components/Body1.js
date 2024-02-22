import React from 'react'
import "./body1.css";
import { useState, useEffect } from 'react';
import home from "../images/home.png";


const Body1 = () => {
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
  <div className={isMobile ? 'body1-mobile' : 'body1-desktop'}>
    {isMobile ? (
      <Mobilebody1 />
    ) : (
      <Desktopbody1 />
    )}
  </div>
);
};

const Desktopbody1 = () => {
  return (
    <div className="home">
    <img src={home} alt="home" />
    <div className="overlay">
      <h1>Lorem ipsum</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae fringilla orci, vitae tincidunt odio. Nullam gravida, diam a interdum consequat, augue est ullamcorper lectus, sollicitudin dictum sem velit ac velit. </p>
    </div>
  </div>
  );
};
const Mobilebody1 = () => {
  return (
    <div>
      <h1>h1</h1>
    </div>
  );
};


export default Body1;
