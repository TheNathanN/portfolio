import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ShadowSVG from '../svg/shadow';
import TechSVG from '../svg/tech-svg';
import TechList from './tech-list';

const Tech = () => {
  const svgAnimation = useAnimation();
  const listAnimation = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      svgAnimation.start({
        opacity: 1,
        transition: { duration: 1.3 },
      });
      listAnimation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.3 },
      });
    }
  }, [inView, svgAnimation, listAnimation]);

  return (
    <>
      <div className='w-full h-full absolute top-0'>
        <ShadowSVG />
      </div>

      <motion.div ref={ref}>
        <motion.div
          initial={{ opacity: 0, x: 500 }}
          animate={listAnimation}
          className='relative w-full h-full mt-36 md:block md:mt-36 md:mr-10 lg:mt-60 lg:mr-32'
        >
          <TechList />
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={svgAnimation}
        className='flex absolute w-full bottom-0'
      >
        <TechSVG inView={inView} />
      </motion.div>
    </>
  );
};

export default Tech;
