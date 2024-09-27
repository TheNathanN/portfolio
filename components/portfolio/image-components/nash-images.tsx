import React from "react"
import Image from "next/image"

const NashImages = () => {
  return (
    <>
      <div className="absolute w-[13em] -top-14 -left-[0%] md:w-[60%] md:top-0 md:left-0">
        <Image
          src="/assets/nash-pics/nash-desktop.png"
          layout="responsive"
          width="100vw"
          height="58vh"
          priority
          alt="directedbynash.com home for desktop"
        />
      </div>

      <div className="absolute w-[13em] -top-2 right-[0%] md:w-[60%] md:top-[5%] md:left-[30%]">
        <Image
          src="/assets/nash-pics/nash-main-desktop.png"
          layout="responsive"
          width="100vw"
          height="58vh"
          priority
          alt="directedbynash.com for desktop"
        />
      </div>

      <div className="absolute md:w-[18%] top-[80%] left-[5%]">
        <Image
          src="/assets/nash-pics/nash-main-mobile.png"
          layout="responsive"
          width="43vw"
          height="100vh"
          priority
          alt="directedbynash.com for mobile"
        />
      </div>

      <div className="absolute md:w-[18%] top-[80%] left-[38%]">
        <Image
          src="/assets/nash-pics/nash-mobile.png"
          layout="responsive"
          width="43vw"
          height="100vh"
          priority
          alt="directedbynash.com for mobile"
        />
      </div>

      <div className="absolute md:w-[18%] top-[80%] left-[72%]">
        <Image
          src="/assets/nash-pics/nash-nav-mobile.png"
          layout="responsive"
          width="43vw"
          height="100vh"
          priority
          alt="directedbynash.com for mobile"
        />
      </div>
    </>
  )
}

export default NashImages
