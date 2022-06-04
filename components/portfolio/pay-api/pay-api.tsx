import React from 'react';
import { createListFromArray } from '../../../helpers/helperFunctions';
import { _PayApiLabels } from '../../../helpers/helperVariables';
import { ProjectInfo } from '../../../helpers/types';
import ProjectDetails from '../project-details';
import PayImages from './pay-images';

const PayApi = () => {
  const payApiInfo: ProjectInfo = {
    name: 'Pay API Website',
    details: createListFromArray(_PayApiLabels),
    liveLink: 'https://payapi-project.vercel.app/',
    repoLink: 'https://github.com/TheNathanN/payapi',
  };

  return (
    <>
      <div className='flex flex-col items-center md:block md:w-6/12'>
        <ProjectDetails projectInfo={payApiInfo} />
      </div>

      <a
        href={payApiInfo.liveLink}
        target='_blank'
        rel='noreferrer'
        className=' hidden md:block w-5/12 relative cursor-pointer'
      >
        <PayImages />
      </a>
    </>
  );
};

export default PayApi;
