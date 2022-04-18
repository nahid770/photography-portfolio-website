import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css'
import github from '../../Image/github logo.png'
import google from '../../Image/google logo.png'

const Login = () => {
    return (
        <div className='login-form'>
            <form >
        <h2 className='mb-4 pt-3'>Please login</h2>
        <input type="email" name="email" id="" placeholder='email'/><br />
        <input type="password" name="password" id="" placeholder='password'/><br />
      <button className='footer-btn mt-4'>login</button>
      

            </form>
           <p className='mt-3'>Don't have an accout? <Link to='/register'>Create Account</Link></p>
            <Link to='/register'>Forget Password?</Link>

        <div className='option container'>

        <div className='first-div'></div>
        <div className='ps-3 pe-3'>or</div>
        <div className='last-div'></div>

        </div>
            <div className="social-login mt-3">
                
                <button className='footer-btn'> <img src={google} alt="" /> Google sign in</button><br />
                <button className='footer-btn mt-2'> <img src={github} alt="" /> Github sign in</button><br />
            </div>
        </div>
    );
};

export default Login;