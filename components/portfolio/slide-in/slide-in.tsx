import { useEffect } from "react"
import { motion, useAnimation } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { createListFromArray } from "../../../helpers/helperFunctions"
import { _LofiRadioLabels } from "../../../helpers/helperVariables"
import { ProjectInfo } from "../../../helpers/types"
import ProjectDetails from "../project-details"

interface LeftSlideInProps {
  projectData: ProjectInfo
  direction: "left" | "right"
}

const SlideIn = ({ projectData, direction }: LeftSlideInProps) => {
  const isLeft = direction === "left"
  const { liveLink } = projectData

  const animation = useAnimation()

  const [ref, inView] = useInView({
    threshold: 0.25,
  })

  useEffect(() => {
    if (inView) {
      animation.start({
        opacity: 1,
        x: 0,
        transition: { duration: 1.3, ease: "easeOut" },
      })
    }
  }, [inView, animation])

  return (
    <div ref={ref} className="flex w-full justify-center">
      <motion.div
        initial={{ opacity: 0, x: isLeft ? 500 : -500 }}
        animate={animation}
        className="relative flex flex-col w-full max-w-xs mb-24 md:max-w-none md:mb-60 md:justify-between md:flex-row lg:mb-72"
      >
        {!isLeft && (
          <div className="flex flex-col items-start md:block md:w-6/12">
            <ProjectDetails projectInfo={projectData} />
          </div>
        )}

        <a
          href={liveLink}
          target="_blank"
          rel="noreferrer"
          className="w-6/12 static md:relative cursor-pointer"
        >
          {projectData.imageComponent}
        </a>

        {isLeft && (
          <div className="w-full flex flex-col items-start md:items-center md:block md:w-5/12">
            <ProjectDetails projectInfo={projectData} />
          </div>
        )}
      </motion.div>
    </div>
  )
}

export default SlideIn
