import React from 'react'
import './SignUP.css'; 

const SignUP = () => {
    return (

<section className="container1">
   <div className="signin">
     <div className="signin__form">
         <div className='1ligne'>
                       <label for="gender">Gender :</label>
                 <select  id="gender" name="gender">
                    <option value="female">female</option>
                    <option value="male">male</option>
                 </select>
              <input type="name" placeholder="Last name" />
              <input type="firstname" placeholder="First name" />
        </div>
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="confirm password" placeholder="confirm Password" />
              <input type="contact number " placeholder="contact number" />
              <button type="submit">Sign up</button>
     </div>
  </div>
</section>




  );
};
export default SignUP;