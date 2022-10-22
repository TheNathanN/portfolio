import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CryptoTracker from "./crypto-tracker/crypto-tracker";
import LofiRadio from "./lofi-radio/lofi-radio";
import PayApi from "./pay-api/pay-api";
import PomodoroTimer from "./pomodoro-timer/pomodoro-timer";
import MessageMe from "./message-me/message-me";
import OtguWebsite from "./otgu-website/otgu-website";

const Portfolio = () => {
  const headerAnimation = useAnimation();

  const [ref, inView] = useInView({
    threshold: 0.25,
  });

  useEffect(() => {
    if (inView) {
      headerAnimation.start({
        opacity: 1,
        transition: { duration: 1.3, ease: "easeOut" },
      });
    }
  }, [inView, headerAnimation]);

  return (
    <>
      <motion.h2
        ref={ref}
        initial={{ opacity: 0 }}
        animate={headerAnimation}
        className="font-bold text-5xl mt-32 mb-28 lg:text-6xl lg:mt-28 lg:mb-32 text-center"
      >
        Portfolio
      </motion.h2>

      <div className="w-full">
        <OtguWebsite />
      </div>

      <div className="w-full">
        <PayApi />
      </div>

      <div className="w-full">
        <LofiRadio />
      </div>

      <div className="w-full">
        <CryptoTracker />
      </div>

      <div className="w-full">
        <MessageMe />
      </div>

      <div className="w-full">
        <PomodoroTimer />
      </div>
    </>
  );
};

export default Portfolio;
