import React from 'react';
import img from '../../../Image/img1-removebg-preview.png'
import './Banner.css'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='container banner-container  '>
           <div>
           <h2 className='text-dark fw-bold banner-title  '>Travel the world and take <span className='text-success'>Photos</span></h2>
            <p className='fw-bold mt-4'>It's no wonder that photography quotes are one of the most popular things to share on social media, usually by other photographers, of course.</p>
            <button type="button" class="btn btn-secondary">Secondary</button>
           </div>
            <div><img src={img} alt="" /></div>
            </div>
           
       
        </div>
    );
};

export default Banner;