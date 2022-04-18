import React from 'react';
import './Service.css'
import plan1 from '../../Image/services/plan1.jpg'
import plan2 from '../../Image/services/plan2.jpg'
import plan3 from '../../Image/services/plan3.jpg'
import { Link } from 'react-router-dom';

const handleClick =()=>{
  <Link to="service"></Link>
  console.log('clicked')
}

const Service = () => {
    return (
     <div className='service-card container '>
         <h2 className='fs-1 text-primary mb-5'>My Service Plans</h2>
         <div className="card-group">
  <div className="card">
    <img src={plan1} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title fw-bold fs-4">Basic Pack</h5>
      <div className='text-start  '>
      <p className="card-text">5k Stock Footage</p>
      <p className="card-text">2k Premium Image</p>
      <p className="card-text">1 Month Unlimited access</p>
      <p >Only <span className='text-primary fs-3'>$99</span><small className='text-muted'>/mo</small></p>
      </div>
      <button onClick={handleClick} className='footer-btn '>Buy Now</button>
    </div>
  </div>
  <div className="card ms-4">
    <img src={plan2} className="card-img-top" alt="..."/>
    <div className="card-body ">
      <h5 className="card-title fs-4 fw-bold">Premium Pack</h5>
     <div className='text-start mb-3 '>
     <p className="card-text">10k Stock Footage</p>
      <p className="card-text">5k Premium Image</p>
      <p className="card-text">6 Month Unlimited access</p>
      <p >Only <span className='text-primary fs-3'>$199</span><small className='text-muted'>/mo</small></p>
     </div>
      <button onClick={handleClick} className='footer-btn '>Buy Now</button>
    </div>
  </div>
  <div className="card ms-4">
    <img src={plan3} className="card-img-top" alt="..."/>
    <div className="card-body">
      <h5 className="card-title fs-4 fw-bold">Business Pack</h5>
     <div className='text-start mb-3 '>
     <p className="card-text">50k Stock Footage</p>
      <p className="card-text">20k Premium Image</p>
      <p className="card-text">Unlimited access</p>
      <p >Only <span className='text-primary fs-3'>$499</span><small className='text-muted'>/mo</small></p>
     </div>
      <button onClick={handleClick} className='footer-btn '>Buy Now</button>
    </div>
  </div>
</div>
     </div>
    );
};

export default Service;