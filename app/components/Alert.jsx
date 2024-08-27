"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Alert = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleDismiss = () => {
    setIsVisible(false);
  };

  if (!isVisible) {
    return null;
  }
  return (
    <div className="backdrop-blur-lg backdrop-brightness-75 bg-[#332f6a]/30 fixed bottom-32 left-24 z-10 rounded-xl p-5 w-[420px] mx-auto flex flex-col items-center shadow-2xl">
      <div className="flex flex-col items-center mb-4">
        <Image
          src="/AlertIcon.png"
          width={100}
          height={60}
          className="object-contain object-center"
        />
        <p>
          You just earn <span className="text-green-400">0.02343,00</span> BTC
        </p>
      </div>
      <Link href="#" className="text-blue-400 underline mb-4 text-[11px]">
        See history
      </Link>
      <button
        onClick={handleDismiss}
        className="bg-[#332f6d] text-[#8c8abf] rounded-xl px-6 py-2 text-sm"
      >
        Dismiss
      </button>
    </div>
  );
};

export default Alert;
