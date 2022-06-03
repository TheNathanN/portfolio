import Image from 'next/image';
import React from 'react';

const CryptoImages = () => {
  return (
    <>
      <div className='w-[60%] absolute top-0 left-[10%]'>
        <Image
          src='/assets/crypto-pics/crypto-chart-desktop.png'
          layout='responsive'
          width='100vw'
          height='60vh'
          priority
        />
      </div>

      <div className='w-[60%] absolute top-[10%] left-[38%]'>
        <Image
          src='/assets/crypto-pics/crypto-main-desktop.png'
          layout='responsive'
          width='100vw'
          height='60vh'
          priority
        />
      </div>

      <div className='w-[17%] absolute top-[60%] left-[15%]'>
        <Image
          src='/assets/crypto-pics/crypto-main-mobile.png'
          layout='responsive'
          width='53vw'
          height='100vh'
          priority
        />
      </div>

      <div className='w-[17%] absolute top-[60%] left-[44%]'>
        <Image
          src='/assets/crypto-pics/crypto-chart-mobile.png'
          layout='responsive'
          width='53vw'
          height='100vh'
          priority
        />
      </div>

      <div className='w-[17%] absolute top-[60%] left-[72%]'>
        <Image
          src='/assets/crypto-pics/crypto-news-mobile.png'
          layout='responsive'
          width='53vw'
          height='100vh'
          priority
        />
      </div>
    </>
  );
};

export default CryptoImages;
