import React from 'react';
import { ProjectInfo } from '../../helpers/types';

interface Props {
  projectInfo: ProjectInfo;
}

const ProjectDetails = ({ projectInfo }: Props) => {
  const { name, details, liveLink, repoLink } = projectInfo;

  return (
    <>
      <h3 className='border-b-2 w-fit font-bold text-4xl mb-6 pb-4'>{name}</h3>

      <ul className='relative left-7 list-disc text-2xl font-thin'>
        {details.map(info => (
          <li key={info.id} className='mb-2'>
            {info.label}
          </li>
        ))}
      </ul>

      <div className='flex mt-8'>
        <a
          href={liveLink}
          target='_blank'
          className='mr-7 text-3xl cursor-pointer hover:text-lightBlue transition-all duration-100 ease-in'
        >
          <i className='fa-solid fa-link'></i>
        </a>
        <a
          href={repoLink}
          target='_blank'
          className='text-4xl cursor-pointer hover:text-lightBlue transition-all duration-100 ease-in'
        >
          <i className='fa-brands fa-github'></i>
        </a>
      </div>
    </>
  );
};

export default ProjectDetails;
