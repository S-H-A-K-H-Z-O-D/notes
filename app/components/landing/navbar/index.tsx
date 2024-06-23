import React from "react";
import Link from "next/link";
import { SearchIcon } from "@/app/components/common/Icons";
import Avatar from "@/app/components/landing/navbar/Avatar";
import Image from "next/image";

const Navbar = ({ layout = false }) => {
  return (
    <nav
      className={`bg-white border-gray-200 dark:bg-gray-900 py-3 px-[clamp(1rem,_4vw,_2rem)]
      ${layout ? "border-b" : "max-md:border-b"}`}
    >
      <div className="flex flex-wrap items-center justify-between">
        <Link
          href="/"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <Image
            src="https://flowbite.com/docs/images/logo.svg"
            width={32}
            height={32}
            alt="Flowbite Logo"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Flowbite
          </span>
        </Link>

        <div className="relative w-[500px]">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none [&_svg_path]:stroke-muted-foreground">
            <SearchIcon />
            <span className="sr-only">Search icon</span>
          </div>
          <input
            type="text"
            id="search-navbar"
            className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 outline-none"
            placeholder="Search..."
          />
        </div>

        <Avatar />
      </div>
    </nav>
  );
};

export default Navbar;
