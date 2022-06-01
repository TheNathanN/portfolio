import React from 'react';

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
      <div>
        <ul>
          {listItems.map(item => (
            <li key={item.id} className='text-2xl mb-2 font-thin '>
              {item.label}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default TechList;
