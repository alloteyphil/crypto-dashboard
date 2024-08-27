"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const SideBarLinks = () => {
  const pathname = usePathname();

  return (
    <div className="mt-24 flex flex-col pl-8 w-full gap-10">
      <Link href={"/"} className="flex gap-6 group items-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Dashboard">
            <g id="Group 3">
              <rect
                id="Rectangle 4 Copy"
                className="group-hover:fill-[#53B9EA]"
                x="21.3157"
                y="21.3158"
                width="12"
                height="12"
                rx="1.4"
                fill={`${pathname === "/" ? "#53B9EA" : "#6F6C99"}`}
              />
              <rect
                id="Rectangle 4 Copy 3"
                className="group-hover:fill-[#53B9EA]"
                x="21.3157"
                y="39.3158"
                width="12"
                height="12"
                rx="1.4"
                fill={`${pathname === "/" ? "#53B9EA" : "#6F6C99"}`}
              />
              <rect
                id="Rectangle 4 Copy 2"
                className="group-hover:fill-[#53B9EA]"
                x="39.3157"
                y="21.3158"
                width="12"
                height="12"
                rx="1.4"
                fill={`${pathname === "/" ? "#53B9EA" : "#6F6C99"}`}
              />
              <rect
                id="Rectangle 4 Copy 4"
                className="group-hover:fill-[#53B9EA]"
                x="39.3157"
                y="39.3158"
                width="21"
                height="21"
                rx="1.4"
                fill={`${pathname === "/" ? "#53B9EA" : "#6F6C99"}`}
              />
            </g>
          </g>
        </svg>

        <p
          className={`${
            pathname === "/" ? "text-[#53B9EA]" : "text-[#6F6C99]"
          } group-hover:text-[#53B9EA] text-sm`}
        >
          Dashboard
        </p>
      </Link>
      <Link href={"/wallet"} className="flex gap-6 group items-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Wallet">
            <path
              id="Combined Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              className="group-hover:fill-[#53B9EA]"
              d="M27 21C23.6863 21 21 23.6863 21 27V54C21 57.3137 23.6863 60 27 60H54C57.3137 60 60 57.3137 60 54V27C60 23.6863 57.3137 21 54 21H27ZM43.5 36C41.0147 36 39 38.0147 39 40.5C39 42.9853 41.0147 45 43.5 45H49.5C51.9853 45 54 42.9853 54 40.5C54 38.0147 51.9853 36 49.5 36H43.5Z"
              fill={`${pathname.includes("wallet") ? "#53B9EA" : "#6F6C99"}`}
            />
          </g>
        </svg>

        <p
          className={`${
            pathname.includes("wallet") ? "text-[#53B9EA]" : "text-[#6F6C99]"
          } group-hover:text-[#53B9EA] text-sm`}
        >
          Wallet
        </p>
      </Link>
      <Link href={"/messages"} className="flex gap-6 group items-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Message">
            <g id="Group 5">
              <path
                id="Combined Shape"
                fillRule="evenodd"
                clipRule="evenodd"
                className="group-hover:fill-[#53B9EA]"
                d="M57.9689 26.8792C58.7454 24.5497 56.5292 22.3336 54.1998 23.1101L24.4856 33.0148C22.3842 33.7153 21.7546 36.3823 23.3209 37.9486L30.1997 44.8274L42.9084 38.1705L36.2515 50.8792L43.1303 57.7581C44.6966 59.3244 47.3637 58.6948 48.0642 56.5934L57.9689 26.8792Z"
                fill={`${
                  pathname.includes("messages") ? "#53B9EA" : "#6F6C99"
                }`}
              />
              <circle
                id="Oval 2"
                cx="25.5"
                cy="55.5"
                r="4.5"
                className="group-hover:fill-[#53B9EA]"
                fill={`${
                  pathname.includes("messages") ? "#53B9EA" : "#6F6C99"
                }`}
              />
            </g>
          </g>
        </svg>

        <p
          className={`${
            pathname.includes("messages") ? "text-[#53B9EA]" : "text-[#6F6C99]"
          } group-hover:text-[#53B9EA] text-sm`}
        >
          Messages
        </p>
      </Link>
      <Link href={"/trade"} className="flex gap-6 group items-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Trade">
            <path
              id="Combined Shape"
              fillRule="evenodd"
              clipRule="evenodd"
              className="group-hover:fill-[#53B9EA]"
              d="M39 39H18V18L26.3787 26.3787L29.5607 23.1967C30.7322 22.0251 32.6317 22.0251 33.8033 23.1967C34.9749 24.3682 34.9749 26.2677 33.8033 27.4393L30.6213 30.6213L39 39ZM63.8033 41.1967H42.8033L51.182 49.5754L48 52.7574C46.8284 53.9289 46.8284 55.8284 48 57C49.1716 58.1716 51.0711 58.1716 52.2426 57L55.4246 53.818L63.8033 62.1967V41.1967Z"
              fill={`${pathname.includes("trade") ? "#53B9EA" : "#6F6C99"}`}
            />
          </g>
        </svg>

        <p
          className={`${
            pathname.includes("trade") ? "text-[#53B9EA]" : "text-[#6F6C99]"
          } group-hover:text-[#53B9EA] text-sm`}
        >
          Trade
        </p>
      </Link>
      <Link href={"/account"} className="flex gap-6 group items-center">
        <svg
          width="30"
          height="30"
          viewBox="0 0 81 81"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g id="Account">
            <g id="Group 6">
              <path
                id="Triangle 2"
                className="group-hover:fill-[#53B9EA]"
                d="M36.9469 63.7502C38.0595 65.9351 41.181 65.9351 42.2936 63.7502L53.3769 41.9852C54.1879 40.3925 53.4351 38.4483 51.7629 37.8172L43.188 34.5808C41.1996 33.8303 39.0098 33.8077 37.0064 34.517L27.5677 37.8586C25.8594 38.4634 25.0733 40.4331 25.8956 42.0479L36.9469 63.7502Z"
                fill={`${pathname.includes("account") ? "#53B9EA" : "#6F6C99"}`}
              />
              <circle
                id="Oval 3"
                cx="40.5"
                cy="22.5"
                r="7.5"
                className="group-hover:fill-[#53B9EA]"
                fill={`${pathname.includes("account") ? "#53B9EA" : "#6F6C99"}`}
              />
            </g>
          </g>
        </svg>

        <p
          className={`${
            pathname.includes("account") ? "text-[#53B9EA]" : "text-[#6F6C99]"
          } group-hover:text-[#53B9EA] text-sm`}
        >
          Account settings
        </p>
      </Link>
    </div>
  );
};

export default SideBarLinks;
