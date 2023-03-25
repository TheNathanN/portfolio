import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { projectsData } from "../../data/projectsData"
import SlideIn from "./slide-in/slide-in"

const Portfolio = () => {
  const headerAnimation = useAnimation()

  const [ref, inView] = useInView({
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      headerAnimation.start({
        opacity: 1,
        transition: { duration: 1.3, ease: "easeOut" },
      })
    }
  }, [inView, headerAnimation])

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

      {projectsData.map((projectData, indx) => {
        const direction = indx % 2 === 0 ? "left" : "right"
        return (
          <SlideIn
            projectData={projectData}
            direction={direction}
            key={projectData.name}
          />
        )
      })}
    </>
  )
}

export default Portfolio
