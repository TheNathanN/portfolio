import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useForm, ValidationError } from '@formspree/react';
import ShadowSVG from '../svg/shadow';

const Contact = () => {
  const [state, handleSubmit] = useForm('mrgjdgbg');
  const animation = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        y: 0,
        transition: { duration: 1.3 },
      });
    }
  }, [inView, animation]);

  if (state.succeeded) {
    return (
      <>
        <div className='w-full h-full absolute top-0'>
          <ShadowSVG />
        </div>

        <h2 className='font-bold text-center relative text-5xl mt-24 mb-11 lg:text-6xl lg:mb-20'>
          Contact
        </h2>

        <p className='relative flex flex-col text-center justify-center items-center w-10/12 max-w-xl h-72 mb-16 text-lg md:text-xl lg:mb-36'>
          The form has been submitted successfully.
          <br />
          I&#39;m looking forward to furthering our communication!
        </p>
      </>
    );
  }

  return (
    <div
      ref={ref}
      className='relative w-full flex flex-col items-center md:mt-8'
    >
      <div className='w-full h-full absolute top-0'>
        <ShadowSVG />
      </div>

      <motion.h2
        initial={{ opacity: 0, y: 100 }}
        animate={animation}
        className='font-bold text-center relative text-5xl mt-24 mb-11 lg:text-6xl lg:mb-20'
      >
        Contact
      </motion.h2>

      <motion.form
        initial={{ opacity: 0, y: 100 }}
        animate={animation}
        onSubmit={handleSubmit}
        className='relative flex flex-col w-11/12 max-w-xl text-base lg:text-xl'
      >
        <label htmlFor='name'>Name</label>
        <input
          className='my-4 p-2 rounded-sm text-black outline-none'
          id='name'
          name='name'
          type='text'
          required
        />

        <ValidationError prefix='Name' field='name' errors={state.errors} />

        <label htmlFor='email'>Email</label>
        <input
          className='my-4 p-2 rounded-sm text-black outline-none'
          id='email'
          name='email'
          type='email'
          required
        />

        <ValidationError prefix='Email' field='email' errors={state.errors} />

        <label htmlFor='message'>Message</label>
        <textarea
          className='my-4 p-2 rounded-sm text-black outline-none'
          name='message'
          id='message'
          cols={5}
          rows={8}
        ></textarea>

        <ValidationError
          prefix='Message'
          field='message'
          errors={state.errors}
        />

        <button
          className='bg-white text-black w-36 py-2 mx-auto mt-9 mb-14 rounded-sm cursor-pointer hover:bg-lightBlue hover:text-white transition-all duration-100 ease-in'
          type='submit'
          disabled={state.submitting}
        >
          Submit
        </button>
      </motion.form>
    </div>
  );
};

export default Contact;
