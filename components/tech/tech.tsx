import React from 'react';
import { listItem } from '../../types';
import LaptopSVG from '../svg-components/laptop';

import ShadowSVG from '../svg-components/shadow';
import TechList from './tech-list';
import TechSVG from './tech-svg';

const Tech = () => {
  return (
    <>
      <div className='w-full h-full absolute top-0 '>
        <ShadowSVG />
      </div>

      <div className='flex relative top-32 px-16 '>
        <div className='z-10 w-7/12 '>
          <div className='w-[35em] '>
            <LaptopSVG />
          </div>
        </div>

        <div className='z-10 w-5/12 '>
          <TechList />
        </div>
      </div>

      <TechSVG />
    </>
  );
};

export default Tech;
