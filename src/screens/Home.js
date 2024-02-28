import React from 'react'
import CNavbar from '../components/Navbar';
import Footer from '../components/Footer';
import Body1 from '../components/Body1';
import SignIN from './SignIN.js';
import SignUP from './SignUP.js';
import "./home.css";
import Welcome from './Welcome.js';
import user1 from "../icons/user1.png";




export default function Home() {
  function signupfun(){
    document.getElementById("signindiv").style.display = "none";
    document.getElementById("signupdiv").style.display = "block";
  }
  function signinfun(){
    document.getElementById("signupdiv").style.display = "none";
    document.getElementById("signindiv").style.display = "block";
  }
  
  return (
    <>
    
     <div><CNavbar/></div>
     <div><Body1/></div>
     
     <div className='con'>       
     <div className='usericon'>
                   <img  className='user1'src={user1}/>
                   <h2>Account</h2>
                   
      </div>     
           
     <div class="forms">           
      <button id='signinb'onClick={signinfun} >SignIn</button>
      <button id='signupb' onClick={signupfun}>SignUp</button>
      </div>          
      <div id="signindiv"><SignIN/></div> 
      <div id="signupdiv"><SignUP/>/</div>
     
     <div><Welcome/></div>
     </div>
     <div><Footer/></div>
    </>
  )
}

