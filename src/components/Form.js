import React from 'react';
import { useGlobalContext } from '../contextAPI/context';
import { PaystackButton } from 'react-paystack';

const Form = () => {
  const data = useGlobalContext();
  const {
    cart,
    name,
    handleName,
    email,
    handleEmail,
    handleSubmit,
    total,
    handleSummary,
    nameErr,
    emailErr,
  } = data;

  // paystack
  const publicKey = process.env.REACT_APP_TEST_KEY;
  const amount = total * 100;
  const componentProps = {
    email,
    amount,
    metadata: {
      name,
    },
    publicKey,
    text: 'Checkout',
    onSuccess: () => {
      handleSummary();
    },
    onClose: () => alert(`Wait! Don't leave ${name}:(`),
  };
  return (
    <form
      className={`${cart.length !== 0 ? 'cartForm show-cartform' : 'cartForm'}`}
      onSubmit={handleSubmit}
    >
      <div className='form-group center'>
        {/* form-control */}
        <div className='form-control fullname'>
          <label htmlFor='name'>
            Full Name <span>*</span>
          </label>
          <input
            type='text'
            className={`${nameErr ? 'name error' : 'name'}`}
            name='name'
            placeholder='John Doe'
            value={name}
            onChange={(e) => handleName(e)}
            autoComplete='off'
          />
        </div>
        {/* form control */}
        <div className='form-control email'>
          <label htmlFor='email'>
            Email <span>*</span>
          </label>
          <input
            type='email'
            className={`${emailErr ? 'email error' : 'email'}`}
            name='email'
            placeholder='Johndoe@email.com'
            value={email}
            onChange={(e) => handleEmail(e)}
            autoComplete='off'
          />
        </div>
        {/* checkout btn */}
        <PaystackButton className='checkout-btn' {...componentProps} />
      </div>
    </form>
  );
};

export default Form;