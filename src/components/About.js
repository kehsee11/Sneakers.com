import React from 'react';

const About = () => {
  return (
    <section>
      <div className='about center'>
        <div className='about-content'>
          <p className='company'>SNEAKER COMPANY</p>
          <div className='content'>
            <h1>
              Fall Limited Edition <br /> Sneakers
            </h1>
            <p>
              These low profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they'll withstand anything
              the weather can offer.
            </p>
          </div>
          <div className='pricing'>
            <div className='discount-price'>
              <p>$125.00</p>
              <span>50%</span>
            </div>
            <div className='old-price'>
              <p>$250.00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
