import Image from 'next/image';
import React from 'react';

const LofiImages = () => {
  return (
    <>
      <div className='absolute w-[60%] left-0 top-0'>
        <Image
          src='/assets/lofi-pics/lofi-main-desktop.png'
          layout='responsive'
          width='100vw'
          height='70vh'
          priority
        />
      </div>

      <div className='absolute w-[40%] left-[30%] top-[5%]'>
        <Image
          src='/assets/lofi-pics/lofi-main-tablet.png'
          layout='responsive'
          width='67vw'
          height='73vh'
          priority
        />
      </div>

      <div className='absolute w-[22%] left-[58%] top-[13%]'>
        <Image
          src='/assets/lofi-pics/lofi-main-mobile.png'
          layout='responsive'
          width='55vw'
          height='100vh'
          priority
        />
      </div>

      <div className='absolute w-[68%] left-0 top-[80%]'>
        <Image
          src='/assets/lofi-pics/lofi-player-desktop.png'
          layout='responsive'
          width='100vw'
          height='60vh'
          priority
        />
      </div>

      <div className='absolute w-[22%] left-[60%] top-[90%]'>
        <Image
          src='/assets/lofi-pics/lofi-player-mobile.png'
          layout='responsive'
          width='57vw'
          height='100vh'
          priority
        />
      </div>
    </>
  );
};

export default LofiImages;
