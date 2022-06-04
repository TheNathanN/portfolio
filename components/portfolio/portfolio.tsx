import React from 'react';
import CryptoTracker from './crypto-tracker/crypto-tracker';
import LofiRadio from './lofi-radio/lofi-radio';
import PayApi from './pay-api/pay-api';
import PomodoroTimer from './pomodoro-timer/pomodoro-timer';

const Portfolio = () => {
  return (
    <>
      <h2 className='font-bold text-5xl mt-32 mb-28 lg:text-6xl lg:mt-28 lg:mb-32 text-center'>
        Portfolio
      </h2>

      <div className='relative flex flex-col max-w-xs mb-24 md:max-w-none md:justify-between md:flex-row lg:mb-36'>
        <CryptoTracker />
      </div>

      <div className='relative flex flex-col max-w-xs mb-24 md:max-w-none md:mb-52 md:justify-between md:flex-row lg:mb-64'>
        <LofiRadio />
      </div>

      <div className='relative flex flex-col max-w-xs mb-24 md:max-w-none md:mb-32 md:justify-between md:flex-row lg:mb-44'>
        <PayApi />
      </div>

      <div className='relative flex flex-col max-w-xs mb-24 md:max-w-none md:mb-48 md:justify-between md:flex-row lg:mb-60'>
        <PomodoroTimer />
      </div>
    </>
  );
};

export default Portfolio;
