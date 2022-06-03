import Image from 'next/image';
import React from 'react';

const PayImages = () => {
  return (
    <>
      <div className='w-[75%] absolute top-0 left-0'>
        <Image
          src='/assets/pay-pics/pay-desktop-form.png'
          layout='responsive'
          width='100vw'
          height='62vh'
          priority
        />
      </div>

      <div className='w-[75%] absolute top-[5%] left-[25%]'>
        <Image
          src='/assets/pay-pics/pay-desktop-main.png'
          layout='responsive'
          width='100vw'
          height='62vh'
          priority
        />
      </div>

      <div className='w-[25%] absolute top-[62%] left-[5%]'>
        <Image
          src='/assets/pay-pics/pay-mobile-nav.png'
          layout='responsive'
          width='55vw'
          height='100vh'
          priority
        />
      </div>

      <div className='w-[25%] absolute top-[62%] left-[38%]'>
        <Image
          src='/assets/pay-pics/pay-mobile-plan.png'
          layout='responsive'
          width='55vw'
          height='100vh'
          priority
        />
      </div>

      <div className='w-[25%] absolute top-[62%] left-[72%]'>
        <Image
          src='/assets/pay-pics/pay-mobile-main.png'
          layout='responsive'
          width='55vw'
          height='100vh'
          priority
        />
      </div>
    </>
  );
};

export default PayImages;
