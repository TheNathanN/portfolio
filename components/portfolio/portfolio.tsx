import React from 'react';
import CryptoTracker from './crypto-tracker/crypto-tracker';
import LofiRadio from './lofi-radio/lofi-radio';
import PayApi from './pay-api/pay-api';
import PomodoroTimer from './pomodoro-timer/pomodoro-timer';

const Portfolio = () => {
  return (
    <>
      <h2 className='font-bold text-5xl mt-28 mb-14 lg:text-6xl lg:mt-28 lg:mb-32 text-center'>
        Portfolio
      </h2>

      <div className='flex flex-col mb-24 md:justify-between md:flex-row lg:mb-36'>
        <CryptoTracker />
      </div>

      <div className='flex flex-col mb-24 md:mb-52 md:justify-between md:flex-row lg:mb-64'>
        <LofiRadio />
      </div>

      <div className='flex flex-col mb-24 md:mb-32 md:justify-between md:flex-row lg:mb-44'>
        <PayApi />
      </div>

      <div className='flex flex-col mb-24 md:mb-48 md:justify-between md:flex-row lg:mb-60'>
        <PomodoroTimer />
      </div>
    </>
  );
};

export default Portfolio;
