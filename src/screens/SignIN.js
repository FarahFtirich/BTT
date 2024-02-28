import React from 'react'
import './SignIN.css'; 


const SignIN = () => {
    return (


<section className="container1" id="signInForm">
   <div className="signin">
    
     <div className="signin__form">
            <form>
               <input type="email" placeholder="Email" />
               <input type="password" placeholder="Password" />
               <button className='button' type="submit">Sign In</button>
            </form>
     </div>
  </div>
</section>




  );
};
export default SignIN;
