import React from 'react';
import { createListFromArray } from '../../../helpers/helperFunctions';
import { _PomodoroLabels } from '../../../helpers/helperVariables';
import { ProjectInfo } from '../../../helpers/types';
import ProjectDetails from '../project-details';
import PomodoroImages from './pomodoro-img';

const PomodoroTimer = () => {
  const pomodoroInfo: ProjectInfo = {
    name: 'Pomodoro Timer',
    details: createListFromArray(_PomodoroLabels),
    liveLink: 'https://pomodoro-app-nathan.vercel.app/',
    repoLink: 'https://github.com/TheNathanN/pomodoro-app',
  };

  return (
    <>
      <a
        href={pomodoroInfo.liveLink}
        target='_blank'
        rel='noreferrer'
        className='w-5/12 relative cursor-pointer'
      >
        <PomodoroImages />
      </a>

      <div className='w-5/12'>
        <ProjectDetails projectInfo={pomodoroInfo} />
      </div>
    </>
  );
};

export default PomodoroTimer;
