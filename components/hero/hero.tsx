import React from 'react';
import FloorSVG from '../svg-components/floor';

import HeroSVG from './hero-svg';

const Hero = () => {
  return (
    <>
      <div className='w-1/2 pr-12 flex flex-col top-52 relative '>
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

      <div className='w-full absolute bottom-0 max-w-7xl '>
        <FloorSVG />
      </div>
    </>
  );
};

export default Hero;
