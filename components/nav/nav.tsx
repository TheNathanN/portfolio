import Image from 'next/image';
import { motion } from 'framer-motion';
import { createListFromArray } from '../../helpers/helperFunctions';
import { _NavItems } from '../../helpers/helperVariables';
import { ListItem } from '../../helpers/types';

const Nav = () => {
  const listItems: ListItem[] = createListFromArray(_NavItems);

  return (
    <nav className='flex justify-center pr-5 pl-5 md:pr-10 md:pl-8 py-1 fixed w-full top-0 bg-darkBlue bg-opacity-80 z-50'>
      <div className='max-w-7xl w-full flex items-center justify-between text-white'>
        <motion.a
          initial={{ x: -500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          href='#hero'
          className='relative w-[40px] h-[40px] md:w-[60px] md:h-[60px]'
        >
          <Image
            src='/assets/nav-logo.png'
            layout='fill'
            objectFit='contain'
            className='cursor-pointer'
            alt='Nathan Nicholson logo'
          />
        </motion.a>
        <motion.ul
          initial={{ x: 500, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3, ease: 'easeOut' }}
          className='flex'
        >
          {listItems.map(item => (
            <li
              key={item.id}
              className='ml-5 text-xl md:ml-8 md:text-2xl cursor-pointer hover:underline'
            >
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
        </motion.ul>
      </div>
    </nav>
  );
};

export default Nav;
