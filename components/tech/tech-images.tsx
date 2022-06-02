import React from 'react';
import Image from 'next/image';

const TechImages = () => {
  return (
    <>
      <div className='mb-8 mt-8'>
        <Image
          src='/assets/typescript-logo.png'
          height={60}
          width={60}
          alt='Typescript'
        />
      </div>

      <div className='mb-8'>
        <Image
          src='/assets/react-logo.png'
          height={60}
          width={65}
          alt='React JS'
        />
      </div>

      <div>
        <Image
          src='/assets/next-logo.png'
          height={70}
          width={70}
          alt='Next JS'
        />
      </div>
    </>
  );
};

export default TechImages;
