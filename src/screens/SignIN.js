import React from 'react'
import './home.css'; 



const SignIN = () => {
    return (


<section className="container1" id="signInForm">
   <div className="signin">
    
     <div className="signin__form">
     <form>
          <label htmlFor="email">E-Mail</label><br/>
          <input type="email"  id="email" /><br/>
          <label htmlFor="password">Password</label><br/>
          <input type="password" id="password" />
          <h3>Forgot your password?</h3>
          <button className='button' type="submit" id="sub">Sign In</button>
</form>
     </div>
  </div>
</section>
);
};
export default SignIN;
