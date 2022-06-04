import Image from 'next/image';
import React from 'react';

const PomodoroImages = () => {
  return (
    <>
      <div className='absolute md:w-[60%] left-0 top-0'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-menu-desktop.png'
          layout='responsive'
          width='90vw'
          height='70vh'
          alt='pomodoro menu for desktop'
        />
      </div>

      <div className='absolute w-[15em] -top-[3.5em] -left-[4%] md:w-[60%] md:left-[25%] md:top-[12%]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-main-desktop.png'
          layout='responsive'
          width='100vw'
          height='68vh'
          alt='pomodoro main page for desktop'
        />
      </div>

      <div className='absolute md:w-[23%] left-[10%] top-[72%]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-main-mobile.png'
          layout='responsive'
          width='46vw'
          height='95vh'
          alt='pomodoro main page for mobile'
        />
      </div>

      <div className='absolute left-[70%] w-[5em] -top-[1.5em] md:w-[23%] md:left-[50%] md:top-[72%]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-menu-mobile.png'
          layout='responsive'
          width='46vw'
          height='95vh'
          alt='pomodoro menu for mobile'
        />
      </div>
    </>
  );
};

export default PomodoroImages;
