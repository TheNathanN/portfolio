import Image from 'next/image';
import React from 'react';

const PomodoroImages = () => {
  return (
    <>
      <div className='absolute w-[18em] left-[0em] top-[0em]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-menu-desktop.png'
          layout='responsive'
          width='90vw'
          height='70vh'
        />
      </div>

      <div className='absolute w-[18em] left-[8em] top-[3em]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-main-desktop.png'
          layout='responsive'
          width='100vw'
          height='70vh'
        />
      </div>

      <div className='absolute w-[7em] left-[3em] top-[17em]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-main-mobile.png'
          layout='responsive'
          width='46vw'
          height='95vh'
        />
      </div>

      <div className='absolute w-[7em] left-[14em] top-[17em]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-menu-mobile.png'
          layout='responsive'
          width='46vw'
          height='95vh'
        />
      </div>
    </>
  );
};

export default PomodoroImages;
