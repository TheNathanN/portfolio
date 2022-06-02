import React from 'react';
import CryptoTracker from './crypto-tracker/crypto-tracker';

const Portfolio = () => {
  return (
    <>
      <h2 className='font-bold text-6xl mt-40 mb-28 text-center'>Portfolio</h2>

      <div className='flex flex-col mb-10'>
        <CryptoTracker />
      </div>
    </>
  );
};

export default Portfolio;
