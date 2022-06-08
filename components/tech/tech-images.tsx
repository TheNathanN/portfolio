import React from 'react';
import Image from 'next/image';

const TechImages = () => {
  return (
    <>
      <div className='relative w-[50px] h-[50px] lg:w-[60px] lg:h-[60px]'>
        <Image
          src='/assets/typescript-logo.png'
          layout='fill'
          objectFit='contain'
          alt='Typescript'
          priority
        />
      </div>

      <div className='relative w-[55px] h-[50px] lg:w-[65px] lg:h-[60px]'>
        <Image
          src='/assets/react-logo.png'
          layout='fill'
          objectFit='contain'
          alt='React JS'
          priority
        />
      </div>

      <div className='relative w-[60px] h-[60px] lg:w-[70px] lg:h-[70px]'>
        <Image
          src='/assets/next-logo.png'
          layout='fill'
          objectFit='contain'
          alt='Next JS'
          priority
        />
      </div>
    </>
  );
};

export default TechImages;
