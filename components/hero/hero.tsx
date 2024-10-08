import { motion } from "framer-motion"
import Image from "next/image"
import ManSitting from "../svg/man-sitting"

const Hero = () => {
  return (
    <>
      <motion.div
        initial={{ x: -700, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="pr-12 flex flex-col ml-4 mt-[40%] md:w-[47%] md:mt-60 md:ml-16 lg:w-5/12"
      >
        <h1 className="font-bold text-6xl mb-5 lg:text-7xl lg:mb-9">
          Nathan
          <br /> Nicholson
        </h1>
        <p className="font-light leading-relaxed text-xl lg:text-2xl">
          A web developer who loves creating enjoyable experiences on the
          internet!
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.3, ease: "easeOut" }}
        className="w-full absolute bottom-0 max-w-7xl"
      >
        <ManSitting />
      </motion.div>
    </>
  )
}

export default Hero
