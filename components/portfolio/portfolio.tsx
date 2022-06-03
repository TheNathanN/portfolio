import React from 'react';
import CryptoTracker from './crypto-tracker/crypto-tracker';
import LofiRadio from './lofi-radio/lofi-radio';
import PayApi from './pay-api/pay-api';
import PomodoroTimer from './pomodoro-timer/pomodoro-timer';

const Portfolio = () => {
  return (
    <>
      <h2 className='font-bold text-5xl mt-20 mb-24 lg:text-6xl lg:mt-28 lg:mb-32 text-center'>
        Portfolio
      </h2>

      <div className='flex justify-between mb-24 lg:mb-36'>
        <CryptoTracker />
      </div>

      <div className='flex justify-between mb-52 lg:mb-64'>
        <LofiRadio />
      </div>

      <div className='flex justify-between mb-32 lg:mb-44'>
        <PayApi />
      </div>

      <div className='flex justify-between mb-48 lg:mb-60'>
        <PomodoroTimer />
      </div>
    </>
  );
};

export default Portfolio;
