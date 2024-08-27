"use client";

import { usePathname } from "next/navigation";

const PageTitle = () => {
  const pathname = usePathname();

  return (
    <p className="capitalize text-white font-semibold text-3xl">
      {pathname.split("/")[1].length < 1
        ? "Dashboard"
        : pathname.split("/")[1] === "account"
        ? "Account Settings"
        : pathname.split("/")[1]}
    </p>
  );
};

export default PageTitle;
