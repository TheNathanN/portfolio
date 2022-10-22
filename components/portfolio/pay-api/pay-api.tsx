import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createListFromArray } from "../../../helpers/helperFunctions";
import { _PayApiLabels } from "../../../helpers/helperVariables";
import { ProjectInfo } from "../../../helpers/types";
import ProjectDetails from "../project-details";
import PayImages from "./pay-images";

const PayApi = () => {
  const payApiInfo: ProjectInfo = {
    name: "Pay API Website",
    details: createListFromArray(_PayApiLabels),
    liveLink: "https://payapi-project.vercel.app/",
    repoLink: "https://github.com/TheNathanN/payapi",
  };

  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  const payAnimation = useAnimation();

  useEffect(() => {
    if (inView) {
      payAnimation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.3, ease: "easeOut" },
      });
    }
  }, [payAnimation, inView]);

  return (
    <div ref={ref} className="flex w-full justify-center">
      <motion.div
        initial={{ opacity: 0, x: -500 }}
        animate={payAnimation}
        className="relative flex flex-col w-full max-w-xs mb-24 md:max-w-none md:mb-36 md:justify-between md:flex-row"
      >
        <div className="flex flex-col items-start md:block md:w-6/12">
          <ProjectDetails projectInfo={payApiInfo} />
        </div>

        <a
          href={payApiInfo.liveLink}
          target="_blank"
          rel="noreferrer"
          className="w-5/12 md:relative cursor-pointer"
        >
          <PayImages />
        </a>
      </motion.div>
    </div>
  );
};

export default PayApi;
