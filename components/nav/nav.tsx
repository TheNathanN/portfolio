import React from 'react';
import Image from 'next/image';
import { listItem } from '../../types';

const Nav = () => {
  const listItems: listItem[] = [
    {
      id: Math.random(),
      label: 'Tech',
      link: '#tech',
    },
    {
      id: Math.random(),
      label: 'Portfolio',
      link: '#portfolio',
    },
    {
      id: Math.random(),
      label: 'Contact',
      link: '#contact',
    },
  ];

  return (
    <nav className='flex justify-center pr-10 pl-8 py-1 fixed w-full top-0 bg-darkBlue bg-opacity-80 z-50 '>
      <div className='max-w-7xl w-full flex items-center justify-between text-white '>
        <a href='#hero'>
          <Image
            src='/assets/nav-logo.png'
            width={50}
            height={50}
            className='cursor-pointer '
          />
        </a>
        <ul className='flex '>
          {listItems.map(item => (
            <li
              key={item.id}
              className='ml-8 text-xl cursor-pointer hover:underline '
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
