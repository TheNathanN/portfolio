import React from 'react';

import HeroSVG from './hero-svg';

const Hero = () => {
  return (
    <header className='flex top-16 px-12 justify-center items-center h-[40em]  '>
      <div className='w-1/2 pr-12 '>
        <h1 className='font-bold text-7xl mb-9 '>
          Nathan
          <br /> Nicholson
        </h1>
        <p className='text-2xl font-light '>
          A certified web developer who loves to learn and create enjoyable
          experiences on the internet!
        </p>
      </div>
      <div className='w-1/2 relative h-full '>
        <HeroSVG />
      </div>
    </header>
  );
};

export default Hero;
