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
          priority
        />
      </div>

      <div className='absolute w-[15em] -top-[3.5em] -left-[0%] md:w-[60%] md:left-[28%] md:top-[12%]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-main-desktop.png'
          layout='responsive'
          width='100vw'
          height='68vh'
          alt='pomodoro main page for desktop'
          priority
        />
      </div>

      <div className='absolute md:w-[20%] left-[10%] top-[90%]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-main-mobile.png'
          layout='responsive'
          width='46vw'
          height='95vh'
          alt='pomodoro main page for mobile'
          priority
        />
      </div>

      <div className='absolute left-[74%] w-[5em] -top-[1.5em] md:w-[20%] md:left-[58%] md:top-[90%]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-menu-mobile.png'
          layout='responsive'
          width='46vw'
          height='95vh'
          alt='pomodoro menu for mobile'
          priority
        />
      </div>
    </>
  );
};

export default PomodoroImages;
