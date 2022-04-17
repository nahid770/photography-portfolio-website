import React, { useEffect, useState } from 'react';
import Photos from '../Photos/Photos';

const Gallery = () => {
    const [gallerys, setGallerys] = useState([]);

    useEffect( ()=>{
        fetch('services.json')
        .then(res=> res.json())
        .then(data=> setGallerys(data));
    }, [])
    return (
        <div>
          
            <h2 className='fw-bold mb-4 text-success fs-1'>Gallery </h2>

            <div className="gallery-container">
            {
                gallerys.map(gallery=> <Photos
                key={gallery.id}
                gallery={gallery}
                
                ></Photos>)
            }
            </div>

        </div>
    );
};

export default Gallery;