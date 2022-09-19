import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createListFromArray } from "../../../helpers/helperFunctions";
import { _CryptoTrackerLabels } from "../../../helpers/helperVariables";
import { ProjectInfo } from "../../../helpers/types";
import ProjectDetails from "../project-details";
import CryptoImages from "./crypto-images";

const CryptoTracker = () => {
  const cryptoTrackerInfo: ProjectInfo = {
    name: "Crypto Tracker",
    details: createListFromArray(_CryptoTrackerLabels),
    liveLink: "https://crypto-tracker-nathan.vercel.app/",
    repoLink: "https://github.com/TheNathanN/crypto-tracker",
  };

  const animation = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.3, ease: "easeOut" },
      });
    }
  }, [inView, animation]);

  return (
    <div ref={ref} className="flex w-full justify-center">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={animation}
        className="relative flex flex-col w-full max-w-xs mb-24 md:max-w-none md:mb-36 md:justify-between md:flex-row"
      >
        <div className="w-full flex flex-col items-start md:block md:w-1/2">
          <ProjectDetails projectInfo={cryptoTrackerInfo} />
        </div>

        <a
          href={cryptoTrackerInfo.liveLink}
          target="_blank"
          rel="noreferrer"
          className="cursor-pointer w-full md:w-1/2 md:relative"
        >
          <CryptoImages />
        </a>
      </motion.div>
    </div>
  );
};

export default CryptoTracker;
