import React from 'react';
import { useState } from 'react';
import { format } from 'date-fns';
import Thankyou from './Thankyou';

const Creditcard = () => {
  const [name, setName] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cvc, setCvc] = useState('');
  const [date, setDate] = useState('01/24');
  const [error, setError] = useState(false);
  const compeleted = document.querySelector('.thank');
  const form = document.querySelector('form');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.length == 0 || cardNumber.length == 0 || cvc.length == 0) {
      setError(true);
    }
    if (name.trim() === '' || cardNumber.trim() === '' || cvc.trim() === '') {
      setError(true);
    } else {
      compeleted.classList.remove('hidden');
      form.classList.add('hidden');
    }
  };
  return (
    <div className='container'>
      <div className='left-section'>
        <div className='cards'>
          <div className='front-card'>
            <img src='../images/bg-card-front.png' alt='front' />
            <div className='card-container'>
              <img className='logo ' src='../images/card-logo.svg' alt='logo' />
              <h1 id='number'> {cardNumber}</h1>
              <div className='card-info'>
                <span id='name'>{name}</span>
                <span id='date'>{format(new Date(date), 'MM/yy')}</span>
              </div>
            </div>
          </div>
          <div className='back-card'>
            <img src='../images/bg-card-back.png' alt='back' />
            <span id='cvc'>{cvc}</span>
          </div>
        </div>
      </div>
      <div className='right-section'>
        <form onSubmit={handleSubmit}>
          <div className='grid-1'>
            <label htmlFor='card_name'>CardholderName</label>
            <input
              type='text'
              placeholder='e.g Jane Appleased'
              name='card_name'
              id='card_name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {error && name.length <= 0 ? <span>Name can't be Empty</span> : ''}
          </div>
          <div className='grid-2'>
            <label htmlFor='card_number'>Card Number</label>
            <input
              type='text'
              placeholder='e.g 1234 5678 9123 0000'
              id='card_number'
              name='card_number'
              maxLength={19}
              value={cardNumber
                .replace(/\s/g, '')
                .replace(/(\d{4})/g, '$1 ')
                .trim()}
              onChange={(e) => setCardNumber(e.target.value)}
            />
            {error && cardNumber.length <= 0 ? (
              <span>Card Number can't be Empty</span>
            ) : (
              ''
            )}
          </div>
          <div className='card-information'>
            <div id='card-date'>
              <label htmlFor='expiry_date'>Exp. Date (MM/YY)</label>
              <input
                type='month'
                name='expiry_date'
                id='expiry_date'
                placeholder='MM YY'
                value={date}
                onChange={(e) => setDate(e.target.value)}
              />
            </div>
            <div className='grid-4'>
              <label htmlFor='card-cvc'>CVC</label>
              <input
                type='text'
                placeholder='e.g 123'
                id='card-cvc'
                name='card-cvc'
                maxLength={3}
                value={cvc}
                onChange={(e) => setCvc(e.target.value)}
              />
              {error && cvc.length <= 0 ? (
                <span>CVV Number can't be Empty</span>
              ) : (
                ''
              )}
            </div>
          </div>
          <button id='submit-btn' type='submit'>
            Confirm
          </button>
        </form>
        <Thankyou />
      </div>
    </div>
  );
};

export default Creditcard;
