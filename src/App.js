import React ,{useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import logo from "./icons/logo.png"
//import { Row } from 'react-bootstrap';
import user1 from "./icons/user1.png";
import linkedin from './icons/linkedin.png';
import user from './icons/user.png';
import { useSignup } from "./hooks/useSignup"



function App() {
  function signupfun(){
    document.getElementById("signindiv").style.display = "none";
    document.getElementById("signupdiv").style.display = "block";
    document.getElementById("signinb").style.borderBottom = "0px";
    document.getElementById("signupb").style.borderBottom = "9px solid #DF5F03";
  }
  function signinfun(){
    document.getElementById("signupdiv").style.display = "none";
    document.getElementById("signindiv").style.display = "block";
    document.getElementById("signupb").style.borderBottom = "0px";
    document.getElementById("signinb").style.borderBottom = "9px solid #DF5F03";
    
  }
  
  
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {signup, error, isLoading} = useSignup()
    const handleSubmit = async (e) => {
      e.preventDefault()
  
      await signup(email, password)
    }
  
    

    
    
      const handlelogin = async (e) => {
        e.preventDefault()
    
        console.log(email, password)
      }

  return (
    
    <div className="container-fluid">
      <header>
        <div className='top-nav'>
              <ul className="nav nav-pills justify-content-end">
                <li className="nav-item">
                  <a className="nav-link" href="#">NEWS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">EVENTS</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">CONTACT US</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">OUR TEAM </a>
                </li>
                <li>
                <img href="#" className='linkedin' src={linkedin}></img>
                </li>
            </ul>
        </div>


        <nav className="navbar navbar-expand-sm navbar-light">
          <img className="navbar-brand" href="#" src={logo}></img>
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="#">Researchers & BTT Community +</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Industry & Entrepreneurs +</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About +</a>
            </li>
          </ul>
          <button type="button" className='btn btn-warning disclo' >Submit Disclosure</button>
          <img href="#" className='user' src={user}></img>
        </nav>
      </header>
      <div className="row intro">
        <div className='col-md-12'>
            <h1>Lorem ipsum</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer vitae fringilla orci, vitae tincidunt odio. Nullam gravida, diam a interdum consequat, augue est ullamcorper lectus, sollicitudin dictum sem velit ac velit. </p>
        </div>
      </div>

      <div className='row log'>

        <div className='col-md-6 accleft'>

        <div className='row acchead '>
            <div className='col-md-1'>
              <img src={user1} className='user'></img>
            </div>
            <div className='col-md-11 account'>
              <h3>Account</h3>
            </div>
          </div>

          <div className='row accswitch'>
             <div className="forms">           
               <button type="button" className="btn btn-transparent" id='signinb' onClick={signinfun} >Sign In</button>
               <button type="button" className="btn btn-transparent" id='signupb' onClick={signupfun} >Sign Up</button>
             </div>
             <hr class="hr hr-blurry" />
          </div>
          
          <div className='row accform'>
            <div className="signinform" id='signindiv'>
                 <form className="signin__form" onSubmit={handlelogin}>
                  <div class="form-group">
                     <label for="email">E-Mail</label>
                     <input type="email" className='form-control' id="email" />
                  </div>
                  <div class="form-group">
                     <label for="password">Password</label>
                     <input type="password" className='form-control' id="password" />
                  </div>
                     <h3>Forgot your password?</h3>
                     <button className='form-control signin' type="submit" id="sub">Sign In</button>
                 </form>
            </div>





            <div className='signupform' id='signupdiv'>
               <form className="signin__form" onSubmit={handleSubmit}>
                  <div className='row'>
                    <div className='col-md-2'>
                      <div className="form-group">
                          <label for="gender">Gender</label>
                          <select class="form-control"  id="gender" name="gender">
                            <option></option>
                            <option value="female">female</option>
                            <option value="male">male</option>
                          </select>
                      </div>
                    </div>
                    <div className='col-md-5'>
                      <div className="form-group">
                        <label for="lastname">Last name</label>
                        <input type="text" class="form-control"  id="lastname"/>
                      </div>
                    </div>
                    <div className='col-md-5'>
                      <div className="form-group">
                        <label for="firstname">First name</label>
                        <input type="text"  class="form-control" id="firstname" />
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <label for="email">E-Mail</label>
                    <input type="email"  id="email" onChange={(e) => setEmail(e.target.value)} 
                      value={email}  class="form-control"/>
                  </div>
                  <div className="form-group">
                    <label for="password">Password</label>
                    <input type="password"  id="password" onChange={(e) => setPassword(e.target.value)} 
                    value={password} class="form-control" />
                  </div>
                  <div className="form-group">
                    <label for="confirm">Confirm password</label>
                    <input type="confirm password"  id="confirm" class="form-control"/>
                  </div>
                  <div className="form-group">
                    <label for="number">Contact number</label>
                    <input type="contact number "id="number" class="form-control"/>
                  </div>

                 <button disabled={isLoading} class="form-control signup">Sign up</button>
                 {error && <div className="error">{error}</div>}

               </form>
            </div>
          </div>


        </div>

      
        <div className='col-md-6 accr'>
          <h1 className='accrh'>Glad to see You! </h1>
          <p className='accrp'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </div>
 </div>
 <footer>
  <div className='row foot'>
    <div  className='row row1'>
      <div className='col-md-4 btt'>
        <img src={logo}></img>
      </div>
      <div className='col-md-4 links'>
          <h5>Researchers & BTT community</h5>
          <h5>About BTT</h5>
          <h5>News</h5>
      </div>
      <div className='col-md-4 links'>
         <h5>Our Team </h5>
         <h5>(216) 00-00000</h5>
         <h5>Contact us</h5>
      </div>
    </div> 
  </div>
  <div className='row'>
    <hr></hr>
    <div className="footer__copy links text-center ">
        &copy; {new Date().getFullYear()} BTT. All rights reserved.
      </div>
  </div>
 </footer>
       
       


 </div>
  

  
  );
}

export default App;
