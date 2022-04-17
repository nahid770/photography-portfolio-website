import React from 'react';
import plan1 from '../../Image/services/plan1.jpg'
import plan2 from '../../Image/services/plan2.jpg'
import plan3 from '../../Image/services/plan3.jpg'

const Service = () => {
    return (
     <div className='service-card container '>
         <h2 className='fs-1 text-info mb-5'>Photography Pricing and Plans</h2>
         <div class="card-group">
  <div class="card">
    <img src={plan1} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title fw-bold fs-4">Basic Packeg</h5>
      <div>
      <p class="card-text">5k Stock Footage</p>
      <p class="card-text">2k Premium Image</p>
      <p class="card-text">1 Month Unlimited access</p>
      </div>
      <button className='footer-btn '>Buy Now</button>
    </div>
  </div>
  <div class="card ms-4">
    <img src={plan2} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
      <button className='footer-btn '>Buy Now</button>
    </div>
  </div>
  <div class="card ms-4">
    <img src={plan3} class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
      <button className='footer-btn '>Buy Now</button>
    </div>
  </div>
</div>
     </div>
    );
};

export default Service;