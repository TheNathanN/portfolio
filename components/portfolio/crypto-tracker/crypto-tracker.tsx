import React from 'react';
import { createListFromArray } from '../../../helpers/helperFunctions';
import { _CryptoTrackerLabels } from '../../../helpers/helperVariables';
import { ProjectInfo } from '../../../helpers/types';
import ProjectDetails from '../project-details';

const CryptoTracker = () => {
  const cryptoTrackerInfo: ProjectInfo = {
    name: 'Crypto Tracker',
    details: createListFromArray(_CryptoTrackerLabels),
  };

  return (
    <>
      <div className='w-1/2'>
        <ProjectDetails projectInfo={cryptoTrackerInfo} />
      </div>
      <div className='w-1/2'></div>
    </>
  );
};

export default CryptoTracker;
