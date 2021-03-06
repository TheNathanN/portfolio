import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { createListFromArray } from "../../../helpers/helperFunctions";
import { _MessageMeLabels } from "../../../helpers/helperVariables";
import { ProjectInfo } from "../../../helpers/types";
import ProjectDetails from "../project-details";
import MessageImages from "./message-images";

const MessageMe = () => {
  const messageInfo: ProjectInfo = {
    name: "Message Me",
    details: createListFromArray(_MessageMeLabels),
    liveLink: "https://messageme-app.vercel.app/",
    repoLink: "https://github.com/TheNathanN/message-me",
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
        className="relative flex flex-col w-full max-w-xs mb-24 md:max-w-none md:mb-56 md:justify-between md:flex-row lg:mb-60"
      >
        <a
          href={messageInfo.liveLink}
          target="_blank"
          rel="noreferrer"
          className="w-6/12 md:relative cursor-pointer"
        >
          <MessageImages />
        </a>

        <div className="flex flex-col items-start md:block md:w-5/12">
          <ProjectDetails projectInfo={messageInfo} />
        </div>
      </motion.div>
    </div>
  );
};

export default MessageMe;
