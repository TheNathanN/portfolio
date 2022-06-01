import React from 'react';
import Image from 'next/image';

import { listItem } from '../../types';

const TechList = () => {
  const listItems: listItem[] = [
    {
      id: Math.random(),
      label: 'HTML',
    },
    {
      id: Math.random(),
      label: 'CSS / SCSS',
    },
    {
      id: Math.random(),
      label: 'Tailwind CSS',
    },
    {
      id: Math.random(),
      label: 'Typescript',
    },
    {
      id: Math.random(),
      label: 'React JS',
    },
    {
      id: Math.random(),
      label: 'Redux',
    },
    {
      id: Math.random(),
      label: 'Next JS',
    },
    {
      id: Math.random(),
      label: 'Node JS',
    },
    {
      id: Math.random(),
      label: 'MySQL',
    },
  ];

  return (
    <>
      <h2 className='font-bold text-5xl mb-8 '>Technologies</h2>
      <div className='flex'>
        <ul>
          {listItems.map(item => (
            <li key={item.id} className='text-2xl mb-2 font-thin '>
              {item.label}
            </li>
          ))}
        </ul>

        <div className='flex flex-col ml-16 items-center '>
          <div className='mb-8 mt-11'>
            <Image src='/assets/javascript-logo.png' height={60} width={60} />
          </div>

          <div className='mb-8'>
            <Image src='/assets/react-logo.png' height={60} width={65} />
          </div>

          <div>
            <Image src='/assets/next-logo.png' height={70} width={70} />
          </div>
        </div>
      </div>
    </>
  );
};

export default TechList;
