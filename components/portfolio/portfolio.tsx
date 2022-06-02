import React from 'react';
import CryptoTracker from './crypto-tracker/crypto-tracker';
import LofiRadio from './lofi-radio/lofi-radio';

const Portfolio = () => {
  return (
    <>
      <h2 className='font-bold text-6xl mt-40 mb-28 text-center'>Portfolio</h2>

      <div className='flex justify-between mb-36'>
        <CryptoTracker />
      </div>

      <div className='flex justify-between mb-56'>
        <LofiRadio />
      </div>
    </>
  );
};

export default Portfolio;
