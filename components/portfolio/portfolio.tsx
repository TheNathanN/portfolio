import React from 'react';
import CryptoTracker from './crypto-tracker/crypto-tracker';
import LofiRadio from './lofi-radio/lofi-radio';
import PayApi from './pay-api/pay-api';
import PomodoroTimer from './pomodoro-timer/pomodoro-timer';

const Portfolio = () => {
  return (
    <>
      <h2 className='font-bold text-6xl mt-40 mb-28 text-center'>Portfolio</h2>

      <div className='flex justify-between mb-36'>
        <CryptoTracker />
      </div>

      <div className='flex justify-between mb-64'>
        <LofiRadio />
      </div>

      <div className='flex justify-between mb-44'>
        <PayApi />
      </div>

      <div className='flex justify-between mb-60'>
        <PomodoroTimer />
      </div>
    </>
  );
};

export default Portfolio;
