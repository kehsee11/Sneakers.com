import React from 'react';
import ICON_PLUS from '../images/icon-plus.svg';
import ICON_MINUS from '../images/icon-minus.svg';
import ICON_CART from '../images/icon-cart-w.svg';
import ICON_CLOSE_CART from '../images/icon-close-cart.svg';
import CartItems from './CartItems';
import Form from './Form';
import { useGlobalContext } from '../contextAPI/context';

const Cart = () => {
  const data = useGlobalContext();
  const {
    cart,
    showCart,
    AddToCart,
    handleCloseCart,
    productsData,
    amount,
    increase,
    decrease,
  } = data;

  return (
    <>
      <div className='cart-section'>
        <div className='addtocart center'>
          {productsData.map((productID) => {
            const { id } = productID;
            return (
              <div className='item-qty-group' key={id}>
                <div className='qty-group'>
                  <button
                    className='qty-btn decrease'
                    onClick={() => decrease(id)}
                  >
                    <img src={ICON_MINUS} alt='icon minus' />
                  </button>
                  <p className='qty-num'>{amount}</p>
                  <button
                    className='qty-btn increase'
                    onClick={() => increase(id)}
                  >
                    <img src={ICON_PLUS} alt='icon plus' />
                  </button>
                </div>
                <div className='addtocart-wrapper'>
                  <button
                    className='addtocart-btn'
                    key={id}
                    onClick={() => AddToCart(id)}
                  >
                    <img src={ICON_CART} alt='icon cart' />
                    Add to cart
                  </button>
                </div>
              </div>
            );
          })}
        </div>
        {/* cart modal */}
        <div className='cart-modal'>
          <div className={`${showCart ? 'cart show-cart center' : 'cart'}`}>
            <div className='cart-header center'>
              <p>Cart</p>
              <button
                className='close-cart'
                onClick={() => {
                  handleCloseCart();
                }}
              >
                <img src={ICON_CLOSE_CART} alt='icon close' />
              </button>
            </div>
            {cart.length === 0 ? (
              <div className='empty-cart'>
                <p>Your cart is empty</p>
              </div>
            ) : (
              cart.map((product, index) => {
                return <CartItems {...product} key={index} />;
              })
            )}
            {/* form */}
            <Form />
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
