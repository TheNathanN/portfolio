import Image from 'next/image';
import React from 'react';

const PayImages = () => {
  return (
    <>
      <div className='w-[22em] absolute top-[0em] left-[0em]'>
        <Image
          src='/assets/pay-pics/pay-desktop-form.png'
          layout='responsive'
          width='100vw'
          height='62vh'
        />
      </div>

      <div className='w-[22em] absolute top-[2em] left-[8em]'>
        <Image
          src='/assets/pay-pics/pay-desktop-main.png'
          layout='responsive'
          width='100vw'
          height='62vh'
        />
      </div>

      <div className='w-[7em] absolute top-[18em] left-[1em]'>
        <Image
          src='/assets/pay-pics/pay-mobile-nav.png'
          layout='responsive'
          width='55vw'
          height='100vh'
        />
      </div>

      <div className='w-[7em] absolute top-[18em] left-[11em]'>
        <Image
          src='/assets/pay-pics/pay-mobile-plan.png'
          layout='responsive'
          width='55vw'
          height='100vh'
        />
      </div>

      <div className='w-[7em] absolute top-[18em] left-[21em]'>
        <Image
          src='/assets/pay-pics/pay-mobile-main.png'
          layout='responsive'
          width='55vw'
          height='100vh'
        />
      </div>
    </>
  );
};

export default PayImages;
