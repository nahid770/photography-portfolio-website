import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css'
import github from '../../Image/github logo.png'
import google from '../../Image/google logo.png'
import { useSignInWithEmailAndPassword, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';



const Login = () => {

    const [email, setEmail] = useState('');
 const [password, setPassword] = useState('');

 const [
    signInWithEmailAndPassword,
    user,
    error,
  ] = useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const location = useLocation();


// google login
// const [signInWithGoogle, user, error] = useSignInWithGoogle(auth);
let errorELement;

if (error) {   
    errorELement= <p>Error: {error.message}</p>
  }
  if (user) {
    navigate('/home');
    return (
      <div>
      
      </div>
    );
  }

  const from = location.state?.from?.pathname || "/";

 const handleEmailBlur = event=>{
    setEmail(event.target.value);
}
const handlePasswordBlur = event=>{
    setPassword(event.target.value)
}

if(user){
    navigate(from,  { replace: true });
}

const handleFormSubmit =event =>{
    event.preventDefault();
    signInWithEmailAndPassword(email, password);

}
    return (
        <div className='login-form'>
            <form onSubmit={handleFormSubmit}>
        <h2 className='mb-4 pt-3'>Please login</h2>
        <input onBlur={handleEmailBlur} type="email" name="email" id="" placeholder='email' required/><br />
        <input onBlur={handlePasswordBlur} type="password" name="password" id="" placeholder='password' required/><br />
        <p style={{color:'red'}}>{error?.message}</p>
       <input type="submit" value="login" />
      

            </form>
           <p className='mt-3'>Don't have an accout? <Link to='/register'>Create Account</Link></p>
            <Link to='/register'>Forget Password?</Link>

        <div className='option container'>

        <div className='first-div'></div>
        <div className='ps-3 pe-3'>or</div>
        <div className='last-div'></div>

        </div>
        {errorELement}
            <div className="social-login mt-3">
                
                <button
                // onClick={()=> signInWithGoogle()}
                className='footer-btn'> <img src={google} alt="" /> Google sign in</button><br />
                {/* {errorELement} */}
                <button className='footer-btn mt-2'> <img src={github} alt="" /> Github sign in</button><br />
            </div>
        </div>
    );
};

export default Login;