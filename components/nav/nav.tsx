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
    <nav className='flex items-center justify-between pr-10 pl-8 py-1 fixed w-full top-0 bg-black bg-opacity-80 z-50 '>
      <a href='#'>
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
    </nav>
  );
};

export default Nav;
