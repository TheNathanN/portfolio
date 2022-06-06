import { useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { createListFromArray } from '../../../helpers/helperFunctions';
import { _PayApiLabels } from '../../../helpers/helperVariables';
import { ProjectInfo } from '../../../helpers/types';
import ProjectDetails from '../project-details';
import PayImages from './pay-images';

const PayApi = () => {
  const payApiInfo: ProjectInfo = {
    name: 'Pay API Website',
    details: createListFromArray(_PayApiLabels),
    liveLink: 'https://payapi-project.vercel.app/',
    repoLink: 'https://github.com/TheNathanN/payapi',
  };

  const animation = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.2,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.3, ease: 'easeOut' },
      });
    }
  }, [inView, animation]);

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={animation}
        className='relative flex flex-col w-full max-w-xs mb-24 md:max-w-none md:mb-32 md:justify-between md:flex-row lg:mb-44'
      >
        <div className='flex flex-col items-center md:block md:w-6/12'>
          <ProjectDetails projectInfo={payApiInfo} />
        </div>

        <a
          href={payApiInfo.liveLink}
          target='_blank'
          rel='noreferrer'
          className='w-5/12 md:relative cursor-pointer'
        >
          <PayImages />
        </a>
      </motion.div>
    </div>
  );
};

export default PayApi;
