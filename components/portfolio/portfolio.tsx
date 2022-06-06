import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import CryptoTracker from './crypto-tracker/crypto-tracker';
import LofiRadio from './lofi-radio/lofi-radio';
import PayApi from './pay-api/pay-api';
import PomodoroTimer from './pomodoro-timer/pomodoro-timer';

const Portfolio = () => {
  const headerAnimation = useAnimation();
  const cryptoAnimation = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });
  useEffect(() => {
    if (inView) {
      headerAnimation.start({
        opacity: 1,
        transition: { duration: 1.3, ease: 'easeOut' },
      });
      cryptoAnimation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.3, ease: 'easeOut' },
      });
    }
  }, [inView, headerAnimation, cryptoAnimation]);

  return (
    <>
      <motion.h2
        initial={{ opacity: 0 }}
        animate={headerAnimation}
        className='font-bold text-5xl mt-32 mb-28 lg:text-6xl lg:mt-28 lg:mb-32 text-center'
      >
        Portfolio
      </motion.h2>

      <div ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: -500 }}
          animate={cryptoAnimation}
          className='relative w-full flex flex-col max-w-xs mb-24 md:max-w-none md:justify-between md:flex-row lg:mb-36'
        >
          <CryptoTracker />
        </motion.div>
      </div>

      <div>
        <LofiRadio />
      </div>

      <div>
        <PayApi />
      </div>

      <div>
        <PomodoroTimer />
      </div>
    </>
  );
};

export default Portfolio;
