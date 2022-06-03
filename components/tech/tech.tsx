import React from 'react';
import ShadowSVG from '../svg/shadow';
import TechSVG from '../svg/tech-svg';
import TechList from './tech-list';

const Tech = () => {
  return (
    <>
      <div className='w-full h-full absolute top-0'>
        <ShadowSVG />
      </div>

      <div>
        <div className='relative w-full h-full flex flex-col justify-center mr-40'>
          <TechList />
        </div>
      </div>

      <div className='flex absolute w-full bottom-0'>
        <TechSVG />
      </div>
    </>
  );
};

export default Tech;
