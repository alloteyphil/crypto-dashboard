"use client";

import Image from "next/image";
import React from "react";
import Magnifier from "../../public/Magnifier icn.png";
import Menu from "../../public/Menu icn.png";
import Notification from "../../public/Notif Badge.png";
import Face from "../../public/Face.png";
import { ChevronDownIcon } from "lucide-react";
import { useNotifStore } from "@/store/store";

const NotificationBar = () => {
  const notifIsOpen = useNotifStore((state) => state.notifIsOpen);

  const setNotifIsOpen = useNotifStore((state) => state.setNotifIsOpen);

  return (
    <div className="flex gap-6 relative">
      <Image
        src={Magnifier}
        width={31}
        height={31}
        className="object-center object-cover cursor-pointer"
      />
      <Image
        src={Menu}
        width={31}
        height={31}
        className="object-center object-cover cursor-pointer"
      />
      <Image
        src={Notification}
        width={48}
        height={28}
        className="object-center object-cover cursor-pointer"
        onClick={() => setNotifIsOpen(!notifIsOpen)}
      />
      <div className="flex gap-3 items-center">
        <Image
          src={Face}
          width={31}
          height={31}
          className="object-center object-cover cursor-pointer"
        />
        <p>Pixelz Warrios</p>
        <ChevronDownIcon size={14} fill="#6F6C99" className="cursor-pointer" />
      </div>
    </div>
  );
};

export default NotificationBar;
