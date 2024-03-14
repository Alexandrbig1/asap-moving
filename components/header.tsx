"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { GiHandTruck } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";

const headerList = [
  {
    title: "home",
  },
  {
    title: "about",
  },
  {
    title: "services",
  },
  {
    title: "reviews",
  },
  {
    title: "contact",
  },
];

export default function Header() {
  return (
    <header className="z-[999] relative  ">
      <motion.div
        className="flex items-center justify-between px-6 py-2  fixed top-6 left-1/2 h-6 w-[90%] rounded-lg border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem]  sm:top-6 sm:h-[3.25rem] dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <Link className="flex items-center gap-1.5" href="#home">
          <FaTruckFast style={{ fontSize: "1.6rem" }} />
          ASAPmoving
        </Link>
        <nav className="">
          <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500  sm:w-[initial] sm:flex-nowrap sm:gap-5">
            {headerList.map((item) => (
              <motion.li
                key={item.title}
                className="h-3/4 flex items-center justify-center relative"
                initial={{ y: -100, x: "-50%", opacity: 0 }}
                animate={{ y: 0, x: "-50%", opacity: 1 }}
              >
                <Link
                  className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
                  href={`#${item.title}`}
                >
                  {item.title}
                </Link>
              </motion.li>
            ))}
          </ul>
        </nav>
        <div>theme</div>
      </motion.div>
    </header>
  );
}
