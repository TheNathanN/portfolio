import React from 'react';
import ProjectDetails from '../project-details';
import { createListFromArray } from '../../../helpers/helperFunctions';
import { _LofiRadioLabels } from '../../../helpers/helperVariables';
import { ProjectInfo } from '../../../helpers/types';
import LofiImages from './lofi-images';

const LofiRadio = () => {
  const lofiRadioInfo: ProjectInfo = {
    name: 'Lofi Radio',
    details: createListFromArray(_LofiRadioLabels),
    liveLink: 'https://lofiradio.vercel.app/',
    repoLink: 'https://github.com/TheNathanN/lofi-radio',
  };

  return (
    <>
      <a
        href={lofiRadioInfo.liveLink}
        target='_blank'
        className='w-5/12 relative cursor-pointer'
      >
        <LofiImages />
      </a>

      <div className='w-5/12'>
        <ProjectDetails projectInfo={lofiRadioInfo} />
      </div>
    </>
  );
};

export default LofiRadio;
