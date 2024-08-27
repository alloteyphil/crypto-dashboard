"use client";

import React from "react";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import SideBarLinks from "./SideBarLinks";

const SideBar = () => {
  return (
    <div className="flex flex-col pl-12 pt-16 w-[20%] bg-gradient-to-b from-[#262250] via-[#1B1942] to-[#17163B]">
      <Image src={Logo} alt="Logo" />
      <SideBarLinks />
    </div>
  );
};

export default SideBar;
