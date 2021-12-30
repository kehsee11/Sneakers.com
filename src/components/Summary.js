import React from 'react';
import CHECK from '../images/check.svg';
import CHECK_DARK from '../images/check-dark.svg';
import { useGlobalContext } from '../contextAPI/context';

const Summary = () => {
  const data = useGlobalContext();
  const { name, cart, summary, theme, reset } = data;
  return (
    <>
      {summary
        ? cart.map((item) => {
            const { id, title, amount } = item;
            return (
              <article className='summary' key={id}>
                <div className='summary-content'>
                  <h3>
                    Thank You <span> {name}, </span> Your Order Has Been
                    Received
                  </h3>
                  <div className='summary-icon'>
                    {theme === 'light' ? (
                      <img src={CHECK} alt='icon check' className='checkicon' />
                    ) : (
                      <img
                        src={CHECK_DARK}
                        alt='icon check'
                        className='checkicon darkcheck'
                      />
                    )}
                  </div>
                  <p className='summary-text'>Summary</p>
                  <div className='summary-table'>
                    <div className='table-col col-1'>
                      <h4>S/N</h4>
                      <p>1</p>
                    </div>
                    <div className='table-col col-2'>
                      <h4>Item</h4>
                      <p>{title.slice(0, 20)}...</p>
                    </div>
                    <div className='table-col col-3'>
                      <h4>Qty</h4>
                      <p>{amount}</p>
                    </div>
                  </div>
                  <button className='summary-btn' onClick={() => reset()}>
                    Ok
                  </button>
                </div>
              </article>
            );
          })
        : null}
    </>
  );
};

export default Summary;
