import React from 'react';
import ICON_DELETE from '../images/icon-delete.svg';
import { useGlobalContext } from '../contextAPI/context';

const CartItems = ({ id, title, image, price, amount }) => {
  const { remove } = useGlobalContext();

  return (
    <>
      <div className='cart-items center'>
        <div className='item'>
          <div className='item-info'>
            <img src={image} alt='sneakers' width='46px' height='46px' />

            <div className='product-info'>
              <p>{title}</p>
              <span className='price'>${price} X</span>
              <span className='qty'>{amount}</span>
              <span className='total'>${price * amount}.00</span>
            </div>
          </div>
          <button>
            <img
              src={ICON_DELETE}
              alt='icon delete'
              onClick={() => remove(id)}
            />
          </button>
        </div>
      </div>
    </>
  );
};

export default CartItems;
