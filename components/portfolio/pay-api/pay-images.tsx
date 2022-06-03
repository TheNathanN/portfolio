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
          alt='pay api form page for desktop'
        />
      </div>

      <div className='w-[75%] absolute top-[5%] left-[25%]'>
        <Image
          src='/assets/pay-pics/pay-desktop-main.png'
          layout='responsive'
          width='100vw'
          height='62vh'
          priority
          alt='pay api main page for desktop'
        />
      </div>

      <div className='w-[25%] absolute top-[62%] left-[5%]'>
        <Image
          src='/assets/pay-pics/pay-mobile-nav.png'
          layout='responsive'
          width='55vw'
          height='100vh'
          priority
          alt='pay api nav page for mobile'
        />
      </div>

      <div className='w-[25%] absolute top-[62%] left-[38%]'>
        <Image
          src='/assets/pay-pics/pay-mobile-plan.png'
          layout='responsive'
          width='55vw'
          height='100vh'
          priority
          alt='pay api plans page for mobile'
        />
      </div>

      <div className='w-[25%] absolute top-[62%] left-[72%]'>
        <Image
          src='/assets/pay-pics/pay-mobile-main.png'
          layout='responsive'
          width='55vw'
          height='100vh'
          priority
          alt='pay api main page for mobile'
        />
      </div>
    </>
  );
};

export default PayImages;
