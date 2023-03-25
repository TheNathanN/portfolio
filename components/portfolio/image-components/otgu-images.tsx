import React from "react";
import Image from "next/image";

const OtguImages = () => {
  return (
    <>
      <div className="absolute w-[13em] -top-14 -left-[0%] md:w-[65%] md:top-0 md:left-0">
        <Image
          src="/assets/otgu-pics/otgu-learn-desktop.png"
          layout="responsive"
          width="100vw"
          height="65vh"
          priority
          alt="message me chat room page for desktop"
        />
      </div>

      <div className="absolute w-[13em] -top-2 right-[0%] md:w-[65%] md:top-[5%] md:left-[30%]">
        <Image
          src="/assets/otgu-pics/otgu-main-desktop.png"
          layout="responsive"
          width="100vw"
          height="65vh"
          priority
          alt="message me sign in page for desktop"
        />
      </div>

      <div className="absolute md:w-[22%] top-[80%] left-[5%]">
        <Image
          src="/assets/otgu-pics/otgu-main-mobile.png"
          layout="responsive"
          width="56vw"
          height="100vh"
          priority
          alt="message me sign in page for mobile"
        />
      </div>

      <div className="absolute md:w-[22%] top-[80%] left-[38%]">
        <Image
          src="/assets/otgu-pics/otgu-nav-mobile.png"
          layout="responsive"
          width="56vw"
          height="100vh"
          priority
          alt="message me chat room page for mobile"
        />
      </div>

      <div className="absolute md:w-[22%] top-[80%] left-[72%]">
        <Image
          src="/assets/otgu-pics/otgu-glockies-mobile.png"
          layout="responsive"
          width="56vw"
          height="100vh"
          priority
          alt="message me menu page for mobile"
        />
      </div>
    </>
  );
};

export default OtguImages;
