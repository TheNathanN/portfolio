import Image from "next/image"
import React from "react"

const PayImages = () => {
  return (
    <>
      <div className="absolute w-[13em] -top-14 -left-[0%] md:w-[60%] md:top-0 md:left-0">
        <Image
          src="/assets/pay-pics/pay-desktop-form.png"
          layout="responsive"
          width="100vw"
          height="60vh"
          priority
          alt="pay api form page for desktop"
        />
      </div>

      <div className="absolute w-[13em] -top-2 right-[0%] md:w-[60%] md:top-[5%] md:left-[25%]">
        <Image
          src="/assets/pay-pics/pay-desktop-main.png"
          layout="responsive"
          width="92vw"
          height="60vh"
          priority
          alt="pay api main page for desktop"
        />
      </div>

      <div className="absolute md:w-[20%] top-[68%] left-[5%]">
        <Image
          src="/assets/pay-pics/pay-mobile-nav.png"
          layout="responsive"
          width="55vw"
          height="100vh"
          priority
          alt="pay api nav page for mobile"
        />
      </div>

      <div className="absolute md:w-[20%] top-[68%] left-[38%]">
        <Image
          src="/assets/pay-pics/pay-mobile-plan.png"
          layout="responsive"
          width="55vw"
          height="100vh"
          priority
          alt="pay api plans page for mobile"
        />
      </div>

      <div className="absolute md:w-[20%] top-[68%] left-[72%]">
        <Image
          src="/assets/pay-pics/pay-mobile-main.png"
          layout="responsive"
          width="55vw"
          height="100vh"
          priority
          alt="pay api main page for mobile"
        />
      </div>
    </>
  )
}

export default PayImages
