import React from 'react';
import { Link } from 'react-router-dom';
import github from '../../Image/github logo.png'
import google from '../../Image/google logo.png'

const Register = () => {
    return (
        <div className='login-form'>
        <form >
    <h2 className=' pt-2'>Please Register your account</h2>
    <input type="text" name="name" id="" placeholder='name'/><br />
    <input type="email" name="email" id="" placeholder='email'/><br />
    <input type="password" name="password" id="" placeholder='password'/><br />
    <input type="password" name="confirm-password" id="" placeholder='confirm-password'/><br />
    <button className='footer-btn mt-2'>register</button>
  
    <p className='mt-3'>Already have accout? <Link to='/login'>Login</Link></p>
        </form>
        <div className='option container'>

        <div className='first-div'></div>
        <div className='ps-3 pe-3'>or</div>
        <div className='last-div'></div>

        </div>

        <button className='footer-btn'> <img src={google} alt="" /> Google sign up</button><br />
                <button className='footer-btn mt-2'> <img src={github} alt="" /> Github sign up</button><br />
    </div>
    );
};

export default Register;