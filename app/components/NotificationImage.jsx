"use client";

import Image from "next/image";

const NotificationImage = ({ image }) => {
  return (
    <Image
      src={image}
      width={70}
      height={10}
      className="object-contain object-center"
    />
  );
};

export default NotificationImage;
