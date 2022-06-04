import Image from 'next/image';
import React from 'react';

const CryptoImages = () => {
  return (
    <>
      <div className='absolute md:w-[60%] md:left-[10%]'>
        <Image
          src='/assets/crypto-pics/crypto-chart-desktop.png'
          layout='responsive'
          width='100vw'
          height='60vh'
          priority
          alt='crypto tracker chart for desktop'
        />
      </div>

      <div className='absolute w-[14em] -top-[1.9em] left-[.5em] md:w-[60%] md:top-[10%] md:left-[38%]'>
        <Image
          src='/assets/crypto-pics/crypto-main-desktop.png'
          layout='responsive'
          width='100vw'
          height='60vh'
          priority
          alt='crypto tracker main page for desktop'
        />
      </div>

      <div className='absolute md:left-[15%] md:w-[17%] md:top-[60%]'>
        <Image
          src='/assets/crypto-pics/crypto-main-mobile.png'
          layout='responsive'
          width='53vw'
          height='100vh'
          priority
          alt='crypto tracker main page for mobile'
        />
      </div>

      <div className='absolute left-[69%] w-[5em] -top-2 md:left-[44%] md:w-[17%] md:top-[60%]'>
        <Image
          src='/assets/crypto-pics/crypto-chart-mobile.png'
          layout='responsive'
          width='53vw'
          height='100vh'
          priority
          alt='crypto tracker chart for mobile'
        />
      </div>

      <div className='absolute md:left-[72%] md:w-[17%] md:top-[60%]'>
        <Image
          src='/assets/crypto-pics/crypto-news-mobile.png'
          layout='responsive'
          width='53vw'
          height='100vh'
          priority
          alt='crypto tracker news page for mobile'
        />
      </div>
    </>
  );
};

export default CryptoImages;
