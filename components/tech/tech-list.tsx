import React from 'react';
import Image from 'next/image';

import { ListItem } from '../../helpers/types';
import { createListFromArray } from '../../helpers/helperFunctions';
import { _TechLabels } from '../../helpers/helperVariables';

const TechList = () => {
  const listItems: ListItem[] = createListFromArray(_TechLabels);

  return (
    <>
      <h2 className='font-bold text-6xl mb-8'>Technologies</h2>
      <div className='flex'>
        <ul>
          {listItems.map(item => (
            <li key={item.id} className='text-2xl mb-2 font-thin'>
              {item.label}
            </li>
          ))}
        </ul>

        <div className='flex flex-col ml-16 items-center'>
          <div className='mb-8 mt-9'>
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
