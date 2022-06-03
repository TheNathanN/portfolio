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
        <div className='relative w-full h-full mt-40 mr-10 lg:mt-60 lg:mr-32'>
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
