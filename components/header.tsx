"use client";

import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-6 left-0 h-[6rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:rounded-full dark:bg-gray-950 dark:border-black/40 dark:bg-opacity-75"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      ></motion.div>
      <nav className="flex fixed top-6 left-0 h-12  py-2 sm:top-[1.7rem] sm:h-[initial] sm:py-0">
        <ul className="flex w-[22rem] flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-gray-500 sm:w-[initial] sm:flex-nowrap sm:gap-5">
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              href="#home"
            >
              home
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              href="#about"
            >
              about
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              href="#services"
            >
              services
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              href="#reviews"
            >
              reviews
            </Link>
          </motion.li>
          <motion.li
            className="h-3/4 flex items-center justify-center relative"
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
          >
            <Link
              className="flex w-full items-center justify-center px-3 py-3 hover:text-gray-950 transition dark:text-gray-500 dark:hover:text-gray-300"
              href="#contact"
            >
              contact
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
