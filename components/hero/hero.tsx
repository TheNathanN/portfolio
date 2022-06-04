import React from 'react';
import ManSitting from '../svg/man-sitting';

const Hero = () => {
  return (
    <>
      <div className='pr-12 flex flex-col ml-4 mt-32 md:w-[47%] md:mt-40 md:ml-16 lg:w-5/12 lg:mt-52'>
        <h1 className='font-bold text-6xl mb-5 lg:text-7xl lg:mb-9'>
          Nathan
          <br /> Nicholson
        </h1>
        <p className='font-light leading-relaxed text-xl lg:text-2xl'>
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
