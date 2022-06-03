import React from 'react';
import { ListItem } from '../../helpers/types';
import { createListFromArray } from '../../helpers/helperFunctions';
import { _TechLabels } from '../../helpers/helperVariables';
import TechImages from './tech-images';

const TechList = () => {
  const listItems: ListItem[] = createListFromArray(_TechLabels);

  return (
    <>
      <h2 className='font-bold text-5xl mb-7 lg:text-6xl lg:mb-8'>
        Technologies
      </h2>

      <div className='flex'>
        <ul>
          {listItems.map(item => (
            <li
              key={item.id}
              className='font-thin text-xl mb-1 lg:text-2xl lg:mb-2'
            >
              {item.label}
            </li>
          ))}
        </ul>

        <div className='flex flex-col ml-16 items-center'>
          <TechImages />
        </div>
      </div>
    </>
  );
};

export default TechList;
