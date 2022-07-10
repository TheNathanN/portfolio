import Image from "next/image";
import React from "react";

const MessageImages = () => {
  return (
    <>
      <div className="absolute w-[13em] -top-14 -left-[0%] md:w-[65%] md:top-0 md:left-0">
        <Image
          src="/assets/message-pics/message-desktop-room.png"
          layout="responsive"
          width="100vw"
          height="60vh"
          priority
          alt="message me chat room page for desktop"
        />
      </div>

      <div className="absolute w-[13em] -top-2 right-[0%] md:w-[65%] md:top-[5%] md:left-[30%]">
        <Image
          src="/assets/message-pics/message-desktop-signIn.png"
          layout="responsive"
          width="100vw"
          height="60vh"
          priority
          alt="message me sign in page for desktop"
        />
      </div>

      <div className="absolute md:w-[20%] top-[72%] left-[5%]">
        <Image
          src="/assets/message-pics/message-mobile-signIn.png"
          layout="responsive"
          width="50vw"
          height="100vh"
          priority
          alt="message me sign in page for mobile"
        />
      </div>

      <div className="absolute md:w-[20%] top-[72%] left-[38%]">
        <Image
          src="/assets/message-pics/message-mobile-room.png"
          layout="responsive"
          width="50"
          height="100vh"
          priority
          alt="message me chat room page for mobile"
        />
      </div>

      <div className="absolute md:w-[20%] top-[72%] left-[72%]">
        <Image
          src="/assets/message-pics/message-mobile-menu.png"
          layout="responsive"
          width="50vw"
          height="100vh"
          priority
          alt="message me menu page for mobile"
        />
      </div>
    </>
  );
};

export default MessageImages;
