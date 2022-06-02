import Image from 'next/image';
import React from 'react';

const CryptoImages = () => {
  return (
    <>
      <div className='w-[21em] absolute top-[0em] left-[4em]'>
        <Image
          src='/assets/crypto-pics/crypto-chart-desktop.png'
          layout='responsive'
          width='100vw'
          height='60vh'
        />
      </div>

      <div className='w-[21em] absolute top-[3.2em] left-[14.7em]'>
        <Image
          src='/assets/crypto-pics/crypto-main-desktop.png'
          layout='responsive'
          width='100vw'
          height='60vh'
        />
      </div>

      <div className='w-[6em] absolute top-[17em] left-[6em]'>
        <Image
          src='/assets/crypto-pics/crypto-main-mobile.png'
          layout='responsive'
          width='51vw'
          height='100vh'
        />
      </div>

      <div className='w-[6em] absolute top-[17em] left-[16em]'>
        <Image
          src='/assets/crypto-pics/crypto-chart-mobile.png'
          layout='responsive'
          width='51vw'
          height='100vh'
        />
      </div>

      <div className='w-[6em] absolute top-[17em] left-[26em]'>
        <Image
          src='/assets/crypto-pics/crypto-news-mobile.png'
          layout='responsive'
          width='51vw'
          height='100vh'
        />
      </div>
    </>
  );
};

export default CryptoImages;
