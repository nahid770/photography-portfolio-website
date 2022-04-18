import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import person from '../../../Image/person.png'
import './Header.css'

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () =>{
        
        signOut(auth)
    }
    return (
       <div className="header-container container ">
            <h2 className='text-dark'>NHD</h2>
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
         { user ? 
        <img onClick={handleSignOut} src={person} alt="" />
         :
        <div>
             <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
        </div> }
            
        </nav>
       </div>
    );
};

export default Header;