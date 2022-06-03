import Image from 'next/image';
import React from 'react';

const PomodoroImages = () => {
  return (
    <>
      <div className='absolute w-[60%] left-0 top-0'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-menu-desktop.png'
          layout='responsive'
          width='90vw'
          height='70vh'
        />
      </div>

      <div className='absolute w-[60%] left-[25%] top-[12%]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-main-desktop.png'
          layout='responsive'
          width='100vw'
          height='70vh'
        />
      </div>

      <div className='absolute w-[23%] left-[10%] top-[78%]'>
        <Image
          src='/assets/pomodoro-pics/pomodoro-main-mobile.png'
          layout='responsive'
          width='46vw'
          height='95vh'
        />
      </div>

      <div className='absolute w-[23%] left-[50%] top-[78%]'>
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
