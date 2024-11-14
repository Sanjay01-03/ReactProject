
import React from 'react';
import './signup.css';
import { useNavigate } from 'react-router-dom';
const SignUpForm = () =>{
  const navigate = useNavigate()
     return( 
        <div className='wrapper'>
            <form action="">
               <h1>Sign Up</h1>
               <div className="input-box">
                <input type="text" placeholder='  Enter Your Email' required/>
               </div> 
               <div className="input-box">
                <input type="password" placeholder='  Create A Password' required/>
               </div>
               <div className="input-box">
                <input type="password" placeholder='  Confirm Your Password' required/>
               </div>
               <button type="submit" onClick={() => navigate('/login')}>Sign Up</button>

               <div className="register-link" onClick={() => navigate('/login')}> 
                 <p>Already have an account? <a>Login</a></p> 
               </div>
            </form>
        </div>
    
    ); 
};
export default SignUpForm;
