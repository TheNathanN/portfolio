import React from 'react';
import ShadowSVG from '../svg/shadow';

const Contact = () => {
  return (
    <>
      <div className='w-full h-full absolute top-0'>
        <ShadowSVG />
      </div>

      <h2 className='font-bold text-center relative text-5xl mt-16 mb-11 lg:text-6xl lg:mb-20'>
        Contact
      </h2>

      <form
        action=''
        className='relative flex flex-col w-11/12 max-w-xl text-base lg:text-xl '
      >
        <label htmlFor='name'>Name</label>
        <input
          className='my-4 p-2 rounded-sm text-black outline-none'
          id='name'
          name='name'
          type='text'
          required
        />

        <label htmlFor='email'>Email</label>
        <input
          className='my-4 p-2 rounded-sm text-black outline-none'
          id='email'
          name='email'
          type='email'
          required
        />

        <label htmlFor='message'>Message</label>
        <textarea
          className='my-4 p-2 rounded-sm text-black outline-none'
          name='message'
          id='message'
          cols={5}
          rows={8}
        ></textarea>

        <input
          className='bg-white text-black w-36 py-2 mx-auto mt-9 mb-14 rounded-sm cursor-pointer hover:bg-lightBlue hover:text-white transition-all duration-100 ease-in'
          type='submit'
          placeholder='Submit'
        />
      </form>
    </>
  );
};

export default Contact;
