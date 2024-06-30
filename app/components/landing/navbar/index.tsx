import React from "react";
import Link from "next/link";
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
            src="/logo.svg"
            className="-mr-3"
            alt="Logo"
            width={40}
            height={20}
          />
          <p className="font-semibold text-2xl font-sans italic">QAYDNOMA</p>
        </Link>

        <Avatar />
      </div>
    </nav>
  );
};

export default Navbar;
