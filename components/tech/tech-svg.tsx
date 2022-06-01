import React from 'react';
import StairsSVG from '../svg-components/stairs';
import BackLegSVG from '../svg-components/standing-human/back-leg';
import FrontLegSVG from '../svg-components/standing-human/front-leg';
import StandingBodySVG from '../svg-components/standing-human/standing-body';

const TechSVG = () => {
  return (
    <>
      <div className='absolute w-[12em] bottom-[12em] left-[7em] z-10 '>
        <StandingBodySVG />
      </div>

      <div className='absolute w-[6em] bottom-[7.59em] left-[8.2em] '>
        <BackLegSVG />
      </div>

      <div className='absolute w-[9em] bottom-[10.8em] left-[10em] '>
        <FrontLegSVG />
      </div>

      <div className='absolute w-screen max-w-7xl bottom-0 '>
        <StairsSVG />
      </div>
    </>
  );
};

export default TechSVG;
