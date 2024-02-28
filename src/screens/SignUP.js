import React from 'react'
import './home.css'; 


const SignUP = () => {
    return (

<section className="container1">
  <div className="signin">
    <div className="signin__form">
      <div className='ligne1'>
         <div className="input-group">
                 <label for="gender">Gender :</label><br/>
                   <select  id="gender" name="gender">
                      <option value="female">female</option>
                      <option value="male">male</option>
                   </select><br/>
         </div>
         <div className="input-group">
              <label htmlFor="name">name</label><br/>
                <input type="name"  id="name"/><br/>
         </div>
         <div className="input-group">
              <label htmlFor="firstname">First name</label><br/>
                <input type="firstname"  id="firstname" /><br/>
         </div>
      </div>
    
              <label htmlFor="email">E-Mail</label><br/>
                <input type="email"  id="email"/><br/>
              <label htmlFor="password">Password</label><br/>
                <input type="password"  id="password" /><br/>
              <label htmlFor="confirm">Confirm password</label><br/>
                <input type="confirm password"  id="confirm" /><br/>
              <label htmlFor="number">Contact number</label><br/>
                <input type="contact number "id="number"/><br/>

              <button type="submit">Sign up</button>
    </div>
     </div>
</section>
 );
};
export default SignUP;