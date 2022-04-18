import React from 'react';
import img from '../../../Image/img1-removebg-preview.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container banner-container  '>
           <div>
           <h2 className='text-dark fw-bold banner-title  '>Travel the world and take <span className='text-success'>Photos</span></h2>
            <p className='fw-bold mt-4 text-center'>Photography is a way of feeling, of touching, of loving. What you have caught on film is captured forever… It remembers little things, long after you have forgotten everything</p>
            <button type="button" class="footer-btn">Hire Me</button>
           </div>
            <div><img src={img} alt="" /></div>
            </div>
           
       
        </div>
    );
};

export default Banner;