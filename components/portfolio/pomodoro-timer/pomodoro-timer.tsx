import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createListFromArray } from "../../../helpers/helperFunctions";
import { _PomodoroLabels } from "../../../helpers/helperVariables";
import { ProjectInfo } from "../../../helpers/types";
import ProjectDetails from "../project-details";
import PomodoroImages from "./pomodoro-img";

const PomodoroTimer = () => {
  const pomodoroInfo: ProjectInfo = {
    name: "Pomodoro Timer",
    details: createListFromArray(_PomodoroLabels),
    liveLink: "https://pomodoro-app-nathan.vercel.app/",
    repoLink: "https://github.com/TheNathanN/pomodoro-app",
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
        className="relative flex flex-col w-full max-w-xs mb-24 md:max-w-none md:mb-56 md:justify-between md:flex-row lg:mb-60"
      >
        <div className="flex flex-col items-start md:block md:w-5/12">
          <ProjectDetails projectInfo={pomodoroInfo} />
        </div>

        <a
          href={pomodoroInfo.liveLink}
          target="_blank"
          rel="noreferrer"
          className="w-6/12 md:relative cursor-pointer"
        >
          <PomodoroImages />
        </a>
      </motion.div>
    </div>
  );
};

export default PomodoroTimer;
