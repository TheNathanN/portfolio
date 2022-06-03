import React from 'react';
import ManSitting from '../svg/man-sitting';

const Hero = () => {
  return (
    <>
      <div className='w-5/12 pr-12 flex flex-col mt-52 ml-16'>
        <h1 className='font-bold text-7xl mb-9'>
          Nathan
          <br /> Nicholson
        </h1>
        <p className='text-2xl font-light leading-relaxed'>
          A certified web developer, who has an eye for design, loves to learn,
          and loves to create enjoyable experiences on the internet!
        </p>
      </div>

      <div className='w-full absolute bottom-0 max-w-7xl'>
        <ManSitting />
      </div>
    </>
  );
};

export default Hero;
