import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css'

const Footer = () => {
    return (
       
            <div className="footer d-flex align-items-center  ">
                  <h2 className='text-white fs-1'>Footer</h2>
           <div >
         
           <button className='footer-btn '>Hire Me</button>
           <p className='text-white mt-3'> Copyright &copy; Allright reserve Photography Portfolio</p>
           </div>

            <div>
             <nav className='nav'>
            <Link to="/">Home</Link>
            <Link to="/service">Service</Link>
            <Link to="/about">About</Link>
            <Link to="/blog">Blog</Link>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
            </nav>
           </div>
        
           
        </div>
        
      
    );
};

export default Footer;