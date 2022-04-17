import React from 'react';
import './photos.css'

const Photos = ({gallery}) => {
    const {name, image} = gallery;
    return (
        <div >
            <img className='gallery-img container' src={image} alt="" />
           <p className='fs-4'>{name}</p>
        </div> 
    );
};

export default Photos;