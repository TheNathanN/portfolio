import React from 'react';
import { ProjectInfo } from '../../helpers/types';

interface Props {
  projectInfo: ProjectInfo;
}

const ProjectDetails = ({ projectInfo }: Props) => {
  const { name, details } = projectInfo;

  return (
    <>
      <h3 className='border-b-2 w-fit font-bold text-5xl mb-8 pb-4 cursor-pointer hover:text-lightBlue transition-all duration-75'>
        {name}
      </h3>
      <ul className='relative left-7 list-disc text-2xl font-thin'>
        {details.map(info => (
          <li key={info.id} className='mb-2'>
            {info.label}
          </li>
        ))}
      </ul>

      <div className='flex mt-8'>
        <div className='mr-7 text-3xl cursor-pointer hover:text-lightBlue transition-all duration-75'>
          <i className='fa-solid fa-link'></i>
        </div>
        <div className='text-4xl cursor-pointer hover:text-lightBlue transition-all duration-75'>
          <i className='fa-brands fa-github'></i>
        </div>
      </div>
    </>
  );
};

export default ProjectDetails;
