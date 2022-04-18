import React from 'react';
import './Reviews.css'
import user1 from '../../../Image/Customer Review/user1.png'
import user2 from '../../../Image/Customer Review/user2.png'
import user3 from '../../../Image/Customer Review/user3.png'

const Reviews = () => {
    return (
       <div className='container review-container mt-5 mb-5'>
           <h2 className='mb-4 fs-1'>Look What My Client's Say</h2>
        <div className='customer-review d-flex '>

        <div className='text-start first-user mt-5 px-1 py-2 mb-3 ms-3'> 
            <img src={user1} alt="" />
            <p className='fw-bold text-center '>Cris Park</p>
            <p className='mt-3'>Many thanks for the photos, they are brilliant and better than I imagined. The whole team was brilliant to work with and your flexible approach and willingness was truly excellent. I am now proud that we have images that really stand out and showcase our products.</p>

        </div>
        <div className='ms-4 second-user px-1  mb-3 '>
        <img src={user2} alt="" />
        <p className='fw-bold'>Tom Hence</p>
        <p className='mt-3'>The photography has had a huge impact our brand and we're elated with the end results. The Photography Firm, have secured our business for the future, I would highly recommend them to all.</p>

        </div>
        <div className='ms-4 last-user px-1 py-2 mb-3'>
        <img src={user3} alt="" />
        <p className='fw-bold'>Jes boo</p>
        <p className='mt-3'>An excellent photography service! The whole team are extremely professional, reliable and pleasure to work with. Down to the initial phone call, their knowledge, to the photography and post production, their customer service was outstanding. </p>

        </div>

        </div>

       </div>
    );
};

export default Reviews;