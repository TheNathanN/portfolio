import React from 'react';
import { createListFromArray } from '../../../helpers/helperFunctions';
import { _CryptoTrackerLabels } from '../../../helpers/helperVariables';
import { ProjectInfo } from '../../../helpers/types';
import ProjectDetails from '../project-details';
import CryptoImages from './crypto-images';

const CryptoTracker = () => {
  const cryptoTrackerInfo: ProjectInfo = {
    name: 'Crypto Tracker',
    details: createListFromArray(_CryptoTrackerLabels),
    liveLink: 'https://crypto-tracker-nathan.vercel.app/',
    repoLink: 'https://github.com/TheNathanN/crypto-tracker',
  };

  return (
    <>
      <div className='w-1/2'>
        <ProjectDetails projectInfo={cryptoTrackerInfo} />
      </div>

      <a
        href={cryptoTrackerInfo.liveLink}
        target='_blank'
        className='w-1/2 relative cursor-pointer'
      >
        <CryptoImages />
      </a>
    </>
  );
};

export default CryptoTracker;
