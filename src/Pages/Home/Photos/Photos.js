import React from 'react';
import './photos.css'

const Photos = ({gallery}) => {
    const {name, image} = gallery;
    return (
        <div >
            <img className='gallery-img container' src={image} alt="" />
            <h2>{name}</h2>
        </div>
    );
};

export default Photos;