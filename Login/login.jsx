import React from 'react';
import './loginform.css';
import { useNavigate } from 'react-router-dom';

const LoginForm = () =>{
    
    const navigate = useNavigate()
       
    return(
        <div className='wrapper'>
            <form >
               <h1>Login</h1>
               <div className="input-box">
                <input type="text" placeholder='  Username' required/>
               </div> 

               <div className="input-box">
                <input type="password" placeholder='  Password' required/>
                </div>

               <div className="remember-forget">
                <label><input type="checkbox" /> Remember me </label>
                 <a> Forgot Password?</a> 
               </div>

               <button type="submit" onClick={() => navigate('/home')}>Login</button>
               <div className="register-link" onClick={() => navigate('/sign')}> 
                <p>Don't have an account? <a> Create An Account </a></p> 
               </div>
            </form>
        </div>
    );
};

export default LoginForm;
