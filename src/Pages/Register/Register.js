import { Link, useNavigate } from 'react-router-dom';
import github from '../../Image/github logo.png'
import google from '../../Image/google logo.png'
import React, { useState } from 'react';
import { useCreateUserWithEmailAndPassword, useSendEmailVerification } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Register = () => {

    const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('');
const [confirmPassword, setconfirmPassword] = useState('');
const [error, setError] = useState('');
const navigate = useNavigate();
const [sendEmailVerification, sending] = useSendEmailVerification(auth);

const [
    createUserWithEmailAndPassword,
    user,
    loading,
    
  ] = useCreateUserWithEmailAndPassword(auth);



const handleNameBlur = event=>{
    setName(event.target.value);
}
const handleEmailBlur = event=>{
    setEmail(event.target.value);
}
const handlePasswordBlur = event=>{
    setPassword(event.target.value)
}
const handleConfirmPasswordBlur =event =>{
    setconfirmPassword(event.target.value);
}

if(user){
    navigate('/home');
}


const handleFormSubmit =event =>{
    event.preventDefault();
    if(password !== confirmPassword){
        setError('password did not match!')
        return;
    }
    if(password.length <6){
        setError('Password minimum 6 character!')
        return;

    }
    createUserWithEmailAndPassword(email, password);
}

    return (
        <div className='login-form'>
        <form onSubmit={handleFormSubmit} >
    <h2 className=' pt-2'>Please Register your account</h2>
    <input onBlur={handleNameBlur} type="text" name="name" id="" placeholder='name' required/><br />
    <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='email' required/><br />
    <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='password' required/><br />
    <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" placeholder='confirm-password' required/><br />
    <p style={{color:'red'}}>{error} </p>
    <input 
     onClick={async () => {
        await sendEmailVerification();
        alert('Sent email');
      }}
    
    type="submit" value="register" />
  
    <p className='mt-3'>Already have accout? <Link to='/login'>Login</Link></p>
        </form>
        <div className='option container'>

        <div className='first-div'></div>
        <div className='ps-3 pe-3'>or</div>
        <div className='last-div'></div>

        </div>

        <button className='footer-btn'> <img src={google} alt="" /> Google sign up</button><br />
               <br />
    </div>
    );
};

export default Register;