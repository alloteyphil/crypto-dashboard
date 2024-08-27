"use client";

import notification from "../data/notification";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import NotificationImage from "./NotificationImage";
import { EllipsisVerticalIcon } from "lucide-react";
import { useNotifStore } from "@/store/store";

const NotificationPanel = () => {
  const notifIsOpen = useNotifStore((state) => state.notifIsOpen);

  function getTimeDifference(startDate, endDate) {
    const diffInMs = endDate - startDate;
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));

    if (diffInMinutes >= 60 * 24) {
      const days = Math.floor(diffInMinutes / (60 * 24));
      const remainingMinutes = diffInMinutes % (60 * 24);
      const hours = Math.floor(remainingMinutes / 60);
      return `${days}d ${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else if (diffInMinutes >= 60) {
      const hours = Math.floor(diffInMinutes / 60);
      return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
    } else {
      return `${diffInMinutes} minute${diffInMinutes !== 1 ? "s" : ""} ago`;
    }
  }

  return (
    <div
      className={`fixed bg-[#262250] rounded-xl w-[450px] pt-10 pb-6 right-12 z-10 top-32 shadow-2xl ${
        notifIsOpen ? "block" : "hidden"
      }`}
    >
      <h3 className="px-8 w-full">Notifications</h3>
      <div className="flex flex-col my-6 w-full">
        {notification.map((item) => (
          <div
            className={`py-5 relative flex items-start gap-3 w-full px-8 group cursor-pointer hover:bg-[#17153a]/60 transition-colors duration-300 ease-in-out ${
              item.viewed ? "bg-[#17153a]" : ""
            }`}
            key={item.id}
          >
            <EllipsisVerticalIcon className="absolute right-4 top-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out hidden group-hover:block" />
            <Avatar>
              <AvatarImage src={item.image} />
              <AvatarFallback colour={item.colour}>
                {item.title[0]}
              </AvatarFallback>
            </Avatar>
            <div className="flex flex-col gap-1 w-full">
              <div className="flex gap-3 items-end">
                <h3
                  className={`group-hover:opacity-100 transition-colors duration-300 ease-in-out ${
                    !item.viewed ? "text-white opacity-50" : ""
                  }`}
                >
                  {item.title}
                </h3>
                <p className="text-[11px] opacity-50">
                  {item.category === "message"
                    ? "Sent a message"
                    : item.category === "payment"
                    ? "Sent a coin"
                    : "News"}
                </p>
              </div>
              <p className={`text-[11px] ${item.viewed ? "opacity-50" : ""}`}>
                {item.description}
              </p>
              {item.addon && (
                <div className="flex justify-between w-full">
                  {item.addon.map((image) => (
                    <NotificationImage key={image} image={image} />
                  ))}
                  <Link
                    href={"#"}
                    className="ml-auto underline text-blue-400 text-[11px]"
                  >
                    {item.category === "payment"
                      ? "Open my wallet"
                      : "Trade now"}
                  </Link>
                </div>
              )}
              <p className="text-[11px] opacity-50">
                {getTimeDifference(item.createdAt, new Date())}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="w-full mt-auto grid place-items-center">
        <Link href={"#"} className="text-blue-400 text-[11px] hover:underline">
          See all
        </Link>
      </div>
    </div>
  );
};

export default NotificationPanel;
