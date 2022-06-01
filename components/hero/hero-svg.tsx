import React from 'react';
import BlueScreenSVG from '../svg-components/screen/blue-screen';
import BottomBtnSVG from '../svg-components/screen/bottom-btn';
import MainScreenSVG from '../svg-components/screen/main-screen';
import MiddleBtnSVG from '../svg-components/screen/middle-btn';
import TopBtnSVG from '../svg-components/screen/top-btn';
import SittingBodySVG from '../svg-components/sitting-human/sitting-body';
import SittingHeadSVG from '../svg-components/sitting-human/sitting-head';

const HeroSVG = () => {
  return (
    <>
      <div className='absolute bottom-[34em] right-[33] w-[2em] '>
        <TopBtnSVG />
      </div>

      <div className='absolute bottom-[29em] right-[33] w-[2em] '>
        <MiddleBtnSVG />
      </div>

      <div className='absolute bottom-[24em] right-[33] w-[2em] '>
        <BottomBtnSVG />
      </div>

      <div className='absolute bottom-[20em] right-[10.5em] w-[22.5em] '>
        <MainScreenSVG />
      </div>

      <div className='absolute bottom-[27em] right-[17em] w-[8.5em] '>
        <BlueScreenSVG />
      </div>

      <div className='absolute bottom-[29.5em] right-[5.9em] w-[3.5em] '>
        <SittingHeadSVG />
      </div>

      <div className='absolute bottom-[10em] right-[1.2em] w-[16.5em]  '>
        <SittingBodySVG />
      </div>
    </>
  );
};

export default HeroSVG;
