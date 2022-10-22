import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ProjectInfo } from "../../../helpers/types";
import { _OtguLabels } from "../../../helpers/helperVariables";
import { createListFromArray } from "../../../helpers/helperFunctions";
import ProjectDetails from "../project-details";
import OtguImages from "./otgu-images";

const OtguWebsite = () => {
  const otguInfo: ProjectInfo = {
    name: "OTGU Website",
    details: createListFromArray(_OtguLabels),
    liveLink: "https://otgu.xyz/",
    repoLink: "https://github.com/otgumedia/otgu-website",
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
        initial={{ opacity: 0, x: 500 }}
        animate={animation}
        className="relative flex flex-col w-full max-w-xs mb-24 md:max-w-none md:mb-60 md:justify-between md:flex-row lg:mb-72"
      >
        <a
          href={otguInfo.liveLink}
          target="_blank"
          rel="noreferrer"
          className="w-6/12 static md:relative cursor-pointer"
        >
          <OtguImages />
        </a>

        <div className="w-full flex flex-col items-start md:items-center md:block md:w-5/12">
          <ProjectDetails projectInfo={otguInfo} />
        </div>
      </motion.div>
    </div>
  );
};

export default OtguWebsite;
