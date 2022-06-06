import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectDetails from '../project-details';
import { createListFromArray } from '../../../helpers/helperFunctions';
import { _LofiRadioLabels } from '../../../helpers/helperVariables';
import { ProjectInfo } from '../../../helpers/types';
import LofiImages from './lofi-images';

const LofiRadio = () => {
  const lofiRadioInfo: ProjectInfo = {
    name: 'Lofi Radio',
    details: createListFromArray(_LofiRadioLabels),
    liveLink: 'https://lofiradio.vercel.app/',
    repoLink: 'https://github.com/TheNathanN/lofi-radio',
  };

  const animation = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.3 },
      });
    }
  }, [inView]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: '100vw' }}
        animate={animation}
        className='relative flex flex-col max-w-xs mb-24 md:max-w-none md:mb-52 md:justify-between md:flex-row lg:mb-64'
      >
        <a
          href={lofiRadioInfo.liveLink}
          target='_blank'
          rel='noreferrer'
          className='w-6/12 static md:relative cursor-pointer'
        >
          <LofiImages />
        </a>

        <div className='w-full flex flex-col items-center md:block md:w-5/12'>
          <ProjectDetails projectInfo={lofiRadioInfo} />
        </div>
      </motion.div>
    </div>
  );
};

export default LofiRadio;
