import Image from "next/image"
import React from "react"

const LofiImages = () => {
  return (
    <>
      <div className="absolute w-[15em] -top-16 left-[0em] md:w-[60%] md:left-0 md:top-0">
        <Image
          src="/assets/lofi-pics/lofi-main-desktop.png"
          layout="responsive"
          width="100vw"
          height="55vh"
          priority
          alt="lofi radio main page for desktop"
        />
      </div>

      <div className="absolute md:w-[17%] left-[65%] top-[10%]">
        <Image
          src="/assets/lofi-pics/lofi-main-mobile.png"
          layout="responsive"
          width="54vw"
          height="100vh"
          priority
          alt="lofi radio main page for mobile"
        />
      </div>

      <div className="absolute md:w-[68%] left-0 top-[70%]">
        <Image
          src="/assets/lofi-pics/lofi-player-desktop.png"
          layout="responsive"
          width="100vw"
          height="60vh"
          priority
          alt="lofi radio player for desktop"
        />
      </div>

      <div className="absolute w-[5.5em] left-[70%] -top-[1em] md:w-[22%] md:left-[60%] md:top-[80%]">
        <Image
          src="/assets/lofi-pics/lofi-player-mobile.png"
          layout="responsive"
          width="57vw"
          height="100vh"
          priority
          alt="lofi radio player for mobile"
        />
      </div>
    </>
  )
}

export default LofiImages
