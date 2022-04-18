import React from 'react';
import './Service.css'
import plan1 from '../../Image/services/plan1.jpg'
import plan2 from '../../Image/services/plan2.jpg'
import plan3 from '../../Image/services/plan3.jpg'

const Service = () => {
    return (
     <div className='service-card container '>
         <h2 className='fs-1 text-info mb-5'>My Services Plans</h2>
         <div class="card-group">
  <div class="card">
    <img src={plan1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title fw-bold fs-4">Basic Pack</h5>
      <div className='text-start  '>
      <p class="card-text">5k Stock Footage</p>
      <p class="card-text">2k Premium Image</p>
      <p class="card-text">1 Month Unlimited access</p>
      <p >Only <span className='text-primary fs-3'>$99</span><small className='text-muted'>/mo</small></p>
      </div>
      <button className='footer-btn '>Buy Now</button>
    </div>
  </div>
  <div class="card ms-4">
    <img src={plan2} class="card-img-top" alt="..."/>
    <div class="card-body ">
      <h5 class="card-title fs-4 fw-bold">Premium Pack</h5>
     <div className='text-start mb-3 '>
     <p class="card-text">10k Stock Footage</p>
      <p class="card-text">5k Premium Image</p>
      <p class="card-text">6 Month Unlimited access</p>
      <p >Only <span className='text-primary fs-3'>$199</span><small className='text-muted'>/mo</small></p>
     </div>
      <button className='footer-btn '>Buy Now</button>
    </div>
  </div>
  <div class="card ms-4">
    <img src={plan3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title fs-4 fw-bold">Business Pack</h5>
     <div className='text-start mb-3 '>
     <p class="card-text">50k Stock Footage</p>
      <p class="card-text">20k Premium Image</p>
      <p class="card-text">Unlimited access</p>
      <p >Only <span className='text-primary fs-3'>$499</span><small className='text-muted'>/mo</small></p>
     </div>
      <button className='footer-btn '>Buy Now</button>
    </div>
  </div>
</div>
     </div>
    );
};

export default Service;