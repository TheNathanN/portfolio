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
    <div>
      <div className='absolute bottom-[25em] right-[35em] '>
        <TopBtnSVG />
      </div>

      <div className='absolute bottom-[20em] right-[35em] '>
        <MiddleBtnSVG />
      </div>

      <div className='absolute bottom-[15em] right-[35em] '>
        <BottomBtnSVG />
      </div>

      <div className='absolute bottom-[10em] right-[9.8em] '>
        <MainScreenSVG />
      </div>

      <div className='absolute bottom-[17.3em] right-[16em] '>
        <BlueScreenSVG />
      </div>

      <div className='absolute bottom-[20em] right-[6.2em] '>
        <SittingHeadSVG />
      </div>

      <div className='absolute bottom-0 right-[1.5em]  '>
        <SittingBodySVG />
      </div>
    </div>
  );
};

export default HeroSVG;
