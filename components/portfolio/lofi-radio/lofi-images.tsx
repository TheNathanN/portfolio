import Image from 'next/image';
import React from 'react';

const LofiImages = () => {
  return (
    <>
      <div className='absolute w-[18em] left-[0em] top-[0em]'>
        <Image
          src='/assets/lofi-pics/lofi-main-desktop.png'
          layout='responsive'
          width='100vw'
          height='70vh'
        />
      </div>

      <div className='absolute w-[12em] left-[8em] top-[1.5em]'>
        <Image
          src='/assets/lofi-pics/lofi-main-tablet.png'
          layout='responsive'
          width='67vw'
          height='73vh'
        />
      </div>

      <div className='absolute w-[7em] left-[16em] top-[3em]'>
        <Image
          src='/assets/lofi-pics/lofi-main-mobile.png'
          layout='responsive'
          width='55vw'
          height='100vh'
        />
      </div>

      <div className='absolute w-[20em] left-[0em] top-[17em]'>
        <Image
          src='/assets/lofi-pics/lofi-player-desktop.png'
          layout='responsive'
          width='100vw'
          height='60vh'
        />
      </div>

      <div className='absolute w-[6em] left-[17em] top-[20em]'>
        <Image
          src='/assets/lofi-pics/lofi-player-mobile.png'
          layout='responsive'
          width='57vw'
          height='100vh'
        />
      </div>
    </>
  );
};

export default LofiImages;
