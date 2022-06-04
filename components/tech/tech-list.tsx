import React from 'react';
import { ListItem } from '../../helpers/types';
import { createListFromArray } from '../../helpers/helperFunctions';
import { _TechLabels } from '../../helpers/helperVariables';
import TechImages from './tech-images';

const TechList = () => {
  const listItems: ListItem[] = createListFromArray(_TechLabels);

  return (
    <>
      <h2 className='font-bold text-5xl mb-12 lg:text-6xl'>Technologies</h2>

      <div className='relative z-10 flex pl-2'>
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

        <div className='flex flex-col ml-20 lg:ml-28 items-center'>
          <TechImages />
        </div>
      </div>
    </>
  );
};

export default TechList;
