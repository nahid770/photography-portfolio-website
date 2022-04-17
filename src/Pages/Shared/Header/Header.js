import React from 'react';
import { Link } from 'react-router-dom';

import './Header.css'

const Header = () => {
    return (
       <div className="header-container container ">
            <h2 className='text-dark'>NHD</h2>
        <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            
        </nav>
       </div>
    );
};

export default Header;